import { useState, useContext } from 'react';
import { View, Image, Text, Pressable, Dimensions } from 'react-native';
import { SvgSearch, SvgMicrophone, SvgCamera } from '../../../../assets/icons/svg';
import Category from './Category/Category';

import { NAVIGATOR } from '../../../../shared/constants';
import { LanguageContext } from '../../../../contexts';
import { flipkartLogo2, placeholders } from '../../../../assets/images/sources';
import styles from './Explore.style';
import { Colors } from '../../../../themes/constants';
import { BasicScreenProps } from '../../../../@types/commons';

export default function ExploreScreen({ navigation } : BasicScreenProps): JSX.Element {
    const LANG = useContext(LanguageContext);

    return (
        <View style = { styles.homeContainer }>
            {/* Header */}

            <View style = { styles.headerContainer }>
                <HeaderLogo />
                <View style = { styles.searchOuter }>
                    <View style = { styles.brandMall }>
                        <Text style = { styles.brandMallText }>Brand Mall</Text>
                    </View>
                    <Pressable 
                        style = { styles.searchContainer }
                        onPress = {() => {
                            navigation?.navigate(NAVIGATOR.APP, {
                                screen: NAVIGATOR.HOME, params: {
                                    screen: NAVIGATOR.PRODUCTS
                                }
                            });
                        }}
                    >
                        <View style = { styles.searchIcon }>
                            <SvgSearch fill = { Colors.FG_tertiary }/>
                        </View>
                        <Text style = { styles.searchText }>{ LANG.SEARCH_PRODUCTS }</Text>
                        <Pressable style = { styles.searchVoice }>
                            <SvgMicrophone stroke = { Colors.FG_tertiary } fill = { Colors.FG_tertiary }/>
                        </Pressable>
                        <Pressable style = { styles.searchCamera }>
                            <SvgCamera stroke = { Colors.FG_tertiary }/>
                        </Pressable>
                    </Pressable>
                </View>
            </View>

            {/* Categories */}

            <View style = { styles.categoryContainer }>
                {
                    placeholders.map((x, index) => (
                        <Category 
                            key = { index } source = { x.source } 
                            name = { LANG.CATEGORIES[x.name] } tag = { x.name }
                            navigation = { navigation }
                        />
                    ))
                }
            </View>
        </View>
    );
}

function HeaderLogo(): JSX.Element {
    const [logo, setLogo] = useState(Image.resolveAssetSource(flipkartLogo2));
    const imageHeight = Math.min(Dimensions.get('window').height / 30, 50);

    return (
        <Image 
            style = {{ width: imageHeight * logo.width / logo.height, height: imageHeight }}
            source = { flipkartLogo2 }
        />
    );
};