import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../../themes/constants';

const styles = StyleSheet.create({
    billContainer: {
        backgroundColor: Colors.BG_tertiary,
        padding: Sizes.padding, paddingBottom: 0,
        marginTop: Sizes.padding
    },

    billItem: {
        flexDirection: 'row',
        marginBottom: Sizes.padding,
        justifyContent: 'space-between'
    },
    totalAmount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Sizes.padding, paddingBottom: Sizes.padding,
        borderTopWidth: 1, borderBottomWidth: 1,
        borderColor: Colors.BORDER_TERTIARY
    },

    priceDetailsText: {
        marginTop: Sizes.padding, marginBottom: Sizes.padding * 2,
        fontWeight: 'bold'
    },
    billItemText: {
        fontSize: Sizes.text * 0.9
    },
    savingsText: {
        paddingTop: Sizes.padding * 1.5, paddingBottom: Sizes.padding * 1.5,
        fontSize: Sizes.text * 0.9,
        fontWeight: 'bold'
    },
    totalAmountText: {
        fontWeight: 'bold'
    },
    highlightedText: {
        color: Colors.HIGHLIGHT_PRIMARY
    }
});

export default styles;