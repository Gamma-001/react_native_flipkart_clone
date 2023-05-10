import { useState, useContext } from 'react';
import { View, Image, Text, Pressable, Dimensions, ImageSourcePropType, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../Products/Products';
import { SvgSearch, SvgMicrophone, SvgCamera } from '../../../../assets/icons/svg';

import { LanguageContext } from '../../../../contexts';
import { flipkartLogo2, placeholders } from '../../../../assets/images/sources';
import styles from './Explore.styles';
import commonStyles from '../../../../themes/commons';
import { Colors } from '../../../../themes/constants';
import { BasicScreenProps } from '../../../../@types/commons';

const Stack = createStackNavigator();

export default function HomeScreen(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName = 'explore' screenOptions = {{
            headerShown: false,
        }}>
            <Stack.Screen name = 'explore' component = { Home }/>
            <Stack.Screen name = 'products' component = { ProductsScreen }/>
        </Stack.Navigator>
    );
}

function Home({ navigation } : BasicScreenProps): JSX.Element {
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
                            // navigation?.navigate('mainApp', {
                            //     screen: 'home', params: {
                            //         screen: 'products'
                            //     }
                            // });
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

type CategoryProp = BasicScreenProps & {
    source: ImageSourcePropType,
    name: string,
    tag: string
};
function Category({ source, name, tag, navigation }: CategoryProp): JSX.Element {
    const [image, setImage] = useState(Image.resolveAssetSource(source))
    const imageWidth = (Dimensions.get('window').width - (styles.categoryContainer.padding || 0) * 2) / 4 - 2 * (styles.category.padding || 0);

    return (
        <Pressable 
            style = { styles.category }
            onPress = {() => {
                navigation?.navigate('mainApp', {
                    screen: 'home', params: {
                        screen: 'products', params: {
                            tags: [ tag ]
                        }
                    }
                })
            }}
        >
            <View style = { styles.categoryImage }>
                <Image 
                    style = {{ width: imageWidth, height: imageWidth * image.height / image.width }}
                    source = { source }
                />
            </View>
            <View style = { styles.categoryTextOuter }>
                <Text style = {[ styles.categoryText, { maxWidth: imageWidth - (styles.category.padding || 0) * 2 } ]}>{ name }</Text>
            </View>
        </Pressable>
    );
}