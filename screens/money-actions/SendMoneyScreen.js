//react
import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {size} from '../../global-styles/sizing';
import {sendMoney} from './styles/sendmoney'
//components
import NavTitle from '../../components/NavTitle';
//icons
import Icon from '../../assets/icons/Icons.js'
//nav
import { useIsFocused } from '@react-navigation/native';

const SendMoneyScreen = (props) => {
    const isFocused = useIsFocused();

    const logOutUser = () => {
        //log out the user and send them back to the login page
        props.navigation.navigate('Login');
    }

    return (
	<LinearGradient colors={[appColors.green, appColors.green]} style={globalStyles.centerMax}>
        {isFocused ? <StatusBar barStyle="light-content" /> : null}
		<NavTitle location={'My Account'} navigation={props.navigation} icon={"arrow-left-icon"} title={props.lang('add_money')} color={'white'}/>
        <View style={[globalStyles.w100, globalStyles.plr20, globalStyles.topColumn, {flex: 1, paddingBottom: size(35)}]}>
            <View style={[globalStyles.w100, globalStyles.spreadColumn, globalStyles.h90]}>
                <View style={[globalStyles.w100, globalStyles.centerColumn, globalStyles.h80]}>
                    <TextInput
                        style={[sendMoney.moneyInput, {color: 'white'}]}
                        onChangeText={text => onChangeText(text)}
                        placeholder="$0.00"
                        placeholderTextColor="white"
                    />
                </View>
                <View style={[globalStyles.w100]}>
                    <DropDownPicker
                        items={[
                            {label: 'USA', value: 'usa'},
                            {label: 'UK', value: 'uk'},
                            {label: 'France', value: 'france'},
                            {label: 'UK', value: 'uk'},
                            {label: 'France', value: 'france'},
                        ]}
                        containerStyle={{height: size(40), marginBottom: size(20)}}
                        style={[sendMoney.dropDown]}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        placeholder="Select an account"
                        placeholderStyle={{color: appColors.green}}
                        arrowColor={appColors.green}
                        dropDownMaxHeight={size(100)}
                        globalTextStyle={{color: appColors.black}}
                    />
                    <TouchableOpacity style={[sendMoney.depositBtn, globalStyles.centerColumn]}>
                        <Text style={[globalStyles.btnTextGreen, {fontSize: size(15), fontFamily: 'Barlow-Bold'}]}>Deposit money</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
	</LinearGradient>
    );
};

export default SendMoneyScreen;