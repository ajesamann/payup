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
				<View style={[{height: '40%'}, globalStyles.centerColumn]}>
					{/* BALANCE TEXT */}
					<Text style={walletStyles.current_balance_text}>Current Balance:</Text>
					<Text style={walletStyles.balance_numbers}>$12,034.98</Text>
				</View>
				<View style={[{height: '60%', width: '90%'}, globalStyles.centerColumn, walletStyles.wallet_card, globalStyles.box_shadow]}>
					<Text style={[walletStyles.welcome_text, globalStyles.toTop]}>Welcome Back, AJ</Text>
					<View style={[globalStyles.toBottom, globalStyles.w90]}>
						<View style={[globalStyles.spreadRow, globalStyles.w100]}>
							{/* SEND MONEY BUTTON */}
							<TouchableOpacity
								style={[globalStyles.centerRow, globalStyles.mr10, walletStyles.btn]}
								onPress={() => send_money()}
							>
								<Text style={[globalStyles.btnText, {color: '#828282'}]}>{props.lang('send_money')}</Text>
							</TouchableOpacity>
							{/* REQUEST MONEY BUTTON */}
							<TouchableOpacity
								style={[globalStyles.centerRow, globalStyles.ml10, walletStyles.btn]}
								onPress={() => request_money()}
							>
								<Text style={[globalStyles.btnText, {color: '#828282'}]}>{props.lang('request_money')}</Text>
							</TouchableOpacity>
						</View>
						<View style={globalStyles.w100}>
							{/* CASH OUT BUTTON */}
							<TouchableOpacity
								style={[globalStyles.centerColumn, walletStyles.btn, globalStyles.mt20]}
								onPress={() => cash_out()}
							>
								<Text style={[globalStyles.btnText, {color: '#828282'}]}>{props.lang('transfer')}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</LinearGradient>
    );
};

export default WalletScreen;