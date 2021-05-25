import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';
import {size} from '../../../global-styles/sizing';

export const walletStyles = StyleSheet.create({
    //text
    balance_numbers: {
        fontFamily: 'Barlow-Medium',
        fontSize: size(34),
        marginBottom: size(25),
        marginTop: size(25),
        color: appColors.green
    },
    linked_accounts: {
        color: appColors.primary,
        fontSize: size(17),
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
        fontSize: size(14),
        color: appColors.black,
        letterSpacing: 2
    },
    add_account_text: {
        fontFamily: 'Barlow-Light',
        fontSize: size(15),
        color: appColors.green
    },
    //buttons
    balanceBtn: {
        height: size(37.5),
        width: size(125),
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: appColors.primary,
    },
    interactBtn: {
        height: size(37.5),
        width: size(125),
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: appColors.green,
    }
})