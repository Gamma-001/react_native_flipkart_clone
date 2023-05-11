import { useState, useContext } from 'react';
import { 
    View, 
    TextInput, 
    Pressable,
} from 'react-native';
import { SvgSearch, SvgMicrophone, SvgCamera } from '../../../../../assets/icons/svg';

import { LanguageContext } from '../../../../../contexts';
import styles from './SearchBar.style';
import { Colors } from '../../../../../themes/constants';

import { BasicScreenProps } from '../../../../../@types/commons';

export default function SearchBar({ navigation }: BasicScreenProps): JSX.Element {
    const [query, setQuery] = useState('');
    const LANG = useContext(LanguageContext)

    return (
        <View style = { styles.searchContainer }>
            <Pressable 
                style = { styles.searchIcons }
                onPress = {() => {
                    navigation?.goBack()
                }}
            >
                <SvgSearch fill = { Colors.FG_tertiary } />
            </Pressable>
            <TextInput 
                style = { styles.textInput } placeholderTextColor = { Colors.FG_tertiary_highlight }
                value = { query } placeholder = { LANG.SEARCH_PRODUCTS }
                onChangeText = { setQuery }
                underlineColorAndroid = 'transparent'
            />
            <View style = { styles.searchIcons }>
                <SvgMicrophone fill = { Colors.FG_tertiary } />
            </View>
            <View style = { styles.searchIcons }>
                <SvgCamera fill = { Colors.FG_tertiary } />
            </View>
        </View>
    )
}