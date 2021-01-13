//react
import React from 'react';
import {View, StatusBar, Text, ScrollView} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {activityStyles} from './styles/activity';
//components
import TabTitle from '../../components/TabTitle';
//nav
import { useIsFocused } from '@react-navigation/native';

const TransactionsScreen = (props) => {
	const isFocused = useIsFocused();
	
    return (
	<LinearGradient colors={['white', 'white']} style={globalStyles.centerMax}>
		{isFocused ? <StatusBar barStyle="dark-content" /> : null}
        {/* RECENT TRANSACTIONS CARDS */}
		<TabTitle title={props.lang('activity')} color={appColors.black}/>
		<ScrollView style={globalStyles.w100}>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_add}>+ 143.50</Text>
					<Text style={activityStyles.transaction_card_date}>10/23/20</Text>
					<Text style={activityStyles.transaction_card_from}>@bigmoneyE</Text>
				</View>
			</View>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_remove}>- 39.20</Text>
					<Text style={activityStyles.transaction_card_date}>04/02/20</Text>
					<Text style={activityStyles.transaction_card_from}>Withdraw</Text>
				</View>
			</View>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_remove}>- 198.20</Text>
					<Text style={activityStyles.transaction_card_date}>03/04/20</Text>
					<Text style={activityStyles.transaction_card_from}>Withdraw</Text>
				</View>
			</View>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_add}>+ 1,349.39</Text>
					<Text style={activityStyles.transaction_card_date}>03/04/20</Text>
					<Text style={activityStyles.transaction_card_from}>@uncDrew</Text>
				</View>
			</View>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_add}>+ 500.00</Text>
					<Text style={activityStyles.transaction_card_date}>03/04/20</Text>
					<Text style={activityStyles.transaction_card_from}>Deposit</Text>
				</View>
			</View>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_add}>+ 500.00</Text>
					<Text style={activityStyles.transaction_card_date}>11/21/19</Text>
					<Text style={activityStyles.transaction_card_from}>Deposit</Text>
				</View>
			</View><View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_add}>+ 143.50</Text>
					<Text style={activityStyles.transaction_card_date}>10/23/20</Text>
					<Text style={activityStyles.transaction_card_from}>@bigmoneyE</Text>
				</View>
			</View>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_remove}>- 39.20</Text>
					<Text style={activityStyles.transaction_card_date}>04/02/20</Text>
					<Text style={activityStyles.transaction_card_from}>Withdraw</Text>
				</View>
			</View>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_remove}>- 198.20</Text>
					<Text style={activityStyles.transaction_card_date}>03/04/20</Text>
					<Text style={activityStyles.transaction_card_from}>Withdraw</Text>
				</View>
			</View>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_add}>+ 1,349.39</Text>
					<Text style={activityStyles.transaction_card_date}>03/04/20</Text>
					<Text style={activityStyles.transaction_card_from}>@uncDrew</Text>
				</View>
			</View>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_add}>+ 500.00</Text>
					<Text style={activityStyles.transaction_card_date}>03/04/20</Text>
					<Text style={activityStyles.transaction_card_from}>Deposit</Text>
				</View>
			</View>
			<View style={[activityStyles.transaction_card, globalStyles.w100, globalStyles.centerColumn]}>
				<View style={[globalStyles.w90, globalStyles.spreadRow]}>
					<Text style={activityStyles.transaction_card_number_add}>+ 500.00</Text>
					<Text style={activityStyles.transaction_card_date}>11/21/19</Text>
					<Text style={activityStyles.transaction_card_from}>Deposit</Text>
				</View>
			</View>
		</ScrollView>
	</LinearGradient>
    );
};

export default TransactionsScreen;