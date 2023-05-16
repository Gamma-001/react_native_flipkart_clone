import { useContext } from 'react';
import { View, Text, Alert } from 'react-native';
import { FButtonBGHighlight } from '../../../../components/FButton/Fbutton';

import { LanguageContext } from '../../../../contexts';

import styles from './ItemFooter.styles';
import { Colors } from '../../../../themes/constants';

export default function ItemFooter(): JSX.Element {
    const LANG = useContext(LanguageContext);

    return (
        <View style = {{ flexDirection: 'row' }}>
            <FButtonBGHighlight style = { styles.itemButtonLeft } highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }>
                <Text style = {[ styles.itemButtonText, { color: Colors.FG_primary } ]}>{ LANG.REMOVE }</Text>
            </FButtonBGHighlight>
            <FButtonBGHighlight style = { styles.itemButton } highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }>
                <Text style = { styles.itemButtonText }>{ LANG.SAVE_FOR_LATER }</Text>
            </FButtonBGHighlight>
        </View>
    )
};