import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Alert } from 'react-native';
import { FButtonBGHighlight } from '../../../../../components/FButton/Fbutton';

import { LanguageContext } from '../../../../../contexts';
import { useAddToCartMutation } from '../../../../../features/services/api';
import { addCart } from '../../../../../features/userData/userDataSlice'; 
import { NAVIGATOR } from '../../../../../shared/constants';

import styles from './CartButton.style';
import { Colors } from '../../../../../themes/constants';

import { RootState } from '../../../../../store';
import { NavigationProp } from '@react-navigation/core';

interface CartButtonProps {
    productID: string,
    navigation: NavigationProp<any>
};
export default function CartButton({ navigation, productID }: CartButtonProps): JSX.Element {
    const LANG = useContext(LanguageContext);
    const dispatch = useDispatch();

    const credentials = useSelector((state: RootState) => state.credentials);
    const cart = useSelector((state: RootState) => state.userData.cart);
    const [addToCart, addToCartStatus] = useAddToCartMutation();

    const isCartItem = cart.indexOf(productID) != -1;

    useEffect(() => {
        if (addToCartStatus.isSuccess) {
            dispatch(addCart(productID));
            addToCartStatus.reset();
            Alert.alert(LANG.CART_ACK.ADD);
        }
    }, [addToCartStatus.isSuccess]);

    // handlers

    const handlePress = () => {
        if (isCartItem) {
            navigation?.navigate(NAVIGATOR.APP, {
                screen: NAVIGATOR.CART
            });
        }
        else addToCart({ phone: credentials.phone, token: credentials.sessionID, productID });
    }

    return (
        <FButtonBGHighlight 
            style = { styles.cartButton } highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
            onPress = { handlePress }
        >
            <Text style = {[ styles.cartButtonText, isCartItem && { color: Colors.FG_tertiary } ]}>{ !isCartItem ? LANG.ADD_TO_CART : LANG.GO_TO_CART }</Text>
        </FButtonBGHighlight>
    );
}