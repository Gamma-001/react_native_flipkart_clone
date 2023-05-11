import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../themes/constants';

const styles = StyleSheet.create({
    // --------- containers

    loginHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15
    },

    // ---------- components
    
    // header
    headerBottomBorder: {
        backgroundColor: Colors.BG_secondary,
        height: 15,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10 
    },
    headerImage: {
        alignSelf: 'center',
        left: -Sizes.text * 1.4
    },
    btnClose: {
        justifyContent: 'center',
        flex: 0.1,
    },
    btnCloseText: {
        color: Colors.FG_primary,
        fontSize: Sizes.text * 1.4,
        fontWeight: 'bold'
    },
});

export default styles;