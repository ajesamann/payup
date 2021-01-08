//react
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {accountStyles} from './styles/account';
//components
import TabTitle from '../../components/TabTitle';

const AccountScreen = (props) => {
    return (
	<LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
        {/* RECENT TRANSACTIONS CARDS */}
		<TabTitle title={props.lang('account')} color={'white'} icon={'settings-icon'}/>
        <View style={[globalStyles.h85, globalStyles.w100]}>
            <View style={[globalStyles.mt40, globalStyles.toLeft, globalStyles.plr20]}>
                {/* USERS PAYUP TAG */}
                <View style={accountStyles.payup_tag_container}>
                    <Text style={accountStyles.payup_tag}>@username</Text>
                </View>
            </View>
            {/* NOTIFICATIONS */}
            <View style={[globalStyles.mt40, globalStyles.plr20]}>
                <View style={[globalStyles.full_card, globalStyles.h60, globalStyles.w100, globalStyles.centerColumn, {position: 'relative'}]}>
                    <View style={[accountStyles.notifications_container, globalStyles.w100, globalStyles.centerColumn]}>
                        <Text style={accountStyles.sent_by}>JohnDoe_12 <Text style={accountStyles.sent_text}>{props.lang('sent_you')}</Text></Text>
                        <Text style={[accountStyles.amount_sent, globalStyles.mb30, globalStyles.mt20]}>$25</Text>
                        <View style={[globalStyles.centerRow, globalStyles.w80]}>
                            <TouchableOpacity style={[accountStyles.accept_btn, globalStyles.centerColumn]}><Text style={globalStyles.btnTextWhite}>{props.lang('accept')}</Text></TouchableOpacity>
                            <TouchableOpacity style={[accountStyles.deny_btn, globalStyles.centerColumn]}><Text style={globalStyles.btnTextWhite}>{props.lang('deny')}</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={[accountStyles.notif_icon, globalStyles.centerColumn]}>
                        <Text style={accountStyles.notif_icon_text}>3</Text>
                    </View>
                </View>
            </View>
        </View>
	</LinearGradient>
    );
};

export default AccountScreen;