import { StyleSheet, TextStyle } from 'react-native';
import { Colors, Sizes } from '../../../../../themes/constants';

const productPriceText = {
    fontSize: Sizes.text * 0.95,
    marginRight: Sizes.text * 0.95 / 2,
    fontWeight: 'bold'
} as TextStyle;

const styles = StyleSheet.create({
    // ---------- containers

    productSplitContainer: {
        backgroundColor: Colors.BG_tertiary,
        padding: Sizes.padding,
        borderWidth: 1,
        borderColor: Colors.SHADOW_PRIMARY,
        borderRadius: 5
    },

    // ---------- components

    favIcon: {
        position: 'absolute',
        top: Sizes.text, left: Sizes.text,
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
    }
});

export default styles;