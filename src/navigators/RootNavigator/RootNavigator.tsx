import { useSelector } from 'react-redux';
import { 
    StatusBar, SafeAreaView, KeyboardAvoidingView,
    useWindowDimensions, Platform
} from 'react-native';
import LoginHeader from './LoginHeader/Loginheader';
import LoginScreen from '../../screens/Auth/Auth';
import AppNavigator from '../AppNavigator/AppNavigator';

import { NAVIGATOR } from '../../shared/constants';
import { LanguageContext } from '../../contexts';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../../themes/constants';
import { RootState } from '../../store';

import LANG_EN_US from '../../shared/languages/en-US';

const Stack = createStackNavigator();
const LANG = LANG_EN_US;

export default function RootNavigator():JSX.Element {
    const wDims = useWindowDimensions();
    const headerHeight = Math.max(20, wDims.height / 35);
    const credentials = useSelector((state: RootState) => state.credentials);

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