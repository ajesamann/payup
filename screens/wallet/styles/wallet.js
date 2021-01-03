import { StyleSheet } from "react-native"
import {appColors} from '../../../global-styles/colors';

export const walletStyles = StyleSheet.create({
    //general
    wallet_card: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    //transaction cards
    transaction_card: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: appColors.appPurple,
    },
    transaction_card_number_add: {
        color: appColors.appPurple,
        fontFamily: 'Barlow-Medium',
        fontSize: 18
    },
    transaction_card_number_remove: {
        color: '#a8a8a8',
        fontFamily: 'Barlow-Medium',
        fontSize: 18
    },
    transaction_card_from: {
        color: '#a8a8a8',
        fontFamily: 'Barlow-Light',
        fontSize: 15
    },
    //text
    current_balance_text: {
        fontFamily: 'Barlow-Light',
        fontSize: 17,
        color: 'white'
    },
    transaction_text: {
        fontFamily: 'Barlow-Light',
        fontSize: 17,
        color: appColors.appPurple
    },
    balance_numbers: {
        fontFamily: 'Barlow-Bold',
        fontSize: 35,
        marginBottom: 30,
        marginTop: 20,
        color: 'white'
    },
    //buttons
    btn: {
        height: 40,
        flexGrow: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: appColors.appPurple
    },
    balanceBtn: {
        height: 40,
        width: 125,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
    }
})