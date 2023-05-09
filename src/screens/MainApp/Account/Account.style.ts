import { StyleSheet } from 'react-native';

import { Colors, Sizes } from '../../../themes/constants'

const styles = StyleSheet.create({
    
    // ---------- containers

    sectionContainer: {
        backgroundColor: Colors.BG_tertiary, 
        padding: 20,
        borderBottomColor: Colors.COLOR_SHADOW,
        borderBottomWidth: 2,
        marginBottom: 10
    },
    clearSectionContainer: {
        padding: 20,
        marginBottom: 10
    },
    headerDescContainer: {
        height: 25,
        flexDirection: 'row',
    },
    headerItemContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },

    // ---------- components

    sectionLoginText: {
        marginBottom: 15,
        color: Colors.FG_secondary,
        fontSize: Sizes.text * 1.15,
        fontWeight: 'bold'
    },
    sectionLoginDesc: {
        flex: 1,
        alignSelf: 'center',
        color: Colors.FG_secondary,
        fontSize: Sizes.text * 0.9
    },
    sectionUser: {
        color: Colors.FG_tertiary,
        fontWeight: 'bold',
        fontSize: Sizes.text,
        marginBottom: 10
    },
    sectionUserUpgrade: {
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.COLOR_SHADOW,
    },
    headerItem: {
        flex: 0.5,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.COLOR_BORDER_TERTIARY,
        borderRadius: 5
    },
    headerItemText: {
        color: Colors.FG_tertiary,
        marginLeft: 10,
        fontSize: Sizes.text * 0.9,
        fontWeight: 'bold'
    },

    // ---------- buttons

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
    },
    btnLogout: {
        backgroundColor: Colors.BG_tertiary,
        padding: 7,
        borderWidth: 1,
        borderColor: Colors.COLOR_BORDER_TERTIARY,
        alignItems: 'center'
    },
    btnLogoutText: {
        color: Colors.BG_BTN_secondary,
        fontSize: Sizes.text * 0.9,
        fontWeight: 'bold'
    }
});

export default styles;