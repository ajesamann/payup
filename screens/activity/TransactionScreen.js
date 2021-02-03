//react
import React from 'react';
import {View, StatusBar, Text, ScrollView, TouchableOpacity} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {transactionStyles} from './styles/transaction';
//components
import NavTitle from '../../components/NavTitle';
//nav
import { useIsFocused } from '@react-navigation/native';

const TransactionScreen = (props) => {
	const isFocused = useIsFocused();
	
    return (
	<LinearGradient colors={['white', 'white']} style={globalStyles.centerMax}>
		{isFocused ? <StatusBar barStyle="dark-content" /> : null}
        {/* RECENT TRANSACTIONS CARDS */}
		<NavTitle location={'My Account'} navigation={props.navigation} icon={"arrow-left-icon"} title={'#A-14323'} color={'black'}/>
		<View style={[globalStyles.w100, globalStyles.plr20, globalStyles.card, globalStyles.pb100, {flexGrow: 1}]}>
            <View>
                <View style={[transactionStyles.infoCon, globalStyles.spreadRow]}>
                    <Text style={[transactionStyles.infoText]}>{props.lang('transaction_amount')}</Text>
                    <Text style={[transactionStyles.infoText]}>$100</Text>
                </View>
                <View style={[transactionStyles.infoCon, globalStyles.spreadRow]}>
                    <Text style={[transactionStyles.infoText]}>{props.lang('transaction_from')}</Text>
                    <Text style={[transactionStyles.infoText]}>@Jason233</Text>
                </View>
                <View style={[transactionStyles.infoCon, globalStyles.spreadRow]}>
                    <Text style={[transactionStyles.infoText]}>{props.lang('transaction_date')}</Text>
                    <Text style={[transactionStyles.infoText]}>10/17/19</Text>
                </View>
                <View style={[transactionStyles.infoCon, globalStyles.spreadRow]}>
                    <Text style={[transactionStyles.infoText]}>"For Being A Cool Ass KILLA MY G"</Text>
                </View>
                <View style={[transactionStyles.infoCon, globalStyles.spreadRow]}>
                    <Text style={[transactionStyles.infoText, {color: appColors.gray}]}>Pending</Text>
                </View>
            </View>
            <TouchableOpacity style={[globalStyles.mt60, transactionStyles.supportBtnCon, globalStyles.w100, globalStyles.centerColumn]}>
                <Text style={[transactionStyles.supportBtnText]}>{props.lang('create_support_ticket')}</Text>
            </TouchableOpacity>
        </View>
	</LinearGradient>
    );
};

export default TransactionScreen;