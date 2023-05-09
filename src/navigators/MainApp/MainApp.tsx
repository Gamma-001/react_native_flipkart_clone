import { useContext } from 'react';
import { View } from 'react-native';
import HomeScreen from '../../screens/MainApp/Home/Home';
import ShopsScreen from '../../screens/MainApp/Shops/Shops';
import NotificationsScreen from '../../screens/MainApp/Notifications/Notifications';
import AccountScreen from '../../screens/MainApp/Account/Account';
import CartScreen from '../../screens/MainApp/Cart/Cart';

import { LanguageContext } from '../../contexts';

import SVGIcons from '../../assets/icons/svg';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

export default function MainAppScreen():JSX.Element {
    const LANG = useContext(LanguageContext);

    return (
        <View style = {{ flex: 1 }}>
            <BottomTab.Navigator screenOptions = {{
                headerShown: false,
                tabBarStyle: { padding: 5 }
            }}>
                <BottomTab.Screen 
                    name = 'home' component = { HomeScreen } 
                    options = {{ 
                        tabBarIcon: (props) => <HomeIcon {...props} />,
                        title: LANG.HOME,
                        tabBarItemStyle: { marginBottom: 5 }
                    }}
                />
                <BottomTab.Screen 
                    name = 'shops' component = { ShopsScreen }
                    options = {{ 
                        tabBarIcon: (props) => <ShopsIcon {...props} />,
                        title: LANG.SHOPS,
                        tabBarItemStyle: { marginBottom: 5 }
                    }}
                />
                <BottomTab.Screen
                    name = 'notifications' component = { NotificationsScreen }
                    options = {{
                        tabBarIcon: (props) => <NotificationsIcon {...props} />,
                        title: LANG.NOTIFICATIONS,
                        tabBarItemStyle: { marginBottom: 5 }
                    }}
                />
                <BottomTab.Screen
                    name = 'account' component = { AccountScreen }
                    options = {{
                        tabBarIcon: (props) => <AccountIcon {...props} />,
                        title: LANG.ACCOUNT,
                        tabBarItemStyle: { marginBottom: 5 }
                    }}
                />
                <BottomTab.Screen 
                    name = 'cart' component = { CartScreen }
                    options = {{
                        tabBarIcon: (props) => <CartIcon {...props} />,
                        title: LANG.CART,
                        tabBarItemStyle: { marginBottom: 5 }
                    }}
                />
            </BottomTab.Navigator>
        </View>
    );
}

// tab icons

type IconProps = {
    color: string,
    focused: boolean,
    size: number
}
function HomeIcon(props: IconProps): JSX.Element {
    return (
        <View style = {{ height: props.size, width: props.size }}>
            <SVGIcons.SvgHome fill = { props.color } />
        </View>
    )
}

function ShopsIcon(props: IconProps): JSX.Element {
    return (
        <View style = {{ height: props.size, width: props.size }}>
            <SVGIcons.SvgShops fill = { props.color }/>
        </View>
    )
}

function NotificationsIcon(props: IconProps): JSX.Element {
    return (
        <View style = {{ height: props.size, width: props.size }}>
            <SVGIcons.SvgNotifications fill = { props.color }/>
        </View>
    )
}

function AccountIcon(props: IconProps): JSX.Element {
    return (
        <View style = {{ height: props.size, width: props.size }}>
            <SVGIcons.SvgAccount fill = { props.color }/>
        </View>
    )
}

function CartIcon(props: IconProps): JSX.Element {
    return (
        <View style = {{ height: props.size, width: props.size }}>
            <SVGIcons.SvgCart fill = { props.color }/>
        </View>
    )
}