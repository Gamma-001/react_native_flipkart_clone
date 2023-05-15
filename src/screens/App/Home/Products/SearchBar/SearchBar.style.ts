import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../../../themes/constants';

const styles = StyleSheet.create({
    // ---------- containers

    searchContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.BG_tertiary,
        height: Sizes.text * 3 + 2,
        borderBottomWidth: 2,
        borderBottomColor: Colors.SHADOW_PRIMARY
    },

    // ---------- components

    searchIcons: {
        height: Sizes.text * 3,
        width: Sizes.text * 3,
        padding: 10, paddingLeft: 3, paddingRight: 3
    },

    // ---------- text components

    textInput: {
        flex: 1,
        paddingLeft: Sizes.padding / 2, paddingRight: Sizes.padding / 2,
        color: Colors.FG_tertiary,
        fontSize: Sizes.text * 0.9
    },
});

export default styles;