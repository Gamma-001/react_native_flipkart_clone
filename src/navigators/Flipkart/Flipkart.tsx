import { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
    View, Text, Image, StatusBar, SafeAreaView, KeyboardAvoidingView, Pressable,
    useWindowDimensions, Platform
} from 'react-native';
import LoginScreen from '../../screens/Login/Login';
import MainAppScreen from '../MainApp/MainApp';

import { LanguageContext } from '../../contexts';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../../themes/constants';
import { flipkartLogo } from '../../assets/images/sources';
import styles from './Flipkart.styles';
import { RootState } from '../../store';

import LANG_EN_US from '../../languages/en-US';
import { NavigationProp } from '@react-navigation/native';

const Stack = createStackNavigator();
const LANG = LANG_EN_US;

export default function FlipkartScreen():JSX.Element {
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

                <Stack.Navigator initialRouteName = 'login'>
                    <Stack.Screen name = 'login' component = { LoginScreen } options = {{
                        header: ({ navigation }) => <LoginHeader navigation = { navigation } />,
                        headerMode: 'screen',
                    }}/>
                    <Stack.Screen 
                        name = 'mainApp' component = { MainAppScreen } options = {{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
                
            </KeyboardAvoidingView>
        </SafeAreaView>
        </LanguageContext.Provider>
    );
}

type HeaderProps = {
    navigation: NavigationProp<any>
}
function LoginHeader({ navigation }: HeaderProps):JSX.Element {
    const [dims, setDims] = useState({ width: 0, height: 0 });
    const wDims = useWindowDimensions();
    const imageHeight = Math.max(20, wDims.height / 35);

    return (
        <View style = {{ backgroundColor: Colors.BG_primary }} >
            <View style = { styles.loginHeaderContainer }>
                <Pressable 
                    style = { styles.btnClose } 
                    onPress = {() => { navigation.navigate('mainApp'); }}
                >
                    <Text style = { styles.btnCloseText }>{ String.fromCharCode(parseInt('2715', 16)) }</Text>
                </Pressable>

                <View style = {{ flex: 1 }}>
                    <Image
                        source = { flipkartLogo } 
                        onLoad = {e => {
                            setDims({
                                width: e.nativeEvent.source.width,
                                height: e.nativeEvent.source.height
                            });
                        }}
                        style = {[
                            styles.headerImage, 
                            dims.height > 0 && { height: imageHeight, width: imageHeight * (dims.width / dims.height) }
                        ]}
                    />
                </View>
            </View>
            <View style = { styles.headerBottomBorder }></View>
        </View>
    );
}