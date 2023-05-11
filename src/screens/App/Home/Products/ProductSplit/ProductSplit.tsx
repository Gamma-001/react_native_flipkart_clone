import { useState } from 'react';
import { 
    View, 
    Text, 
    
    Dimensions 
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { SvgHalfStar, SvgFullStar } from '../../../../../assets/icons/svg';

import styles from '../ProductFull/ProductFull.style';
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
                                <Text style = { styles.productFullPriceText }>{ formatCurrency(parseInt(data.price.discount)) }</Text>
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