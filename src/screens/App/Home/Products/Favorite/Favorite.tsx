import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    Pressable 
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/core';
import { SvgHeart } from '../../../../../assets/icons/svg'
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '../../../../../features/services/api';

import { addFavorite, removeFavorite } from '../../../../../features/userData/userDataSlice';
import { NAVIGATOR } from '../../../../../shared/constants';
import { Colors } from '../../../../../themes/constants';

import { RootState } from '../../../../../store';

type SetFavoriteProps = {
    productID: string
};
export default function SetFavorite(props: SetFavoriteProps): JSX.Element {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const credentials = useSelector((state: RootState) => state.credentials);
    const favorites = useSelector((state: RootState) => state.userData.favorites);

    const [addFav, addFavStatus] = useAddFavoriteMutation();
    const [remFav, remFavStatus] = useRemoveFavoriteMutation();

    const [active, setActive] = useState(favorites.indexOf(props.productID) != -1);

    const pressHandler = () => {
        if (credentials.sessionID == '') {
            const resetState = CommonActions.reset({
                index: 0, 
                routes: [{ name:  NAVIGATOR.AUTH }]
            });
            navigation.dispatch(resetState);
        }

        const options = {
            phone: credentials.phone,
            token: credentials.sessionID,
            productID: props.productID
        };

        active ? remFav(options) : addFav(options);
    }

    // check the status 
    useEffect(() => {
        if (addFavStatus.isSuccess) {
            dispatch(addFavorite(props.productID));
            setActive(true);
            addFavStatus.reset();
        }
        else if (remFavStatus.isSuccess) {
            dispatch(removeFavorite(props.productID));
            setActive(false);
            remFavStatus.reset();
        }

        // following conditions should only trigger in case of nework error or data/state corruption
        else if (addFavStatus.isError) { addFavStatus.reset(); }
        else if (remFavStatus.isError) { remFavStatus.reset(); }
    }, [addFavStatus, remFavStatus]);

    return (
        <Pressable onPress = { pressHandler } disabled = { addFavStatus.isLoading || remFavStatus.isLoading }>
            <SvgHeart 
                fill2 = { Colors.BG_tertiary } 
                fill = { !active ? 'rgba(0 0 0 / 0.15)' : Colors.HIGHLIGHT_TERTIARY }
            />
        </Pressable>
    );
}