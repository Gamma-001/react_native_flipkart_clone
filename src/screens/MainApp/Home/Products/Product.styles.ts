import { StyleSheet, TextStyle } from 'react-native';
import { Colors, Sizes } from '../../../../themes/constants';

const productPriceText = {
    fontSize: Sizes.text * 0.95,
    marginRight: Sizes.text * 0.95 / 2,
    fontWeight: 'bold'
} as TextStyle;

const styles = StyleSheet.create({
    productsContainer: {
        flex: 1,
        backgroundColor: Colors.BG_secondary
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.BG_tertiary,
        height: Sizes.text * 3 + 2,
        borderBottomWidth: 2,
        borderBottomColor: Colors.COLOR_SHADOW
    },
    productFullContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.BG_tertiary,
        padding: 10,
        borderBottomColor: Colors.COLOR_SHADOW,
        borderBottomWidth: 2
    },
    productSplitContainer: {
        backgroundColor: Colors.BG_tertiary,
        padding: 10
    },

    searchIcons: {
        height: Sizes.text * 3,
        width: Sizes.text * 3,
        padding: 10, paddingLeft: 3, paddingRight: 3
    },
    textInput: {
        flex: 1,
        paddingLeft: 5, paddingRight: 5,
        color: Colors.FG_tertiary,
        fontSize: Sizes.text * 0.9
    },
    productFullDescName: {
        padding: 5,
        color: Colors.FG_tertiary,
        fontSize: Sizes.text * 0.95
    },
    productFullRating: {
        flexDirection: 'row',
        padding: 5
    },
    productFullRatingIcon: {
        height: Sizes.text * 0.8,
        width: Sizes.text * 0.8,
        marginRight: Sizes.text * 0.2
    },
    productFullRatingText: {
        color: Colors.FG_tertiary,
        fontSize: Sizes.text * 0.8,
        fontWeight: 'bold'
    },
    productFullPrice: {
        flexDirection: 'row',
        padding: 5
    },
    productFullPriceText: {
        ...productPriceText,
        color: Colors.FG_tertiary
    },
    productFullBasePriceText: {
        ...productPriceText,
        color: Colors.HIGHLIGHT_SECONDARY,
        textDecorationLine: 'line-through',
    },
    productFullDiscountText: {
        ...productPriceText,
        color: Colors.HIGHLIGHT_PRIMARY
    }
});

export default styles;