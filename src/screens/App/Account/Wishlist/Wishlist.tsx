import { useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import WLProduct from './WLProduct/WLProduct';

import styles from './Wishlist.style';

import { RootState } from '../../../../store';
import { BasicScreenProps } from '../../../../@types/commons';

export default function WishlistScreen({ navigation }: Required<BasicScreenProps>): JSX.Element {
    const favorites = useSelector((state: RootState) => state.userData.favorites);

    return (
        <View style = { styles.wishlistContainer }>
            <FlatList 
                numColumns = { 2 }
                data = { favorites }
                renderItem = {({ item }) => <WLProduct id = { item } navigation = { navigation }/> }
                keyExtractor = { item => item }
                bounces = { false }
                showsVerticalScrollIndicator = { false }
            />
        </View>
    );
}