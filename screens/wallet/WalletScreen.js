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
			<View style={[globalStyles.w100, globalStyles.h85, globalStyles.toTop, globalStyles.pl20, globalStyles.pr20, walletStyles.wallet_card]}>
				{/* BALANCE TEXT */}
				<Text style={walletStyles.balance_numbers}>$34.98</Text>
				<View style={globalStyles.centerColumn}>
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
				</View>
			</View>
		</LinearGradient>
    );
};

export default WalletScreen;