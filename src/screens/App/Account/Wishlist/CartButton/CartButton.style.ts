import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../../../themes/constants';

const styles = StyleSheet.create({
    cartButton: {
        height: Sizes.text * 2,
        borderWidth: 1,
        borderColor: Colors.BORDER_TERTIARY,
        borderRadius: 3,
        justifyContent: 'center'
    },
    cartButtonText: {
        color: Colors.BORDER_TERTIARY,
        textAlign: 'center',
        fontSize: Sizes.text * 0.9,
        fontWeight: 'bold'
    }
});

export default styles;