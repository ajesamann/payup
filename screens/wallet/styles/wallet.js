import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';

export const walletStyles = StyleSheet.create({
    //general
    wallet_card: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    //text
    balance_numbers: {
        fontFamily: 'Barlow-Medium',
        fontSize: 35,
        marginBottom: 30,
        marginTop: 30,
        color: appColors.primary
    },
    //buttons
    balanceBtn: {
        height: 40,
        width: 125,
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: appColors.primary,
    },
    interactBtn: {
        height: 40,
        width: 125,
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: appColors.lightGray,
    }
})