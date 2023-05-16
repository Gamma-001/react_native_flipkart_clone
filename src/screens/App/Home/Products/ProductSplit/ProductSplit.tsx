import { useState } from 'react';
import { 
    View, 
    Text, 
    
    Dimensions 
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Favorite from '../Favorite/Favorite';
import { SvgHalfStar, SvgFullStar } from '../../../../../assets/icons/svg';

import styles from './ProductSplit.style';
import productStyles from '../../../../../themes/Commons/Products';
import { Colors } from '../../../../../themes/constants';

import { config } from '../../../../../config';
import { formatCurrency } from '../../../../../utils';

export default function ProductSplit({ data }: any): JSX.Element {
    const windowWidth = Dimensions.get('window').width - (styles.productSplitContainer.padding || 0) * 4;
    const imageWidth = windowWidth / 2;
    const [dims, setDims] = useState({
        height: 0, width: 0
    });

    return (
        <View style = { styles.productSplitContainer }>
            <View style = { styles.favIcon } >
                <Favorite productID = { data._id }/>
            </View>
            <FastImage
                style = {{ height: imageWidth * (dims.width ? (dims.height / dims.width) : 0), width: imageWidth }} 
                source = {{
                    uri: `${config.baseAddress}images/${data.imageURL[0]}`,
                    priority: FastImage.priority.normal
                }}
                onLoad = {(e) => setDims(e.nativeEvent)}
                resizeMode = 'contain'
            />
            <View>
                <Text style = {[ styles.productSplitBrandName, { width: windowWidth - imageWidth } ]} numberOfLines = { 2 }>{
                    data.brand
                }</Text>
                <Text style = {[ productStyles.productDescName, { width: windowWidth - imageWidth } ]} numberOfLines = { 2 }>{ 
                    data.name 
                }</Text>
                <View style = { productStyles.productRating }>
                    {
                        Array(5).fill(0).map((x, index) => {
                            if (parseFloat(data.rating) - index >= 1) {
                                return ( 
                                    <View key = { index } style = { productStyles.productRatingIcon }>
                                        <SvgFullStar fill = { Colors.HIGHLIGHT_PRIMARY }/>
                                    </View>
                                )
                            }
                            else if (parseFloat(data.rating) - index >= 0.5) {
                                return ( 
                                    <View key = { index } style = { productStyles.productRatingIcon }>
                                        <SvgHalfStar fill = { Colors.HIGHLIGHT_PRIMARY } fill2 = { Colors.HIGHLIGHT_SECONDARY }/>
                                    </View>
                                )
                            }
                            return ( 
                                <View key = { index } style = { productStyles.productRatingIcon }>
                                    <SvgFullStar fill = { Colors.HIGHLIGHT_SECONDARY }/>
                                </View>
                            )
                        })
                    }
                    <Text style = { productStyles.productRatingText }>{ data.rating.toPrecision(2) }</Text>
                </View>
                <View style = { productStyles.productPrice }>
                    {
                        data.price.base != data.price.discount ? (
                            <>
                                <Text style = { productStyles.productDiscountText }>{ 
                                    Math.round(100 * (1 - parseInt(data.price.discount) / data.price.base))
                                }%</Text>
                                <Text style = { productStyles.productBasePriceText }>{ formatCurrency(parseInt(data.price.base)) }</Text>
                                <Text style = { productStyles.productPriceText }>{ formatCurrency(parseInt(data.price.discount)) }</Text>
                            </>
                        ) : (
                            <Text style = { productStyles.productPriceText }>{ formatCurrency(parseInt(data.price.base)) }</Text>
                        )
                    }
                </View>
            </View>
        </View>
    )
}