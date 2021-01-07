//react
import React from 'react';
import {View, TextInput, Text, ScrollView} from 'react-native';
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
            <View style={[globalStyles.mt40, globalStyles.plr20]}>
                <View style={[globalStyles.full_card, globalStyles.h60]}></View>
            </View>
        </View>
	</LinearGradient>
    );
};

export default AccountScreen;