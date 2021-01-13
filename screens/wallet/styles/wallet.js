import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';
import {actuatedNormalize} from '../../../global-styles/fontSize';

export const walletStyles = StyleSheet.create({
    //text
    balance_numbers: {
        fontFamily: 'Barlow-Bold',
        fontSize: 35,
        marginBottom: 30,
        marginTop: 30,
        color: appColors.green
    },
    linked_accounts: {
        color: appColors.primary,
        fontSize: 20,
        fontFamily: 'Barlow-Medium'
    },
    //linked accounts
    linked_account: {
        backgroundColor: appColors.lightGray,
        borderRadius: 10,
    },
    unlinked_account: {
        borderColor: appColors.green,
        borderWidth: 1,
        borderRadius: 10,
    },
    card_number: {
        fontFamily: 'Barlow-Medium',
        fontSize: 17,
        color: appColors.black,
        letterSpacing: 2
    },
    add_account_text: {
        fontFamily: 'Barlow-Light',
        fontSize: 17,
        color: appColors.green
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
        backgroundColor: appColors.green,
    }
})