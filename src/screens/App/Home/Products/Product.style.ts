import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../../themes/constants';

const filterTextSize = Sizes.text * 0.8;

const styles = StyleSheet.create({
    // ---------- containers

    productsContainer: {
        flex: 1,
        backgroundColor: Colors.BG_secondary
    },
    productsFilterContainer: {
        padding: Sizes.padding * 0.8,
        backgroundColor: Colors.BG_tertiary,
    },

    // ---------- components

    productsFilter: {
        flexDirection: 'row',
        backgroundColor: Colors.BG_tertiary,
        marginRight: Sizes.padding / 2,
        borderWidth: 1,
        borderColor: Colors.BORDER_TERTIARY,
        borderRadius: Sizes.text + Sizes.padding * 0.8 * 2, // the padding should be identical to enclosing text
    },
    productsFilterIcon: {
        height: filterTextSize,
        width: filterTextSize,
        alignSelf: 'center',
        marginRight: Sizes.text * 0.9
    },

    // ---------- text components

    productsFilterText: {
        flex: 1,
        padding: Sizes.padding * 0.8,
        fontSize: filterTextSize,
    },
});

export default styles;