import { StyleSheet, ViewStyle } from 'react-native'
import { Colors, Sizes } from '../../../../themes/constants';

const buttonStyle: ViewStyle = {
    flex: 0.5,
    backgroundColor: Colors.BG_tertiary,
    height: Sizes.text * 3,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: Colors.SHADOW_PRIMARY
}

const styles = StyleSheet.create({
    itemButton: { ...buttonStyle },
    itemButtonLeft: {
        ...buttonStyle,
        backgroundColor: Colors.BG_BTN_primary,
        borderRightWidth: 1,
        borderRightColor: Colors.SHADOW_PRIMARY
    },
    itemButtonText: {
        textAlign: 'center',
        fontSize: Sizes.text * 0.9
    }
});

export default styles;