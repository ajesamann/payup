//react
import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {size} from '../../global-styles/sizing';
import {moneyActions} from './styles/moneyActions'
//components
import NavTitle from '../../components/NavTitle';
//icons
import Icon from '../../assets/icons/Icons.js'
//nav
import { useIsFocused } from '@react-navigation/native';

const SendMoneyScreen = (props) => {
    const isFocused = useIsFocused();

    const number = props.route.params == undefined ? '0' : props.route.params.amount;

    const navigate = (location) => {
        props.navigation.navigate(location, { screen: 'Send Money', amount: props.route.params == undefined ? '0' : props.route.params.amount })
    }

    return (
	<LinearGradient colors={[appColors.green, appColors.green]} style={globalStyles.centerMax}>
        {isFocused ? <StatusBar barStyle="light-content" /> : null}
		<NavTitle location={'My Account'} navigation={props.navigation} icon={"arrow-left-icon"} title={props.lang('send')} color={'white'}/>
        <View style={[globalStyles.w100, globalStyles.plr20, globalStyles.pt30, globalStyles.pb40, globalStyles.spreadColumn, globalStyles.card, {flexGrow: 1}]}>
            <TouchableOpacity onPress={() => navigate('Number Pad')}>
                <Text
                    style={[moneyActions.moneyInput, {color: appColors.green}]}
                >${number}</Text>
            </TouchableOpacity>
            <View style={[globalStyles.w100]}>
                <TextInput
                    style={[moneyActions.sendMoneyTo, {color: appColors.gray}]}
                    placeholder="To"
                    placeholderTextColor={appColors.gray}
                />
                <TextInput
                    style={[moneyActions.sendMoneyNote, {color: appColors.gray}]}
                    multiline={true}
                    maxLength={124}
                    placeholder="Add a note"
                    placeholderTextColor={appColors.gray}
                />
            </View>
            <TouchableOpacity style={[moneyActions.sendBtn, globalStyles.centerColumn]}>
                <Text style={[globalStyles.btnTextWhite, {fontSize: size(15), fontFamily: 'Barlow-Bold'}]}>{props.lang('send_money')}</Text>
            </TouchableOpacity>
        </View>
	</LinearGradient>
    );
};

export default SendMoneyScreen;