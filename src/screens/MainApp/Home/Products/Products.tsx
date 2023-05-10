import { useState, useContext } from 'react';
import { View, TextInput, Pressable, FlatList, Text, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SvgSearch, SvgMicrophone, SvgCamera, SvgHalfStar, SvgFullStar } from '../../../../assets/icons/svg';
import { useFetchProductsQuery } from '../../../../features/services/api';

import { LanguageContext } from '../../../../contexts';
import styles from './Product.styles';
import { Colors } from '../../../../themes/constants';

import { config } from '../../../../config';
import { formatCurrency } from '../../../../utils';
import { BasicScreenProps } from '../../../../@types/commons';

export default function ProductsScreen({ navigation, route }: BasicScreenProps): JSX.Element {
    const products = useFetchProductsQuery({
        tags: route?.params?.tags || [],
        limit: route?.params?.limit || 10,
    });

    return (
        <View style = { styles.productsContainer }>
            <SearchBar navigation = { navigation }/>
            <ProductList products = { products.data || []}/>
        </View>
    );
}

function SearchBar({ navigation }: BasicScreenProps): JSX.Element {
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
                value = { query } placeholder = { LANG.SEARCH_PLACEHOLDER }
                onChangeText = { setQuery }
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

function ProductList({ products }: any): JSX.Element {

    return (
        <FlatList
            data = { products }
            renderItem = {({ item }) => <ProductFull data = { item }/>}
            keyExtractor = {item => item._id}
            bounces = { false }
        />
    );
}

function ProductFull({ data }: any): JSX.Element {
    const windowWidth = Dimensions.get('window').width - (styles.productFullContainer.padding || 0) * 2;
    const imageWidth = windowWidth / 3;
    const [dims, setDims] = useState({
        height: 0, width: 0
    });

    return (
        <View style = { styles.productFullContainer }>
            <FastImage
                style = {{ height: imageWidth * (dims.width ? (dims.height / dims.width) : 0), width: imageWidth }} 
                source = {{
                    uri: `${config.baseAddress}images/${data.imageURL}`,
                    priority: FastImage.priority.normal
                }}
                onLoad = {(e) => setDims(e.nativeEvent)}
                resizeMode = 'contain'
            />
            <View>
                <Text style = {[ styles.productFullDescName, { width: windowWidth - imageWidth } ]} numberOfLines = { 2 }>{ 
                    data.name 
                }</Text>
                <View style = { styles.productFullRating }>
                    {
                        Array(5).fill(0).map((x, index) => {
                            if (parseFloat(data.rating) - index >= 1) {
                                return ( 
                                    <View key = { index } style = { styles.productFullRatingIcon }>
                                        <SvgFullStar fill = { Colors.HIGHLIGHT_PRIMARY }/>
                                    </View>
                                )
                            }
                            else if (parseFloat(data.rating) - index >= 0.5) {
                                return ( 
                                    <View key = { index } style = { styles.productFullRatingIcon }>
                                        <SvgHalfStar fill = { Colors.HIGHLIGHT_PRIMARY } fill2 = { Colors.HIGHLIGHT_SECONDARY }/>
                                    </View>
                                )
                            }
                            return ( 
                                <View key = { index } style = { styles.productFullRatingIcon }>
                                    <SvgFullStar fill = { Colors.HIGHLIGHT_SECONDARY }/>
                                </View>
                            )
                        })
                    }
                    <Text style = { styles.productFullRatingText }>{ data.rating.toPrecision(2) }</Text>
                </View>
                <View style = { styles.productFullPrice }>
                    {
                        data.price.base != data.price.discount ? (
                            <>
                                <Text style = { styles.productFullDiscountText }>{ 
                                    Math.round(100 * (1 - parseInt(data.price.discount) / data.price.base))
                                }%</Text>
                                <Text style = { styles.productFullBasePriceText }>{ formatCurrency(parseInt(data.price.base)) }</Text>
                                <Text style = { styles.productFullPriceText }>{ formatCurrency(parseInt(data.price.base)) }</Text>
                            </>
                        ) : (
                            <Text style = { styles.productFullPriceText }>{ formatCurrency(parseInt(data.price.base)) }</Text>
                        )
                    }
                </View>
            </View>
        </View>
    )
}

// function ProductsSplit({ data }: any): JSX.Element {
//     const windowWidth = Dimensions.get('window').width - (styles.productFullContainer.padding || 0) * 2;
//     const imageWidth = windowWidth / 3;
//     const [dims, setDims] = useState({
//         height: 0, width: 0
//     });

// }

// TODO: Add the other container