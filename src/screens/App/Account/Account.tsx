import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Pressable, ScrollView, Alert } from 'react-native';
import { FButtonBGHighlight } from '../../../components/FButton/Fbutton';
import { SvgOrders, SvgWishlist, SvgGift, SvgHeadset } from '../../../assets/icons/svg';
import { useLogoutMutation } from '../../../features/services/api';
import { useUserData } from '../../../hooks/userData';

import { LanguageContext } from '../../../contexts';
import { resetCredentials, resetSession } from '../../../features/credentials/credentialsSlice';
import { resetUserData } from '../../../features/userData/userDataSlice';
import { NAVIGATOR } from '../../../shared/constants';

import styles from './Account.style';
import commonStyles from '../../../themes/Commons/commons';
import { Colors, Sizes } from '../../../themes/constants';

import { RootState, AppDispatch } from '../../../store';
import { BasicScreenProps } from '../../../@types/commons';

export default function AccountScreen({ navigation }: BasicScreenProps):JSX.Element {
    const LANG = useContext(LanguageContext);
    const dispatch = useDispatch<AppDispatch>();

    const credentials = useSelector((state: RootState) => state.credentials);
    const [logout, logoutStatus] = useLogoutMutation();

    // fetch all user data
    useUserData();

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
            navigation?.reset({
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
                                
                                {/* orders */}
                                <FButtonBGHighlight 
                                    style = {[ styles.headerItem, { marginRight: Sizes.padding } ]} 
                                    highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
                                >
                                    <>
                                        <View style = {{ width: Sizes.text * 1.2, height: Sizes.text * 1.2 }}>
                                            <SvgOrders stroke = { Colors.FG_tertiary } />
                                        </View>
                                        <Text style = { styles.headerItemText }>{ LANG.ORDERS }</Text>
                                    </>
                                </FButtonBGHighlight>
                                
                                {/* wishlist */}
                                <FButtonBGHighlight 
                                    style = {[ styles.headerItem, { marginRight: Sizes.padding } ]} 
                                    highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
                                    onPress = { () => { navigation?.navigate(NAVIGATOR.WISHLIST) } }
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

                                {/* coupons */}
                                <FButtonBGHighlight 
                                    style = {[ styles.headerItem, { marginRight: Sizes.padding } ]} 
                                    highlightColor = { Colors.BG_BTN_CLEAR_HIGHLIGHT }
                                >
                                    <>
                                        <View style = {{ width: Sizes.text * 1.2, height: Sizes.text * 1.2 }}>
                                            <SvgGift fill = { Colors.FG_tertiary } />
                                        </View>
                                        <Text style = { styles.headerItemText }>{ LANG.COUPONS }</Text>
                                    </>
                                </FButtonBGHighlight>

                                {/* help center */}
                                <FButtonBGHighlight 
                                    style = {[ styles.headerItem, { marginRight: Sizes.padding } ]} 
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
                                    navigation?.reset({
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