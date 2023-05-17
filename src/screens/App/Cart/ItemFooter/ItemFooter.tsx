import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Alert } from 'react-native';
import { FButtonBGHighlight } from '../../../../components/FButton/Fbutton';
import { useRemoveFromCartMutation } from '../../../../features/services/api';

import { LanguageContext } from '../../../../contexts';
import { removeCart } from '../../../../features/userData/userDataSlice';

import styles from './ItemFooter.styles';
import { Colors } from '../../../../themes/constants';

import { RootState } from '../../../../store';

export default function ItemFooter({ productID }: { productID: string }): JSX.Element {
    const LANG = useContext(LanguageContext);
    const dispatch = useDispatch();

    const [ removeFromCart, removeFromCartStatus ] = useRemoveFromCartMutation();
    const credentials = useSelector((state: RootState) => state.credentials);

    useEffect(() => {
        if (removeFromCartStatus.isSuccess) {
            dispatch(removeCart(productID));
        }
    }, [removeFromCartStatus.isSuccess]);

    // handlers

    const handleRemove = () => {
        Alert.alert(LANG.REMOVE, LANG.CONFIRMATION, [
            { text: LANG.NO, onPress: () => {}},
            { text: LANG.YES, onPress: () => {
                removeFromCart({
                    phone: credentials.phone,
                    token: credentials.sessionID,
                    productID
                });
            }},
        ])
    };

    return (
        <View style = {{ flexDirection: 'row' }}>
            <FButtonBGHighlight 
                style = { styles.itemButtonLeft } highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
                onPress = { handleRemove }
            >
                <Text style = {[ styles.itemButtonText, { color: Colors.FG_primary } ]}>{ LANG.REMOVE }</Text>
            </FButtonBGHighlight>
            <FButtonBGHighlight style = { styles.itemButton } highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }>
                <Text style = { styles.itemButtonText }>{ LANG.SAVE_FOR_LATER }</Text>
            </FButtonBGHighlight>
        </View>
    )
};