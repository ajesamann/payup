//react
import React from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {dashboardStyles} from './styles/dashboard';
//components
import TabTitle from '../../components/TabTitle';

const DashboardScreen = (props) => {
    return (
	<LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
        {/* RECENT TRANSACTIONS CARDS */}
		<TabTitle title={props.lang('dashboard')} color={'white'} icon={'settings-icon'}/>
        {/* USERS PAYUP TAG */}
        <View style={[globalStyles.toLeft, globalStyles.h85, globalStyles.toTop, globalStyles.pl20]}>
            <View style={dashboardStyles.payup_tag_container}>
                <Text style={dashboardStyles.payup_tag}>@ajesamann</Text>
            </View>
        </View>
	</LinearGradient>
    );
};

export default DashboardScreen;