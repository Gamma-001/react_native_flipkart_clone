import { useContext, useState } from 'react';
import { View, Pressable, Text} from 'react-native';

import { LanguageContext } from '../../../contexts';
import styles from './SubmitButton.style';
import { Colors } from '../../../themes/constants';

export default function SubmitButton(props: { disabled: boolean, login: Function }):JSX.Element {
    const LANG = useContext(LanguageContext);
    const [opacity, setOpacity] = useState(1);

    return (
        <View style = { styles.btnSubmitOuter }>
            <Pressable 
                style = {[ 
                    styles.btnSubmitInner, 
                    { opacity: opacity, backgroundColor: !props.disabled ? Colors.BG_BTN_primary :Colors.BG_BTN_inactive } 
                ]}
                disabled = { props.disabled }
                onPressIn = {() => setOpacity(0.75)}
                onPressOut = {() => {
                    setOpacity(1);
                    props.login();
                }}
            >
                <Text style = { styles.btnSubmitText }>{ LANG.CONTINUE }</Text>
            </Pressable>
        </View>
    );
}