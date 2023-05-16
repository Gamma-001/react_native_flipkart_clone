import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchFavoriteQuery, useFetchCartQuery } from '../features/services/api';

import { setFavorites, setCart, setInitialized } from '../features/userData/userDataSlice';

import { RootState } from '../store';

export const useUserData = () => {
    const initialized = useSelector((state: RootState) => state.userData.initialized);

    const dispatch = useDispatch();
    const credentials = useSelector((state: RootState) => state.credentials)
    const params: any[] = [
        {
            phone: credentials.phone,
            token: credentials.sessionID
        }, 
        { skip: initialized || !credentials.sessionID }
    ];
    const favorites = useFetchFavoriteQuery(params[0], params[1]);
    const cart = useFetchCartQuery(params[0], params[1]);

    useEffect(() => {
        if (favorites.isSuccess && cart.isSuccess) {
            dispatch(setFavorites(favorites.data));
            dispatch(setCart(cart.data));
            dispatch(setInitialized());
        }
    }, [favorites.isSuccess, cart.isSuccess]);
}