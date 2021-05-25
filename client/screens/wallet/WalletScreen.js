//react
import React from 'react';
import {View, StatusBar, Text, TouchableOpacity, ScrollView} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {walletStyles} from './styles/wallet';
import {size} from '../../global-styles/sizing'
//components
import TabTitle from '../../components/TabTitle';
//icons
import Icon from '../../assets/icons/Icons.js'
//nav
import { useIsFocused } from '@react-navigation/native';
//redux
import { connect } from 'react-redux';
//Plaid
import { PlaidLink } from 'react-native-plaid-link-sdk';

const WalletScreen = (props) => {
	const [linkToken, setLinkToken] = React.useState(null)

	const isFocused = useIsFocused();

	const navigate = (location) => {
		props.navigation.navigate(location);
	}

	const create_plaid_token = () => {
		fetch('http://localhost:3001/create_link_token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(response => response.json())
		.then(data => {
			setLinkToken(data.link_token)
		})
		.catch((error) => {
			console.error('Error:', error);
		});
	}

	React.useEffect(() => {
		if(linkToken === null) create_plaid_token();
	})

    return (
		<LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
			{isFocused ? <StatusBar barStyle="light-content" /> : null}
			<TabTitle navigation={props.navigation} title={props.lang('wallet')} color={'white'} icon={'qr-icon'}/>
			<View style={[globalStyles.w100, globalStyles.plr20, globalStyles.topColumn, globalStyles.card, {flexGrow: 1}]}>
				{/* BALANCE TEXT */}
				<Text style={[walletStyles.balance_numbers, globalStyles.toLeft]}>${props.balance}</Text>
				<View style={[globalStyles.centerRow, globalStyles.toLeft, globalStyles.w100]}>
					{/* ADD MONEY BUTTON */}
					<TouchableOpacity
						style={[globalStyles.centerColumn, walletStyles.balanceBtn, globalStyles.mr10]}
						onPress={() => navigate('Add Money')}
					>
						<Text style={[globalStyles.btnText, {color: 'white'}]}>{props.lang('add_money')}</Text>
					</TouchableOpacity>
					{/* WITHDRAW BUTTON */}
					<TouchableOpacity
						style={[globalStyles.centerColumn, walletStyles.balanceBtn, globalStyles.ml10]}
						onPress={() => navigate('Withdraw Money')}
					>
						<Text style={[globalStyles.btnText, {color: 'white'}]}>{props.lang('withdraw')}</Text>
					</TouchableOpacity>
				</View>
				<View style={[globalStyles.centerRow, globalStyles.toLeft, globalStyles.mt20, globalStyles.w100]}>
					{/* SEND MONEY BUTTON */}
					<TouchableOpacity
						style={[globalStyles.centerColumn, walletStyles.interactBtn, globalStyles.mr10]}
						onPress={() => navigate('Send Money')}
					>
						<Text style={[globalStyles.btnText, {color: 'white'}]}>{props.lang('send_money')}</Text>
					</TouchableOpacity>
					{/* REQUEST MONEY BUTTON */}
					<TouchableOpacity
						style={[globalStyles.centerColumn, walletStyles.interactBtn, globalStyles.ml10]}
						onPress={() => navigate('Request Money')}
					>
						<Text style={[globalStyles.btnText, {color: 'white'}]}>{props.lang('request_money')}</Text>
					</TouchableOpacity>
				</View>
				{/* LINKED ACCOUNTS */}
				<View style={[globalStyles.w100, globalStyles.mtb30, globalStyles.centerRow]}>
					<Text style={[walletStyles.linked_accounts, globalStyles.w100, globalStyles.toLeft]}>{props.lang('linked_accounts')}</Text>
					<Icon name={'more-icon'} size={size(6)} color={appColors.primary}/>
				</View>
				<ScrollView contentContainerStyle={globalStyles.pb30} style={[globalStyles.toLeft, globalStyles.w100, {flex: 1}]}>
					<View style={[{height: 60}, globalStyles.w100, globalStyles.toLeft, globalStyles.spreadRow, globalStyles.plr20, walletStyles.linked_account]}>
						<Icon name={'bank-icon'} size={size(27)} color={appColors.gray}/>
						<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
					</View>
					<View style={[{height: 60}, globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, walletStyles.linked_account]}>
						<Icon name={'card-icon'} size={size(18)} color={appColors.gray}/>
						<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
					</View>
					<View style={[{height: 60}, globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, walletStyles.linked_account]}>
						<Icon name={'card-icon'} size={size(18)} color={appColors.gray}/>
						<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
					</View>
					<View style={[{height: 60}, globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, walletStyles.linked_account]}>
						<Icon name={'card-icon'} size={size(18)} color={appColors.gray}/>
						<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
					</View>
					<View style={[{height: 60}, globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, walletStyles.linked_account]}>
						<Icon name={'card-icon'} size={size(18)} color={appColors.gray}/>
						<Text style={walletStyles.card_number}>**** **** **** 9999</Text>
					</View>
					<PlaidLink
						tokenConfig={{
							token: linkToken,
						}}
						onSuccess={(success) => {
							console.log(success);
						}}
						onExit={(exit) => {
							console.log(exit);
						}}
					>
						<View style={[{height: 60}, globalStyles.w100, globalStyles.toLeft, globalStyles.mt20, globalStyles.spreadRow, globalStyles.plr20, walletStyles.unlinked_account]}>
							<Icon name={'plus-icon'} size={size(18)} color={appColors.green}/>
							<Text style={walletStyles.add_account_text}>{props.lang('link') + ' ' + props.lang('bank_account')}</Text>
						</View>
					</PlaidLink>
				</ScrollView>
			</View>
		</LinearGradient>
    );
};

const mapStateToProps = (state) => {
	const { alert, balance } = state
	return { alert, balance }
};

export default connect(mapStateToProps)(WalletScreen);