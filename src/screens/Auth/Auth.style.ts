import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../themes/constants';

const styles = StyleSheet.create({
    // --------- containers

    formContainer: {
        backgroundColor: Colors.BG_secondary,
        flex: 1,
        padding: 20
    },
    inputContainer: {
        flexDirection: 'row',
        height: 40,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: Colors.BG_BTN_secondary,
        zIndex: 1
    },

    // ---------- components

    // form
    formTextTitle: {
        color: Colors.FG_secondary,
        fontWeight: 'bold',
        marginBottom: 10
    },
    formTextDesc: {
        color: Colors.FG_tertiary,
        marginBottom: 10,
        fontSize: Sizes.text * 0.9
    },
    formSwitchType: {
        textAlign: 'right',
        marginTop: 15,
        fontSize: Sizes.text * 0.85
    },
    disclamerText: {
        color: Colors.FG_secondary,
        paddingTop: 20,
        fontSize: Sizes.text * 0.7
    },
    termsOuter: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    // input
    inputLegend: {
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        top: 12, 
        left: 12, 
        zIndex: 2
    },
    inputLegendText: {
        backgroundColor: Colors.BG_secondary,
        padding: 5,
        fontSize: Sizes.text * 0.8
    },
    input: {
        flex: 1,
        color: Colors.FG_secondary,
        paddingLeft: 10, paddingRight: 10,
        fontSize: Sizes.text * 0.9
    },
});

export default styles;