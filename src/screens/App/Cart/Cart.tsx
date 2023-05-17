import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import CartItem from './CartItem/CartItem';
import CartTotal from './CartTotal/CartTotal';

import { Colors } from '../../../themes/constants';

import { RootState } from '../../../store';

export default function CartScreen():JSX.Element {
    const cart = useSelector((state: RootState) => state.userData.cart);
    const [oldCart, setOldCart] = useState(cart)
    const [price, setPrice] = useState({
        base: 0, 
        discount: 0
    });

    // recalculate the amount when cart is modified
    if (cart != oldCart) {
        setPrice({
            base: 0, discount: 0
        });
        setOldCart(cart);
    }
    
    return (
        <>
        {
            cart.length ? (
                <View style = {{ flex: 1, backgroundColor: Colors.BG_secondary }}>
                    <FlatList
                        ListFooterComponent = { <CartTotal items = { cart.length } price = { price }/> }
                        data = { cart }
                        renderItem = {({ item }) => <CartItem id = { item } setPrice = { setPrice } /> }
                        keyExtractor = { item => item }
                        bounces = { false }
                        showsVerticalScrollIndicator = { false }
                    />
                </View>
            ): (
                <View></View>
            )
        }
        </>
    );
}