import { useEffect, useState } from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import styles from './SelectionModal.style';
import { Colors } from '../../../../../themes/constants';

type SelectionModalProps = {
    title: string,
    items: Array <{
        key: any,
        value: string,
    }>,
    setValue: (arg: any) => any,
    close: Function,
    defaultKey?: any,
};
export default function SelectionModal({ title, items, setValue, close, defaultKey }: SelectionModalProps): JSX.Element {
    const [active, setActive] = useState(defaultKey);
    
    return (
        <Modal
            animationType = 'fade'
            transparent = { true }
        >
            <SafeAreaProvider>
            <SafeAreaView style = { styles.SelectionModal }>
                <Pressable onPress = { () => close() }style = {{ flex: 1 }}></Pressable>
                <View style = { styles.SelectionModalTitle }>
                    <Text style = { styles.SelectionModalTitleText }>{ title }</Text>
                </View>
                {
                    items.map(x => (
                        <Pressable 
                            style = {[ 
                                styles.SelectionModalOptions, 
                                active == x.key ? { backgroundColor: Colors.BG_secondary } : {} 
                            ]} key = { x.value }
                            onPress = {() => {
                                setActive(x.key);
                                setValue(x.key);
                                close();
                            }}
                        >
                            <Text style = { styles.SelectionModalOptText }>{ x.value }</Text>
                        </Pressable>
                    ))
                }
            </SafeAreaView>
            </SafeAreaProvider>
        </Modal>
    );
};