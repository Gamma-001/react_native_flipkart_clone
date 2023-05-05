import { useContext } from 'react';
import { View, Text, Pressable } from 'react-native';

import { LanguageContext } from '../../../contexts';
import { NavigationProp } from '@react-navigation/native';

import styles from '../../../styles/MainApp/s_Account';
import { Colors } from '../../../styles/constants';

type AccountScreenProps = {
    navigation: NavigationProp<any>
}
export default function AccountScreen({ navigation }: AccountScreenProps):JSX.Element {
    const LANG = useContext(LanguageContext);

    return (
        <View style = {{ flex: 1, backgroundColor: Colors.BG_secondary }}>
            <View style = { styles.headerOuter }>
                <Text style = { styles.headerText }>{ LANG.ACCOUNT }</Text>
                <View style = { styles.headerDescContainer }>
                    <Text style = { styles.headerDesc }>{ LANG.LOGIN.titleAccount }</Text>
                    <Pressable 
                        style = { styles.btnLogin }
                        onPress = {() => {
                            navigation.navigate('login')
                        }}
                    >
                        <Text style = { styles.btnLoginText }>{ LANG.LOGIN.self }</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}