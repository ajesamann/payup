//react
import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {accountStyles} from './styles/account';
//components
import TabTitle from '../../components/TabTitle';
//nav
import { useIsFocused } from '@react-navigation/native';

const AccountScreen = (props) => {
    const isFocused = useIsFocused();

    return (
	<LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
        {isFocused ? <StatusBar barStyle="light-content" /> : null}
        {/* RECENT TRANSACTIONS CARDS */}
		<TabTitle title={props.lang('account')} color={'white'} icon={'settings-icon'}/>
        <View style={[globalStyles.w100, globalStyles.plr20, globalStyles.topColumn, {flex: 1}]}>
            <View style={[globalStyles.toLeft, globalStyles.toTop]}>
                {/* USERS PAYUP TAG */}
                <View style={accountStyles.payup_tag_container}>
                    <Text style={accountStyles.payup_tag}>@ajesamannBRUH</Text>
                </View>
            </View>
            {/* NOTIFICATIONS */}
            <View style={[globalStyles.full_card, globalStyles.ptb30, globalStyles.mtb30, globalStyles.centerColumn, globalStyles.w100, {position: 'relative', flexGrow: 1}]}>
                <View style={[globalStyles.spreadColumn, {flexGrow: 1}]}>
                    <Text style={accountStyles.sent_by}>JohnDoe_12 <Text style={accountStyles.sent_text}>{props.lang('sent_you')}</Text></Text>
                    <View style={[globalStyles.centerColumn, globalStyles.mb30, globalStyles.mt20]}>
                        <Text style={accountStyles.amount_sent}>$14.50</Text>
                        <View style={globalStyles.dividerColumn}></View>
                        <Text style={accountStyles.sent_for}>"For being so damn cool brother."</Text>
                    </View>
                    <View style={[globalStyles.centerRow, globalStyles.w80]}>
                        <TouchableOpacity style={[accountStyles.accept_btn, globalStyles.centerColumn]}><Text style={globalStyles.btnTextWhite}>{props.lang('accept')}</Text></TouchableOpacity>
                        <TouchableOpacity style={[accountStyles.deny_btn, globalStyles.centerColumn]}><Text style={globalStyles.btnTextGray}>{props.lang('deny')}</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={[accountStyles.notif_icon, globalStyles.centerColumn]}>
                    <Text style={accountStyles.notif_icon_text}>3</Text>
                </View>
            </View>
        </View>
	</LinearGradient>
    );
};

export default AccountScreen;