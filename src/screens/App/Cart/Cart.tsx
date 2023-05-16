import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import CartItem from './CartItem/CartItem';

import { Colors } from '../../../themes/constants';

import { RootState } from '../../../store';

export default function CartScreen():JSX.Element {
    const cart = useSelector((state: RootState) => state.userData.cart);

    return (
        <View style = {{ flex: 1, backgroundColor: Colors.BG_secondary }}>
            <FlatList
                data = { cart }
                renderItem = {({ item }) => <CartItem id = { item }/> }
                keyExtractor = { item => item }
                bounces = { false }
                showsVerticalScrollIndicator = { false }
            />
        </View>
    );
}