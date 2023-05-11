import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import SubmitButton from './SubmitButton/SubmitButton';

import { LanguageContext } from '../../contexts';
import { useLoginMutation, useSignupMutation } from '../../features/services/api';
import { setCredentials } from '../../features/credentials/credentialsSlice';

import { NAVIGATOR } from '../../shared/constants'; 
import styles from './Auth.style';
import commonStyles from '../../themes/commons';

import { CommonActions, NavigationProp } from '@react-navigation/native';

const LOGIN_OPTS = {
    PHONE: 0,
    EMAIL: 1
};

export default function AuthScreen({ navigation }: { navigation: NavigationProp<any> }): JSX.Element {
    const LANG = useContext(LanguageContext);
    const dispatch = useDispatch();

    const [login, loginStatus] = useLoginMutation();
    const [signup, signupStatus] = useSignupMutation();

    const [isLogin, setIsLogin] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const [type, setType] = useState(LOGIN_OPTS.PHONE);
    const [inputValue, setInputValue] = useState('+91 ');

    // handle login status
    useEffect(() => {
        if (loginStatus.isError) {
            const error = loginStatus.error as any;
            if (error.status >= 400 && error.status < 500) {
                setIsLogin(false); setDisabled(true);
                setType(LOGIN_OPTS.PHONE); setInputValue('+91 ');
            }
            else {
                Alert.alert(LANG.ERROR.server);
                type == LOGIN_OPTS.PHONE ? setInputValue('+91 ') : setInputValue('');
            }
    
            loginStatus.reset();
        }
        else if (loginStatus.isSuccess) {
            dispatch(setCredentials({
                ...getDerivedInputObject(inputValue, type),
                sessionID: loginStatus.data.sessionID
            }));
            const resetActions = CommonActions.reset({
                index: 0,
                routes: [
                    {name: NAVIGATOR.APP, params: {
                        screen: NAVIGATOR.ACCOUNT
                    }}
                ]
            })
            navigation.dispatch(resetActions);
        }
    }, [loginStatus]);

    if (signupStatus.isError) {
        const error = signupStatus.error as any;
        type == LOGIN_OPTS.PHONE ? setInputValue('+91 ') : setInputValue('');
        signupStatus.reset();

        Alert.alert(error.data.message);
    }
    else if (signupStatus.isSuccess) {
        Alert.alert('Account created successfully');

        signupStatus.reset();
        setIsLogin(true); setDisabled(true);
        setType(LOGIN_OPTS.PHONE); setInputValue('+91 ');
    }

    // event handlers
    const handleSetInputValue = (text: string) => {
        if (type == LOGIN_OPTS.PHONE) {
            if (text.split(' ').length < 2) return;
            if (text.split(' ')[1].length > 10) return;
            if (text.split(' ')[1].length == 10) {
                setDisabled(false);
                setInputValue(text);
                return;
            }
        }
        else {
            if (text.match(/^[a-zA-Z0-9._]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/g)) {
                setDisabled(false);
                setInputValue(text);
                return;
            }
        }

        setDisabled(true);
        setInputValue(text);
    };
    const handleSwitch = () => {
        if (type == LOGIN_OPTS.PHONE) {
            setType(LOGIN_OPTS.EMAIL);
            setInputValue('');
        }
        else {
            setType(LOGIN_OPTS.PHONE);
            setInputValue('+91 ');
        }
        setDisabled(true);
    };

    return (
        <>
        <View style = { styles.formContainer } >
            <Text style = { styles.formTextTitle }>{ isLogin ? LANG.LOGIN.title : LANG.SIGNUP.title }</Text>
            <Text style = { styles.formTextDesc }>{ 
                isLogin ? (
                    type == LOGIN_OPTS.PHONE ? LANG.LOGIN.descNumber : LANG.LOGIN.descEmail
                ) : (
                    type == LOGIN_OPTS.PHONE ? LANG.SIGNUP.descNumber : LANG.SIGNUP.descEmail
                )
            }</Text>

            <View style = { styles.inputLegend }>
                <Text style = {[ styles.inputLegendText, commonStyles.highlightedText ]}>{ 
                    type == LOGIN_OPTS.PHONE ? LANG.PHONE_NUMBER : LANG.EMAIL 
                }</Text>
            </View>
            <View style = { styles.inputContainer }>
                <TextInput 
                    autoCapitalize = 'none'
                    value = { inputValue } onChangeText = { handleSetInputValue } 
                    inputMode = { type == LOGIN_OPTS.PHONE ? 'tel' : 'email' } style = { styles.input }
                />
            </View>
            <Pressable onPress = { handleSwitch }>
                <Text style = {[ styles.formSwitchType, commonStyles.highlightedText ]}>{ 
                    type == LOGIN_OPTS.PHONE ? LANG.USE_EMAIl : LANG.USE_PHONE 
                }</Text>
            </Pressable>

            <View style = { styles.termsOuter }>
                <Text style = { styles.disclamerText } >{ LANG.T_AND_S[0] } </Text>
                <Text style = {[ styles.disclamerText, commonStyles.highlightedText ]}>{ LANG.T_AND_S[1] } </Text>
                <Text style = { styles.disclamerText }>{ LANG.T_AND_S[2] } </Text>
                <Text style = {[ styles.disclamerText, commonStyles.highlightedText ]}>{ LANG.T_AND_S[3] }</Text>
            </View>
        </View>

        {/* footer */}
        <SubmitButton disabled = { disabled } login = {() => {
            if (loginStatus.isLoading || signupStatus.isLoading) return;

            const arg = getDerivedInputObject(inputValue, type);
            isLogin ? login(arg) : signup(arg);
        }} />
        </>
    );
};

// helper functions

function getDerivedInputObject(value: string, type: number) {
    if (type == LOGIN_OPTS.PHONE) return { phone: value.replace(/[ ]+/g, '') };
    else return { email: value.toLowerCase() };
}