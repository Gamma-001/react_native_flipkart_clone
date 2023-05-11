import React, { useContext } from 'react';
import { View } from 'react-native';
import HomeNavigator from '../HomeNavigator/HomeNavigator';
import ShopsScreen from '../../screens/App/Shops/Shops';
import NotificationsScreen from '../../screens/App/Notifications/Notifications';
import AccountScreen from '../../screens/App/Account/Account';
import CartScreen from '../../screens/App/Cart/Cart';

import { NAVIGATOR } from '../../shared/constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LanguageContext } from '../../contexts';
import SVGIcons from '../../assets/icons/svg';

const BottomTab = createBottomTabNavigator();

export default function AppNavigator():JSX.Element {
    const LANG = useContext(LanguageContext);

    return (
        <View style = {{ flex: 1 }}>
            <BottomTab.Navigator initialRouteName = 'home' screenOptions = {{
                headerShown: false,
                tabBarStyle: { padding: 5 }
            }}>
                <BottomTab.Screen 
                    name = { NAVIGATOR.HOME } component = { HomeNavigator } 
                    options = {{ 
                        tabBarIcon: (props) => <HomeIcon {...props} />,
                        title: LANG.HOME,
                        tabBarItemStyle: { marginBottom: 5 }
                    }}
                />
                <BottomTab.Screen 
                    name = { NAVIGATOR.SHOPS } component = { ShopsScreen }
                    options = {{ 
                        tabBarIcon: (props) => <ShopsIcon {...props} />,
                        title: LANG.SHOPS,
                        tabBarItemStyle: { marginBottom: 5 }
                    }}
                />
                <BottomTab.Screen
                    name = { NAVIGATOR.NOTIFICATIONS } component = { NotificationsScreen }
                    options = {{
                        tabBarIcon: (props) => <NotificationsIcon {...props} />,
                        title: LANG.NOTIFICATIONS,
                        tabBarItemStyle: { marginBottom: 5 }
                    }}
                />
                <BottomTab.Screen
                    name = { NAVIGATOR.ACCOUNT } component = { AccountScreen }
                    options = {{
                        tabBarIcon: (props) => <AccountIcon {...props} />,
                        title: LANG.ACCOUNT,
                        tabBarItemStyle: { marginBottom: 5 }
                    }}
                />
                <BottomTab.Screen 
                    name = { NAVIGATOR.CART } component = { CartScreen }
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
        <View style = { TabIconStyle(props) }>
            <SVGIcons.SvgHome fill = { props.color } />
        </View>
    )
}

function ShopsIcon(props: IconProps): JSX.Element {
    return (
        <View style = { TabIconStyle(props) }>
            <SVGIcons.SvgShops fill = { props.color }/>
        </View>
    )
}

function NotificationsIcon(props: IconProps): JSX.Element {
    return (
        <View style = { TabIconStyle(props) }>
            <SVGIcons.SvgNotifications fill = { props.color }/>
        </View>
    )
}

function AccountIcon(props: IconProps): JSX.Element {
    return (
        <View style = { TabIconStyle(props) }>
            <SVGIcons.SvgAccount fill = { props.color }/>
        </View>
    )
}

function CartIcon(props: IconProps): JSX.Element {
    return (
        <View style = { TabIconStyle(props) }>
            <SVGIcons.SvgCart fill = { props.color }/>
        </View>
    )
}

function TabIconStyle(props: any) {
    return { height: props.size, width: props.size, padding: 2 }
}