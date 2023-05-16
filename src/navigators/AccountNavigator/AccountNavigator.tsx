import { Dimensions } from 'react-native';
import AccountScreen from '../../screens/App/Account/Account';
import WishlistScreen from '../../screens/App/Account/Wishlist/Wishlist';

import { NAVIGATOR } from '../../shared/constants';
import { createStackNavigator } from '@react-navigation/stack';

import { Colors, Sizes } from '../../themes/constants';

const Stack = createStackNavigator();

export default function AccountNavigator(): JSX.Element {
    const headerHeight = Math.min(Dimensions.get('window').height / 30, 50) + Sizes.padding * 2;

    return (
        <Stack.Navigator 
            initialRouteName = { NAVIGATOR.ACCOUNT_MAIN }
            screenOptions = {{
                headerStyle: {
                    height: headerHeight,
                    backgroundColor: Colors.BG_primary,
                },
                headerTitle: '',
                headerBackTitle: ' ',
                headerTintColor: Colors.FG_primary,
            }}
        >
            <Stack.Screen name = { NAVIGATOR.ACCOUNT_MAIN } component = { AccountScreen } options = {{ headerShown: false }}/>
            <Stack.Screen name = { NAVIGATOR.WISHLIST } component = { WishlistScreen }/>
        </Stack.Navigator>
    );
}