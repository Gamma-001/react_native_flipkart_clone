import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Pressable, ScrollView, Alert } from 'react-native';
import { FButtonBGHighlight } from '../../../components/FButton/Fbutton';
import { SvgOrders, SvgWishlist, SvgGift, SvgHeadset } from '../../../assets/icons/svg';
import { useLogoutMutation, useFetchFavoriteQuery } from '../../../features/services/api';

import { NAVIGATOR } from '../../../shared/constants';
import { LanguageContext } from '../../../contexts';
import { NavigationProp } from '@react-navigation/native';
import { resetCredentials, resetSession } from '../../../features/credentials/credentialsSlice';
import { resetUserData, setInitialized, setFavorites } from '../../../features/userData/userDataSlice';
import { RootState, AppDispatch } from '../../../store';

import styles from './Account.style';
import commonStyles from '../../../themes/commons';
import { Colors, Sizes } from '../../../themes/constants';

type AccountScreenProps = {
    navigation: NavigationProp<any>
}
export default function AccountScreen({ navigation }: AccountScreenProps):JSX.Element {
    const LANG = useContext(LanguageContext);
    const dispatch = useDispatch<AppDispatch>();

    const credentials = useSelector((state: RootState) => state.credentials);

    const userData = useSelector((state: RootState) => state.userData);
    const [logout, logoutStatus] = useLogoutMutation();
    const favorites = useFetchFavoriteQuery({
        phone: credentials.phone,
        token: credentials.sessionID
    }, 
    {
        skip: userData.initialized || !credentials.sessionID 
        // if data has previously been set, skip all fetches
    });

    // load favorites, cart and user data
    useEffect(() => {
        if (favorites.isSuccess) {
            dispatch(setFavorites(favorites.data));
            dispatch(setInitialized());
        }
    }, [favorites.isSuccess]);

    // handle logout
    useEffect(() => {
        if (logoutStatus.isError) Alert.alert(LANG.ERROR.server);

        // logout regardless of success or failure
        if (logoutStatus.isSuccess || logoutStatus.isError) {
            dispatch(resetCredentials());
            dispatch(resetSession());
            logoutStatus.reset();
        }
    }, [logoutStatus]);

    // reset states once the session has been cleared
    useEffect(() => {
        if (credentials.storageStatus == 'fulfilled' || credentials.storageStatus == 'rejected') {
            dispatch(resetUserData());
            navigation.reset({
                index: 0,
                routes: [{ name: NAVIGATOR.AUTH }]
            });
            dispatch(resetCredentials());
        }
    }, [credentials.storageStatus]);

    return (
        <View style = {{ flex: 1, backgroundColor: Colors.BG_secondary }}>
            {
                credentials.sessionID ? (
                    <ScrollView bounces = { false } style = {{ flex: 1 }}>
                        {/* Profile Header */}

                        <View style = { styles.sectionContainer }>
                            <Text style = { styles.sectionUser }>{ credentials.phone }</Text>
                            <View style = { styles.sectionUserUpgrade }>
                                <Text style = { commonStyles.tertiaryText } >{ LANG.JOIN } </Text>
                                <Text style = {[ commonStyles.highlightedText, { fontWeight: 'bold' } ]}>Flipkart Plus</Text> 
                            </View>
                            <View style = { styles.headerItemContainer }>
                                <FButtonBGHighlight 
                                    style = {[ styles.headerItem, { marginRight: 10 } ]} 
                                    highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
                                >
                                    <>
                                        <View style = {{ width: Sizes.text * 1.2, height: Sizes.text * 1.2 }}>
                                            <SvgOrders stroke = { Colors.FG_tertiary } />
                                        </View>
                                        <Text style = { styles.headerItemText }>{ LANG.ORDERS }</Text>
                                    </>
                                </FButtonBGHighlight>
                                <FButtonBGHighlight 
                                    style = {[ styles.headerItem, { marginRight: 10 } ]} 
                                    highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
                                >
                                    <>
                                        <View style = {{ width: Sizes.text * 1.2, height: Sizes.text * 1.2 }}>
                                            <SvgWishlist stroke = { Colors.FG_tertiary } />
                                        </View>
                                        <Text style = { styles.headerItemText }>{ LANG.WISHLIST }</Text>
                                    </>
                                </FButtonBGHighlight>
                            </View>
                            <View style = { styles.headerItemContainer }>
                            <FButtonBGHighlight 
                                    style = {[ styles.headerItem, { marginRight: 10 } ]} 
                                    highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
                                >
                                    <>
                                        <View style = {{ width: Sizes.text * 1.2, height: Sizes.text * 1.2 }}>
                                            <SvgGift fill = { Colors.FG_tertiary } />
                                        </View>
                                        <Text style = { styles.headerItemText }>{ LANG.COUPONS }</Text>
                                    </>
                                </FButtonBGHighlight>
                                <FButtonBGHighlight 
                                    style = {[ styles.headerItem, { marginRight: 10 } ]} 
                                    highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
                                >
                                    <>
                                        <View style = {{ width: Sizes.text * 1.2, height: Sizes.text * 1.2 }}>
                                            <SvgHeadset stroke = { Colors.FG_tertiary } />
                                        </View>
                                        <Text style = { styles.headerItemText }>{ LANG.HELP_CENTER }</Text>
                                    </>
                                </FButtonBGHighlight>
                            </View>
                        </View>

                        {/* Logout */}

                        <View style = { styles.clearSectionContainer }>
                            <FButtonBGHighlight 
                                style = { styles.btnLogout } highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
                                onPress = {() => {
                                    Alert.alert(LANG.LOGOUT, LANG.CONFIRMATION, [
                                        { text: LANG.NO, onPress: () => {} },
                                        { text: LANG.YES, onPress: () => { logout({ sessionID: credentials.sessionID }) } },
                                    ])
                                }}
                            >
                                <Text style = { styles.btnLogoutText }>{ LANG.LOGOUT }</Text>
                            </FButtonBGHighlight>
                        </View>
                    </ScrollView>
                ) : (
                    <View style = { styles.sectionContainer }>
                        <Text style = { styles.sectionLoginText }>{ LANG.ACCOUNT }</Text>
                        <View style = { styles.headerDescContainer }>
                            <Text style = { styles.sectionLoginDesc }>{ LANG.LOGIN.titleAccount }</Text>
                            <Pressable 
                                style = { styles.btnLogin }
                                onPress = {() => {
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: NAVIGATOR.AUTH }]
                                    })
                                }}
                            >
                                <Text style = { styles.btnLoginText }>{ LANG.LOGIN.self }</Text>
                            </Pressable>
                        </View>
                    </View>
                )
            }
        </View>
    );
}