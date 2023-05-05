import { StyleSheet } from 'react-native';

import { Colors, Sizes } from '../constants';

const styles = StyleSheet.create({
    headerOuter: {
        backgroundColor: Colors.BG_tertiary, 
        padding: 20,
        borderBottomColor: Colors.COLOR_BORDER_TERTIARY,
        borderBottomWidth: 2
    },
    headerDescContainer: {
        height: 25,
        flexDirection: 'row',
    },

    headerText: {
        marginBottom: 15,
        color: Colors.FG_secondary,
        fontSize: Sizes.text * 1.15,
        fontWeight: 'bold'
    },
    headerDesc: {
        flex: 1,
        alignSelf: 'center',
        color: Colors.FG_secondary,
        fontSize: Sizes.text * 0.9
    },

    btnLogin: {
        backgroundColor: Colors.BG_BTN_secondary,
        justifyContent: 'center',
        paddingLeft: 25, paddingRight: 25,
        borderRadius: 4
    },
    btnLoginText: {
        color: Colors.FG_primary,
        fontSize: Sizes.text * 0.9,
        fontWeight: 'bold'
    }
});

export default styles;