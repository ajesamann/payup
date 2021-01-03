//react
import React from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {walletStyles} from './styles/wallet';

const WalletScreen = (props) => {
    return (
		<LinearGradient colors={[appColors.appBlue, appColors.appPurple]} style={globalStyles.centerMax}>
			<View style={[{height: '100%', width: '100%'}, globalStyles.centerColumn]}>
				<View style={[{height: '40%', width: '90%'}, globalStyles.centerColumn]}>
					{/* BALANCE TEXT */}
					<Text style={walletStyles.current_balance_text}>{props.lang('current_balance')}</Text>
					<Text style={walletStyles.balance_numbers}>$12,034.98</Text>
					<View style={globalStyles.centerRow}>
						<View>
								{/* ADD MONEY BUTTON */}
								<TouchableOpacity
									style={[globalStyles.centerColumn, walletStyles.balanceBtn, globalStyles.mr10]}
									onPress={() => add_money()}
								>
									<Text style={{color: 'white'}}>{props.lang('add_money')}</Text>
								</TouchableOpacity>
						</View>
						<View>
								{/* WITHDRAW BUTTON */}
								<TouchableOpacity
									style={[globalStyles.centerColumn, walletStyles.balanceBtn, globalStyles.ml10]}
									onPress={() => withdraw()}
								>
									<Text style={{color: 'white'}}>{props.lang('withdraw')}</Text>
								</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={[{height: '60%', width: '90%'}, globalStyles.centerColumn, walletStyles.wallet_card, globalStyles.box_shadow]}>
					<View style={[globalStyles.w100, globalStyles.centerColumn]}>
						<Text style={[globalStyles.toTop, walletStyles.transaction_text]}>Recent Transactions</Text>
						{/* RECENT TRANSACTIONS CARDS */}
						<View style={[globalStyles.w90, globalStyles.toTop]}>
							<View style={[walletStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
								<View style={[globalStyles.w90, globalStyles.spreadRow]}>
									<Text style={walletStyles.transaction_card_number_add}>+ 143.50</Text>
									<Text style={walletStyles.transaction_card_from}>@bigmoneyE</Text>
								</View>
							</View>
							<View style={[walletStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
								<View style={[globalStyles.w90, globalStyles.spreadRow]}>
									<Text style={walletStyles.transaction_card_number_remove}>- 39.20</Text>
									<Text style={walletStyles.transaction_card_from}>Withdraw</Text>
								</View>
							</View>
							<View style={[walletStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
								<View style={[globalStyles.w90, globalStyles.spreadRow]}>
									<Text style={walletStyles.transaction_card_number_remove}>- 198.20</Text>
									<Text style={walletStyles.transaction_card_from}>Withdraw</Text>
								</View>
							</View>
							<View style={[walletStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
								<View style={[globalStyles.w90, globalStyles.spreadRow]}>
									<Text style={walletStyles.transaction_card_number_add}>+ 1,349.39</Text>
									<Text style={walletStyles.transaction_card_from}>@uncDrew</Text>
								</View>
							</View>
							<View style={[walletStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
								<View style={[globalStyles.w90, globalStyles.spreadRow]}>
									<Text style={walletStyles.transaction_card_number_add}>+ 500.00</Text>
									<Text style={walletStyles.transaction_card_from}>Deposit</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={[globalStyles.toBottom, globalStyles.w90]}>
						<View style={[globalStyles.spreadRow, globalStyles.w100]}>
							{/* SEND MONEY BUTTON */}
							<TouchableOpacity
								style={[globalStyles.centerRow, globalStyles.mr10, walletStyles.btn]}
								onPress={() => send_money()}
							>
								<Text style={[globalStyles.btnText, {color: appColors.appPurple}]}>{props.lang('send_money')}</Text>
							</TouchableOpacity>
							{/* REQUEST MONEY BUTTON */}
							<TouchableOpacity
								style={[globalStyles.centerRow, globalStyles.ml10, walletStyles.btn]}
								onPress={() => request_money()}
							>
								<Text style={[globalStyles.btnText, {color: appColors.appPurple}]}>{props.lang('request_money')}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</LinearGradient>
    );
};

export default WalletScreen;