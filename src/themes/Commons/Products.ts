import { StyleSheet, TextStyle } from 'react-native';
import { Colors, Sizes } from '../constants';

const productPriceText = {
    fontSize: Sizes.text * 0.95,
    marginRight: Sizes.text * 0.95 / 2,
    fontWeight: 'bold'
} as TextStyle;

const productStyles = StyleSheet.create({
    // ---------- components

    productRating: {
        flexDirection: 'row',
        padding: Sizes.padding / 2,
    },
    productRatingIcon: {
        height: Sizes.text * 0.8,
        width: Sizes.text * 0.8,
        marginRight: Sizes.text * 0.2
    },
    productPrice: {
        flexDirection: 'row',
        padding: Sizes.padding / 2,
    },

    // ---------- text components

    productDescName: {
        padding: Sizes.padding / 2,
        color: Colors.FG_tertiary,
        fontSize: Sizes.text * 0.95
    },
    productRatingText: {
        color: Colors.FG_tertiary,
        fontSize: Sizes.text * 0.8,
        fontWeight: 'bold'
    },
    productPriceText: {
        ...productPriceText,
        color: Colors.FG_tertiary
    },
    productBasePriceText: {
        ...productPriceText,
        color: Colors.HIGHLIGHT_SECONDARY,
        textDecorationLine: 'line-through',
    },
    productDiscountText: {
        ...productPriceText,
        color: Colors.HIGHLIGHT_PRIMARY
    }
});

export default productStyles;