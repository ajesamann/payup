import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';

export const activityStyles = StyleSheet.create({
    //transaction cards
    transaction_card: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: appColors.lightGray,
    },
    transaction_card_number_add: {
        color: appColors.green,
        fontFamily: 'Barlow-Medium',
        fontSize: 18
    },
    transaction_card_number_remove: {
        color: appColors.error,
        fontFamily: 'Barlow-Medium',
        fontSize: 18
    },
    transaction_card_from: {
        color: appColors.black,
        fontFamily: 'Barlow-Medium',
        fontSize: 15
    },
    transaction_card_date: {
        color: appColors.gray,
        fontFamily: 'Barlow-Medium',
        fontSize: 15
    },
})