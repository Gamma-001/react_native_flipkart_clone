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

    // ---------- components

    favIcon: {
        position: 'absolute',
        right: 0, bottom: 0,
        height: Sizes.text * 2,
        width: Sizes.text * 2,
        zIndex: 3
    },
});

export default styles;