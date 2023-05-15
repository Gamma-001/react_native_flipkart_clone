import { StyleSheet, TextStyle } from 'react-native';
import { Colors, Sizes } from '../../../../../themes/constants';

const productPriceText = {
    fontSize: Sizes.text * 0.95,
    marginRight: Sizes.text * 0.95 / 2,
    fontWeight: 'bold'
} as TextStyle;

const styles = StyleSheet.create({
    // ---------- containers

    productFullContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.BG_tertiary,
        padding: Sizes.padding,
        borderBottomColor: Colors.SHADOW_PRIMARY,
        borderBottomWidth: 2
    },
    productSplitContainer: {
        backgroundColor: Colors.BG_tertiary,
        padding: Sizes.padding,
        borderWidth: 1,
        borderColor: Colors.SHADOW_PRIMARY,
        borderRadius: 5
    },

    // ---------- components

    productFullRating: {
        flexDirection: 'row',
        padding: Sizes.padding / 2,
    },
    productFullRatingIcon: {
        height: Sizes.text * 0.8,
        width: Sizes.text * 0.8,
        marginRight: Sizes.text * 0.2
    },
    productFullPrice: {
        flexDirection: 'row',
        padding: Sizes.padding / 2,
    },
    favIcon: {
        position: 'absolute',
        right: 0, bottom: 0,
        height: Sizes.text * 2,
        width: Sizes.text * 2,
        zIndex: 3
    },

    // ---------- text components

    productSplitBrandName: {
        marginTop: Sizes.padding / 2, marginBottom: Sizes.padding / 2,

        color: Colors.FG_tertiary,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    productFullDescName: {
        padding: Sizes.padding / 2,
        color: Colors.FG_tertiary,
        fontSize: Sizes.text * 0.95
    },
    productFullRatingText: {
        color: Colors.FG_tertiary,
        fontSize: Sizes.text * 0.8,
        fontWeight: 'bold'
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