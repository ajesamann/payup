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
//redux
import { connect } from 'react-redux';

const AddMoneyScreen = (props) => {
    const isFocused = useIsFocused();

    // grab the number from params, or 0
    const number = props.route.params == undefined ? '0' : props.route.params.amount;

    const navigate = (location) => {
        props.navigation.navigate(location, { screen: 'Add Money', amount: props.route.params == undefined ? '0' : props.route.params.amount })
    }

    // deposit money into the users balance
    const deposit_money = () => {
        if(number == '0') return props.showAlert(appColors.error, props.lang('add_money_error'));

        props.dispatch({
            type: 'ADD_TO_BALANCE',
            payload: number
        });

        props.showAlert(appColors.green, props.lang('deposit_success'))

        props.navigation.navigate('Wallet')
    }

    return (
	<LinearGradient colors={[appColors.green, appColors.green]} style={globalStyles.centerMax}>
        {isFocused ? <StatusBar barStyle="light-content" /> : null}
		<NavTitle location={'My Account'} navigation={props.navigation} icon={"arrow-left-icon"} title={props.lang('add_money')} color={'white'}/>
        <View style={[globalStyles.w100, globalStyles.plr20, globalStyles.topColumn, {flex: 1, paddingBottom: size(35)}]}>
            <View style={[globalStyles.w100, globalStyles.spreadColumn, globalStyles.h90]}>
                <View style={[globalStyles.w100, globalStyles.centerColumn, globalStyles.h80]}>
                    <TouchableOpacity onPress={() => navigate('Number Pad')}>
                        <Text
                            style={[moneyActions.moneyInput, {color: 'white'}]}
                        >${number}</Text>
                    </TouchableOpacity>
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
                        style={[moneyActions.dropDown]}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        placeholder="Select an account"
                        placeholderStyle={{color: appColors.green}}
                        arrowColor={appColors.green}
                        dropDownMaxHeight={size(100)}
                        globalTextStyle={{color: appColors.black}}
                    />
                    <TouchableOpacity style={[moneyActions.depositBtn, globalStyles.centerColumn]} onPress={() => deposit_money()}>
                        <Text style={[globalStyles.btnTextGreen, {fontSize: size(15), fontFamily: 'Barlow-Bold'}]}>{props.lang('deposit_money')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
	</LinearGradient>
    );
};

const mapStateToProps = (state) => {
	const { alert, balance } = state
	return { alert, balance }
};

export default connect(mapStateToProps)(AddMoneyScreen);