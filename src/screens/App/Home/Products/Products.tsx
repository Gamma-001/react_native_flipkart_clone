import { useState, useContext, useEffect } from 'react';
import { 
    View, 
    Pressable, 
    Text, 
    ScrollView,
} from 'react-native';
import SearchBar from './SearchBar/SearchBar';
import ProductList from './ProductList/ProductsList';
import SelectionModal from './SelectionModal/SelectionModal';
import { SvgExpandDown } from '../../../../assets/icons/svg';
import { useFetchProductsQuery } from '../../../../features/services/api';

import { LanguageContext } from '../../../../contexts';
import styles from './Product.style';
import { Colors } from '../../../../themes/constants';

import { BasicScreenProps } from '../../../../@types/commons';

const splitTags = [
    'fashion', 'kitchen', 'skincare', 'furnitures'
];
const sortTypes = [
    { key: 0, value: 'Price -- Low to High', },
    { key: 1, value: 'Price -- High to Low', },
    { key: 2, value: 'Rating -- Low to High' },
    { key: 3, value: 'Rating -- High to Low' }
];
const sortMapping = [['price', 'asc'], ['price', 'desc'], ['rating', 'asc'], ['rating', 'desc']];

export default function ProductsScreen({ navigation, route }: BasicScreenProps): JSX.Element {
    const [sortKey, setSortKey] = useState(-1);
    const LANG = useContext(LanguageContext);
    const products = useFetchProductsQuery({
        tags: route?.params?.tags || [],
        limit: route?.params?.limit || 10,
        sort: (sortKey >= 0 && sortKey < sortMapping.length) ? [sortMapping[sortKey][0]] : undefined,
        sortOrder: (sortKey >= 0 && sortKey < sortMapping.length) ? [sortMapping[sortKey][1]] : undefined
    });
    const [showModals, setShowModals] = useState({
        sort: false
    });

    useEffect(() => {
        products.refetch();
    }, [sortKey]);

    let split = false;
    for (let x of (route?.params?.tags || [])) {
        if (splitTags.indexOf(x) != -1) {
            split = true;
            break;
        }
    }

    return (
        <View style = { styles.productsContainer }>
            <SearchBar navigation = { navigation }/>
            <View style = { styles.productsFilterContainer }>
            <ScrollView horizontal = { true }>
                {/* sort */}
                <Pressable style = { styles.productsFilter } onPress = {() => {
                    setShowModals({ ...showModals, sort: true });
                }}>
                    <Text style = { styles.productsFilterText }>{ LANG.SORT_BY }</Text>
                    <View style = { styles.productsFilterIcon }>
                        <SvgExpandDown fill = { Colors.FG_tertiary }/>
                    </View>
                </Pressable>
            </ScrollView>
            </View>
            <ProductList products = { products.data || []} isSplit = { split }/>
            {
                showModals.sort ? (
                    <SelectionModal 
                        title = { LANG.SORT_BY.toUpperCase() }
                        items = { sortTypes } setValue = {(x) => { setSortKey(parseInt(x)); }}
                        close = { () => { setShowModals({...showModals, sort: false}) } }
                        defaultKey = { sortKey }
                    />
                ) : (
                    <></>
                )
            }
        </View>
    );
}