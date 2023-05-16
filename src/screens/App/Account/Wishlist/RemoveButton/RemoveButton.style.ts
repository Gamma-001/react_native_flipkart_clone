import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../../../themes/constants';

const styles = StyleSheet.create({
    removeButton: {
        backgroundColor: Colors.BG_BTN_primary,
        height: Sizes.text * 2,
        marginTop: Sizes.padding * 0.5,
        borderRadius: 3,
        justifyContent: 'center'
    },
    removeButtonText: {
        color: Colors.FG_primary,
        textAlign: 'center',
        fontSize: Sizes.text * 0.9,
        fontWeight: 'bold'
    }
});

export default styles;