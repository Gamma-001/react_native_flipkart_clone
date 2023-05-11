import { useState } from 'react';
import { 
    View, Text, Image, Pressable,
    useWindowDimensions,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';

import { NAVIGATOR } from '../../../shared/constants';
import { Colors } from '../../../themes/constants';
import { flipkartLogo } from '../../../assets/images/sources';
import styles from './LoginHeader.style';

import { NavigationProp } from '@react-navigation/native';

type HeaderProps = {
    navigation: NavigationProp<any>
}
export default function LoginHeader({ navigation }: HeaderProps):JSX.Element {
    const [dims, setDims] = useState({ width: 0, height: 0 });
    const wDims = useWindowDimensions();
    const imageHeight = Math.max(20, wDims.height / 35);

    return (
        <View style = {{ backgroundColor: Colors.BG_primary }} >
            <View style = { styles.loginHeaderContainer }>
                <Pressable 
                    style = { styles.btnClose } 
                    onPress = {() => { 
                        const resetAction = CommonActions.reset({
                            index: 0,
                            routes: [{ name: NAVIGATOR.APP }]
                        });
                        navigation.dispatch(resetAction);
                     }}
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