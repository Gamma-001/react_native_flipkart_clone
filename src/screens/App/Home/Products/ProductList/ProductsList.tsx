import { 
    FlatList, 
} from 'react-native';
import ProductFull from '../ProductFull/ProductFull';
import ProductSplit from '../ProductSplit/ProductSplit';

export default function ProductList({ products, isSplit }: any): JSX.Element {
    return (
        <FlatList
            numColumns = { isSplit ? 2 : 1 }
            data = { products }
            renderItem = {({ item }) => isSplit ? <ProductSplit data = { item } /> : <ProductFull data = { item } />}
            keyExtractor = {item => item._id}
            bounces = { false }
        />
    );
}