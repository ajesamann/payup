import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';
import {size} from '../../../global-styles/sizing';

export const activityStyles = StyleSheet.create({
    //transaction cards
    transaction_card: {
        height: size(60),
        borderBottomWidth: 1,
        borderBottomColor: appColors.lightGray,
    },
    transaction_card_number_add: {
        color: appColors.green,
        fontFamily: 'Barlow-Medium',
        fontSize: size(16)
    },
    transaction_card_number_remove: {
        color: appColors.error,
        fontFamily: 'Barlow-Medium',
        fontSize: size(16)
    },
    transaction_card_from: {
        color: appColors.black,
        fontFamily: 'Barlow-Medium',
        fontSize: size(13)
    },
    transaction_card_date: {
        color: appColors.gray,
        fontFamily: 'Barlow-Medium',
        fontSize: size(13)
    },
})