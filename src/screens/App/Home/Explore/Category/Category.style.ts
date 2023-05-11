import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../../../themes/constants';

const styles = StyleSheet.create({

    // ---------- components
    
    category: {
        padding: 5,
    },
    categoryImage: {
        borderRadius: Sizes.borderRadius * 2,
        overflow: 'hidden'
    },
    categoryTextOuter: {
        alignSelf: 'center',
        padding: 5,
    },
    categoryText: {
        fontSize: Sizes.text * 0.8,
        fontWeight: 'bold',
    }
});

export default styles;