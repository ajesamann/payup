//react
import React from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {walletStyles} from './styles/wallet';
//components
import TabTitle from '../../components/TabTitle';
//icons
import Icon from '../../assets/icons/Icons.js'

const WalletScreen = (props) => {
    return (
		<LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
			<TabTitle title={props.lang('wallet')} color={'white'}/>
			<View style={[globalStyles.w100, globalStyles.h85, globalStyles.toTop, globalStyles.pl20, globalStyles.pr20, globalStyles.card]}>
				<View style={globalStyles.centerColumn}>
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
							<Text style={[globalStyles.btnText, {color: appColors.darkGray}]}>{props.lang('send_money')}</Text>
						</TouchableOpacity>
						{/* REQUEST MONEY BUTTON */}
						<TouchableOpacity
							style={[globalStyles.centerColumn, walletStyles.interactBtn, globalStyles.ml10]}
							onPress={() => withdraw()}
						>
							<Text style={[globalStyles.btnText, {color: appColors.darkGray}]}>{props.lang('request_money')}</Text>
						</TouchableOpacity>
					</View>
					{/* LINKED ACCOUNTS */}
					<View style={[globalStyles.centerColumn, globalStyles.toLeft, globalStyles.mt30, globalStyles.w100]}>
						<View style={[globalStyles.w100, globalStyles.centerRow]}>
							<Text style={[walletStyles.linked_accounts, globalStyles.w100, globalStyles.toLeft]}>{props.lang('linked_accounts')}</Text>
							<Icon name={'more-icon'} size={7} color={appColors.primary}/>
						</View>
						<View style={[globalStyles.w100, globalStyles.toLeft, globalStyles.mt30, globalStyles.spreadRow, globalStyles.plr20, globalStyles.ptb18, walletStyles.linked_account]}>
							<Icon name={'bank-icon'} size={30} color={appColors.gray}/>
							<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
						</View>
						<View style={[globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, globalStyles.ptb18, walletStyles.linked_account]}>
							<Icon name={'card-icon'} size={20} color={appColors.gray}/>
							<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
						</View>
						<View style={[globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, globalStyles.ptb18, walletStyles.linked_account]}>
							<Icon name={'card-icon'} size={20} color={appColors.gray}/>
							<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
						</View>
						<View style={[globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, globalStyles.ptb18, walletStyles.unlinked_account]}>
							<Icon name={'plus-icon'} size={20} color={appColors.primary}/>
							<Text style={walletStyles.add_account_text}>{props.lang('link') + ' ' + props.lang('credit_card')}</Text>
						</View>
					</View>
				</View>
			</View>
		</LinearGradient>
    );
};

export default WalletScreen;