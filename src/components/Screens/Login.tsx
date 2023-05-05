import { useContext, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';

import { LanguageContext } from '../../contexts';

import styles from '../../styles/s_Login';
import commonStyles from '../../styles/commons';
import { Colors } from '../../styles/constants';

export default function LoginScreen(): JSX.Element {
    const LANG = useContext(LanguageContext);
    
    const [isLogin, setIsLogin] = useState(true);
    const [isValid, setIsValid] = useState(false);
    const [type, setType] = useState(0); // 0: number, 1: email
    const [inputValue, setInputValue] = useState('+91 ');

    const handleSetInputValue = (text: string) => {
        if (type == 0) {
            if (text.split(' ').length < 2) return;
            if (text.split(' ')[1].length > 10) return;
            if (text.split(' ')[1].length == 10) {
                setIsValid(true);
                return;
            }
        }
        else {
            if (text.match(/^[a-zA-Z0-9._]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/g)) {
                setIsValid(true);
                setInputValue(text);
                return;
            }
        }

        setIsValid(false);
        setInputValue(text);
    };
    const handleSwitch = () => {
        if (type == 0) {
            setType(1);
            setInputValue('');
        }
        else {
            setType(0);
            setInputValue('+91 ');
        }
    };

    return (
        <>
        <View style = { styles.formContainer } >
            <Text style = { styles.formTextTitle }>{ isLogin ? LANG.LOGIN.title : LANG.SIGNUP.title }</Text>
            <Text style = { styles.formTextDesc }>{ 
                isLogin ? (
                    type == 0 ? LANG.LOGIN.descNumber : LANG.LOGIN.descEmail
                ) : (
                    type == 0 ? LANG.SIGNUP.descNumber : LANG.SIGNUP.descEmail
                )
            }</Text>

            <View style = { styles.inputLegend }>
                <Text style = {[ styles.inputLegendText, commonStyles.highlightedText ]}>{ 
                    type == 0 ? LANG.PHONE_NUMBER : LANG.EMAIL 
                }</Text>
            </View>
            <View style = { styles.inputContainer }>
                <TextInput 
                    value = { inputValue } onChangeText = { handleSetInputValue } 
                    inputMode = { type == 0 ? 'tel' : 'email' } style = { styles.input }
                />
            </View>
            <Pressable onPress = { handleSwitch }>
                <Text style = {[ styles.formSwitchType, commonStyles.highlightedText ]}>{ 
                    type == 0 ? LANG.USE_EMAIl : LANG.USE_PHONE 
                }</Text>
            </Pressable>

            <View style = {{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style = { styles.disclamerText } >{ LANG.T_AND_S[0] } </Text>
                <Text style = {[ styles.disclamerText, commonStyles.highlightedText ]}>{ LANG.T_AND_S[1] } </Text>
                <Text style = { styles.disclamerText }>{ LANG.T_AND_S[2] } </Text>
                <Text style = {[ styles.disclamerText, commonStyles.highlightedText ]}>{ LANG.T_AND_S[3] }</Text>
            </View>
        </View>

        {/* footer */}
        <View style = { styles.btnSubmitOuter }>
            <Pressable style = {[ styles.btnSubmitInner, { backgroundColor: isValid ? Colors.BG_BTN_primary :Colors.BG_BTN_inactive } ]}>
                <Text style = { styles.btnSubmitText }>{ LANG.CONTINUE }</Text>
            </Pressable>
        </View>
        </>
    );
};