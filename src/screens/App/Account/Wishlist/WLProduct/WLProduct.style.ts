import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../../../themes/constants';

const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: Colors.BG_tertiary,
        padding: Sizes.padding,
        borderWidth: 1,
        borderColor: Colors.SHADOW_PRIMARY,
        borderRadius: 5
    }
});

export default styles;