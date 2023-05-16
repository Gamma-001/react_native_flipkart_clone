import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../../themes/constants';

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.BG_tertiary,
        padding: Sizes.padding,
        marginTop: Sizes.padding
    }
});

export default styles;