import { StyleSheet } from 'react-native';
import { Colors } from './constants';

const commonStyles = StyleSheet.create({
    primaryText: { color: Colors.FG_primary },
    secondaryText: { color: Colors.FG_secondary },
    tertiaryText: { color: Colors.FG_tertiary },
    highlightedText: { color: Colors.BG_BTN_secondary },

    boldText: { fontWeight: 'bold' },
});

export default commonStyles;