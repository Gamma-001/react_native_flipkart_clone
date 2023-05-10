import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../../themes/constants';

const styles = StyleSheet.create({
    // ---------- containers

    homeContainer: {
        flex: 1,
        backgroundColor: Colors.BG_secondary
    },
    headerContainer: {
        backgroundColor: Colors.BG_tertiary,
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: Colors.COLOR_SHADOW,
    },
    searchOuter: {
        flexDirection: 'row',
        marginTop: 15
    },
    brandMall: { paddingRight: 20, justifyContent: 'center' },
    searchContainer: { 
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: Colors.BG_secondary,
        height: Sizes.text * 3 * 0.9,
        padding: 3, paddingLeft: 7, paddingRight: 7,
        borderWidth: 1,
        borderColor: Colors.COLOR_BORDER_TERTIARY,
        borderRadius: Sizes.borderRadius
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: Colors.BG_tertiary,
        marginTop: 10,
        padding: 10,
        borderBottomColor: Colors.COLOR_SHADOW,
        borderBottomWidth: 2,
    },

    // ---------- components

    brandMallText: {
        color: Colors.FG_tertiary,
        fontSize: Sizes.text * 0.7
    },
    searchIcon: {
        flex: 0.1,
        padding: 4,
    },
    searchText: {
        flex: 1,
        alignSelf: 'center',
        paddingLeft: 10,

        color: Colors.FG_tertiary,
        fontSize: Sizes.text * 0.9
    },
    searchVoice: {
        flex: 0.12,
        padding: 6, paddingLeft: 4, paddingRight: 4
    },
    searchCamera: {
        flex: 0.12,
        paddingLeft: 4, paddingRight: 4
    },
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