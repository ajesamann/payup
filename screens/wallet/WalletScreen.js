//react
import React from 'react';
import {View, StatusBar, Text, TouchableOpacity, ScrollView} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {walletStyles} from './styles/wallet';
//components
import TabTitle from '../../components/TabTitle';
//icons
import Icon from '../../assets/icons/Icons.js'
//nav
import { useIsFocused } from '@react-navigation/native';

const WalletScreen = (props) => {
	const isFocused = useIsFocused();

    return (
		<LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
			{isFocused ? <StatusBar barStyle="light-content" /> : null}
			<TabTitle title={props.lang('wallet')} color={'white'} icon={'qr-icon'}/>
			<View style={[globalStyles.w100, globalStyles.plr20, globalStyles.topColumn, globalStyles.card, {flexGrow: 1}]}>
				{/* BALANCE TEXT */}
				<Text style={[walletStyles.balance_numbers, globalStyles.toLeft]}>$34.98</Text>
				<View style={[globalStyles.centerRow, globalStyles.toLeft, globalStyles.w100]}>
					{/* ADD MONEY BUTTON */}
					<TouchableOpacity
						style={[globalStyles.centerColumn, walletStyles.balanceBtn, globalStyles.mr10]}
						onPress={() => add_money()}
					>
						<Text style={[globalStyles.btnText, {color: 'white'}]}>{props.lang('add_money')}</Text>
					</TouchableOpacity>
					{/* WITHDRAW BUTTON */}
					<TouchableOpacity
						style={[globalStyles.centerColumn, walletStyles.balanceBtn, globalStyles.ml10]}
						onPress={() => withdraw()}
					>
						<Text style={[globalStyles.btnText, {color: 'white'}]}>{props.lang('withdraw')}</Text>
					</TouchableOpacity>
				</View>
				<View style={[globalStyles.centerRow, globalStyles.toLeft, globalStyles.mt20, globalStyles.w100]}>
					{/* SEND MONEY BUTTON */}
					<TouchableOpacity
						style={[globalStyles.centerColumn, walletStyles.interactBtn, globalStyles.mr10]}
						onPress={() => add_money()}
					>
						<Text style={[globalStyles.btnText, {color: 'white'}]}>{props.lang('send_money')}</Text>
					</TouchableOpacity>
					{/* REQUEST MONEY BUTTON */}
					<TouchableOpacity
						style={[globalStyles.centerColumn, walletStyles.interactBtn, globalStyles.ml10]}
						onPress={() => withdraw()}
					>
						<Text style={[globalStyles.btnText, {color: 'white'}]}>{props.lang('request_money')}</Text>
					</TouchableOpacity>
				</View>
				{/* LINKED ACCOUNTS */}
				<View style={[globalStyles.w100, globalStyles.mt30, globalStyles.centerRow]}>
					<Text style={[walletStyles.linked_accounts, globalStyles.w100, globalStyles.toLeft]}>{props.lang('linked_accounts')}</Text>
					<Icon name={'more-icon'} size={7} color={appColors.primary}/>
				</View>
				<ScrollView style={[globalStyles.toLeft, globalStyles.w100, {flex: 1}]}>
					<View style={[{height: 60}, globalStyles.w100, globalStyles.toLeft, globalStyles.mt30, globalStyles.spreadRow, globalStyles.plr20, walletStyles.linked_account]}>
						<Icon name={'bank-icon'} size={28} color={appColors.gray}/>
						<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
					</View>
					<View style={[{height: 60}, globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, walletStyles.linked_account]}>
						<Icon name={'card-icon'} size={20} color={appColors.gray}/>
						<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
					</View>
					<View style={[{height: 60}, globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, walletStyles.linked_account]}>
						<Icon name={'card-icon'} size={20} color={appColors.gray}/>
						<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
					</View>
					<View style={[{height: 60}, globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, walletStyles.unlinked_account]}>
						<Icon name={'plus-icon'} size={20} color={appColors.green}/>
						<Text style={walletStyles.add_account_text}>{props.lang('link') + ' ' + props.lang('credit_card')}</Text>
					</View>
				</ScrollView>
			</View>
		</LinearGradient>
    );
};

export default WalletScreen;