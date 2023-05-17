import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import ItemFooter from '../ItemFooter/ItemFooter';
import { useFetchProductQuery } from '../../../../features/services/api';
import { SvgFullStar, SvgHalfStar } from '../../../../assets/icons/svg';

import { config } from '../../../../config';
import { formatCurrency } from '../../../../utils';

import styles from './CartItem.style';
import productStyles from '../../../../themes/Commons/Products';
import { Colors } from '../../../../themes/constants';

import { RootState } from '../../../../store';

interface CartItemProps {
    id: string,
    setPrice: (arg: any) => void
};
export default function CartItem({ id, setPrice }: CartItemProps): JSX.Element {
    const windowWidth = Dimensions.get('window').width - (styles.productContainer.padding || 0) * 4;
    const imageWidth = windowWidth / 3;
    const [dims, setDims] = useState({
        height: 0, width: 0
    });
    
    const cart = useSelector((state: RootState) => state.userData.cart);
    const [data, setData] = useState<any>(undefined);
    const product = useFetchProductQuery({ id });

    useEffect(() => {
        if  (product.isSuccess || product.data) {
            setData(product.data),
            setPrice((x: any) => ({
                ...x, 
                base: x.base + product.data.price.base,
                discount: x.discount + product.data.price.base - product.data.price.discount
            }));
        }
    }, [product.isSuccess, cart]);

    return (
        <>
        {
            data && (
            <>
                <View style = { styles.productContainer }>
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
                <ItemFooter productID = { id }/>
            </>
            )
        }
        </>
    );
}