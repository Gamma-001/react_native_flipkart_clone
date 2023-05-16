import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Alert } from 'react-native';
import { FButtonBGHighlight } from '../../../../../components/FButton/Fbutton';
import { LanguageContext } from '../../../../../contexts';
import { useRemoveFavoriteMutation } from '../../../../../features/services/api';

import { removeFavorite } from '../../../../../features/userData/userDataSlice';
import styles from './RemoveButton.style';
import { Colors } from '../../../../../themes/constants';

import { RootState } from '../../../../../store';

export default function RemoveButton({ productID }: { productID: string }): JSX.Element {
    const LANG = useContext(LanguageContext);
    const dispatch = useDispatch();

    const credentials = useSelector((state: RootState) => state.credentials);
    const [remove, removeStatus] = useRemoveFavoriteMutation();

    useEffect(() => {
        if (removeStatus.isSuccess) {
            dispatch(removeFavorite(productID));
            removeStatus.reset();
        }
    }, [removeStatus.isSuccess]);

    // handlers

    const handlePress = () => {
        Alert.alert(LANG.FAV_ACK_DEL, LANG.CONFIRMATION, [
            { text: LANG.NO, onPress: () => {} },
            { text: LANG.YES, onPress: () => { 
                remove({ phone: credentials.phone, token: credentials.sessionID, productID });
            }}
        ]);
    };

    return (
        <FButtonBGHighlight 
            style = { styles.removeButton } highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
            onPress = { handlePress }
        >
            <Text style = { styles.removeButtonText }>{ LANG.REMOVE }</Text>
        </FButtonBGHighlight>
    );
}