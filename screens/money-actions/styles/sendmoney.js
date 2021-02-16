import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';
import {size} from '../../../global-styles/sizing';

export const sendMoney = StyleSheet.create({
    moneyInput: {
        fontFamily: 'Barlow-Medium',
        fontSize: size(60),
        color: 'white'
    },
    depositBtn: {
        backgroundColor: 'white',
        width: '100%',
        height: size(50),
        borderRadius: 10
    },
    dropDown: {
        borderWidth: 0,
        color: appColors.green
    }
})