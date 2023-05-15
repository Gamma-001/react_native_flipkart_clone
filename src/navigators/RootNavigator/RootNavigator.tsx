import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    StatusBar, SafeAreaView, KeyboardAvoidingView,
    useWindowDimensions, Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginHeader from './LoginHeader/Loginheader';
import LoginScreen from '../../screens/Auth/Auth';
import AppNavigator from '../AppNavigator/AppNavigator';

import { CommonActions } from '@react-navigation/core';
import { setCredentials } from '../../features/credentials/credentialsSlice';
import { NAVIGATOR } from '../../shared/constants';
import { LanguageContext } from '../../contexts';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../../themes/constants';
import { RootState } from '../../store';

import LANG_EN_US from '../../shared/languages/en-US';

const Stack = createStackNavigator();
const LANG = LANG_EN_US;

export default function RootNavigator():JSX.Element {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const wDims = useWindowDimensions();
    const headerHeight = Math.max(20, wDims.height / 35);
    const credentials = useSelector((state: RootState) => state.credentials);

    // locate credentials from local storage
    useEffect(() => {
        if (credentials.sessionID != '') return;
        AsyncStorage.getItem('session')
        .then(x => {
            if (x) {
                const [phone, sessionID] = x?.split(':') || [,];
                if (!phone || !sessionID) return;

                const resetActions = CommonActions.reset({
                    index: 0,
                    routes: [{ 
                        name: NAVIGATOR.APP, 
                        params: { 
                            screen: NAVIGATOR.ACCOUNT 
                        } 
                    }]
                });
                dispatch(setCredentials({ phone, sessionID }));
                navigation.dispatch(resetActions);
            }
        })
        .catch(err => {
            // ignore
        });
    }, []);

    return (
        <LanguageContext.Provider value = { LANG }>
        <SafeAreaView style = {{ flex: 1, backgroundColor: credentials.sessionID ? Colors.BG_primary : 'rgb(20 20 20)' }} >
            <StatusBar 
                barStyle = 'light-content' backgroundColor = { credentials.sessionID ? Colors.BG_primary : 'rgb(20 20 20)' }
            />
            <KeyboardAvoidingView 
                style = {{ flex: 1 }} keyboardVerticalOffset = { Platform.OS == 'ios' ? 0 : headerHeight }
                behavior = { Platform.OS == 'ios' ? 'padding' : 'height' }
            >

                <Stack.Navigator initialRouteName = { NAVIGATOR.AUTH }>
                    <Stack.Screen name = { NAVIGATOR.AUTH } component = { LoginScreen } options = {{
                        header: ({ navigation }) => <LoginHeader navigation = { navigation } />,
                        headerMode: 'screen'
                    }}/>
                    <Stack.Screen 
                        name = { NAVIGATOR.APP } component = { AppNavigator } options = {{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
                
            </KeyboardAvoidingView>
        </SafeAreaView>
        </LanguageContext.Provider>
    );
}