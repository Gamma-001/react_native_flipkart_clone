import { StyleSheet } from 'react-native';
import { Colors } from '../../../themes/constants';

const styles = StyleSheet.create({
    // Buttons
    btnSubmitOuter: {
        backgroundColor: Colors.BG_secondary,
        height: 63,
        padding: 10,
        borderTopWidth: 2,
        borderTopColor: 'rgb(150 150 150)'
    },
    btnSubmitInner: {
        height: 40,
        justifyContent: 'center'
    },
    btnSubmitText: {
        color: Colors.FG_primary,
        textAlign: 'center'
    }
});

export default styles;