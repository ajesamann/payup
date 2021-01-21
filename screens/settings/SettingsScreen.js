//react
import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {settingsStyles} from './styles/settings';
import {size} from '../../global-styles/sizing';
//components
import NavTitle from '../../components/NavTitle';
//icons
import Icon from '../../assets/icons/Icons.js'
//nav
import { useIsFocused } from '@react-navigation/native';

const SettingsScreen = (props) => {
    const isFocused = useIsFocused();

    return (
	<LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
        {isFocused ? <StatusBar barStyle="light-content" /> : null}
		<NavTitle location={'My Account'} navigation={props.navigation} icon={"arrow-left-icon"} title={props.lang('settings')} color={'white'}/>
        <View style={[globalStyles.w100, globalStyles.plr20, globalStyles.topColumn, {flex: 1, paddingBottom: size(35)}]}>
            {/* SETTINGS BUTTONS */}
            <ScrollView style={globalStyles.w100}>
                <TouchableOpacity style={[globalStyles.spreadRow, settingsStyles.btn, {borderTopWidth: 1, borderTopColor: 'white'}]}>
                    <Text style={[globalStyles.btnTextWhite, {fontSize: size(16)}]}>{props.lang('settings_account')}</Text>
                    <Icon name={'arrow-right-icon'} size={size(14)} color={'white'}/> 
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyles.spreadRow, settingsStyles.btn]}>
                    <Text style={[globalStyles.btnTextWhite, {fontSize: size(16)}]}>{props.lang('settings_notifications')}</Text>
                    <Icon name={'arrow-right-icon'} size={size(14)} color={'white'}/> 
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyles.spreadRow, settingsStyles.btn]}>
                    <Text style={[globalStyles.btnTextWhite, {fontSize: size(16)}]}>{props.lang('settings_security')}</Text>
                    <Icon name={'arrow-right-icon'} size={size(14)} color={'white'}/> 
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyles.spreadRow, settingsStyles.btn]}>
                    <Text style={[globalStyles.btnTextWhite, {fontSize: size(16)}]}>{props.lang('settings_preferences')}</Text>
                    <Icon name={'arrow-right-icon'} size={size(14)} color={'white'}/> 
                </TouchableOpacity>
            </ScrollView>
            {/* LOG OUT BUTTON */}
            <TouchableOpacity style={[globalStyles.toBottom, globalStyles.centerColumn, settingsStyles.logOutBtn, {marginTop: 15}]}>
                <Text style={[globalStyles.btnTextWhite, {fontSize: size(16)}]}>{props.lang('settings_logout')}</Text>
            </TouchableOpacity>
        </View>
	</LinearGradient>
    );
};

export default SettingsScreen;