//react
import React from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {transactionStyles} from './styles/transactions';
//components
import TabTitle from '../../components/TabTitle';

const TransactionsScreen = (props) => {
    return (
	<LinearGradient colors={['white', 'white']} style={globalStyles.centerMax}>
        {/* RECENT TRANSACTIONS CARDS */}
		<TabTitle title={props.lang('transactions')} color={appColors.black}/>
		<View style={[globalStyles.w100, globalStyles.h85, globalStyles.toTop]}>
			<View style={[transactionStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={transactionStyles.transaction_card_number_add}>+ 143.50</Text>
					<Text style={transactionStyles.transaction_card_date}>10/23/20</Text>
					<Text style={transactionStyles.transaction_card_from}>@bigmoneyE</Text>
				</View>
			</View>
			<View style={[transactionStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={transactionStyles.transaction_card_number_remove}>- 39.20</Text>
					<Text style={transactionStyles.transaction_card_date}>04/02/20</Text>
					<Text style={transactionStyles.transaction_card_from}>Withdraw</Text>
				</View>
			</View>
			<View style={[transactionStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={transactionStyles.transaction_card_number_remove}>- 198.20</Text>
					<Text style={transactionStyles.transaction_card_date}>03/04/20</Text>
					<Text style={transactionStyles.transaction_card_from}>Withdraw</Text>
				</View>
			</View>
			<View style={[transactionStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={transactionStyles.transaction_card_number_add}>+ 1,349.39</Text>
					<Text style={transactionStyles.transaction_card_date}>03/04/20</Text>
					<Text style={transactionStyles.transaction_card_from}>@uncDrew</Text>
				</View>
			</View>
			<View style={[transactionStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={transactionStyles.transaction_card_number_add}>+ 500.00</Text>
					<Text style={transactionStyles.transaction_card_date}>03/04/20</Text>
					<Text style={transactionStyles.transaction_card_from}>Deposit</Text>
				</View>
			</View>
			<View style={[transactionStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={transactionStyles.transaction_card_number_add}>+ 500.00</Text>
					<Text style={transactionStyles.transaction_card_date}>11/21/19</Text>
					<Text style={transactionStyles.transaction_card_from}>Deposit</Text>
				</View>
			</View>
		</View>
	</LinearGradient>
    );
};

export default TransactionsScreen;