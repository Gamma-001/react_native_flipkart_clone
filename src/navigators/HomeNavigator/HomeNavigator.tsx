import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from '../../screens/App/Home/Explore/Explore';
import ProductsScreen from '../../screens/App/Home/Products/Products';

import { NAVIGATOR } from '../../shared/constants';

const Stack = createStackNavigator();

export default function HomeNavigator(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName = 'explore' screenOptions = {{
            headerShown: false,
        }}>
            <Stack.Screen name = { NAVIGATOR.EXPLORE } component = { ExploreScreen }/>
            <Stack.Screen name = { NAVIGATOR.PRODUCTS } component = { ProductsScreen }/>
        </Stack.Navigator>
    );
}