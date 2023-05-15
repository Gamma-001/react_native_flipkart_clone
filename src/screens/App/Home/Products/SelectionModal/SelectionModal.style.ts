import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../../../../themes/constants';

const styles = StyleSheet.create({
    SelectionModal: {
        flex: 1,
        backgroundColor: Colors.MODAL_BACKDROP,
        justifyContent: 'flex-end'
    },
    SelectionModalOptions: {
        flexDirection: 'row',
        backgroundColor: Colors.BG_tertiary,
        padding: Sizes.padding, 
        paddingTop: Sizes.padding * 1.25, paddingBottom: Sizes.padding * 1.25
    },
    SelectionModalOptText: {
        fontSize: Sizes.text * 0.8,
    },
    SelectionModalTitle: {
        backgroundColor: Colors.BG_tertiary,
        borderBottomColor: Colors.BORDER_TERTIARY,
        borderBottomWidth: 1,
    },
    SelectionModalTitleText: {
        color: Colors.BORDER_TERTIARY,
        fontSize: Sizes.text * 0.9,
        padding: Sizes.padding,
        paddingTop: Sizes.padding * 1.25, paddingBottom: Sizes.padding * 1.25
    }
});

export default styles;