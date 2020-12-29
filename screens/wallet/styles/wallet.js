import { StyleSheet } from "react-native"
import {appColors} from '../../../global-styles/colors';

export const walletStyles = StyleSheet.create({
    //general
    wallet_card: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    //text
    current_balance_text: {
        fontFamily: 'Barlow-Light',
        marginBottom: 10,
        fontSize: 15,
        color: 'white'
    },
    welcome_text: {
        fontFamily: 'Barlow-light',
        marginBottom: 30,
        fontSize: 22,
        color: appColors.appPurple
    },
    balance_numbers: {
        fontFamily: 'Barlow-Bold',
        fontSize: 40,
        color: 'white'
    },
    //buttons
    btn: {
        height: 50,
        flexGrow: 1,
        borderRadius: 5,
        backgroundColor: '#f0f0f0'
    }
})