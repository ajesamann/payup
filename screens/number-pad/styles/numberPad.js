import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';
import {size} from '../../../global-styles/sizing';

export const numberPad = StyleSheet.create({
    amount: {
        fontFamily: 'Barlow-Medium',
        color: 'white',
        fontSize: size(50)
    },
    numbers: {
        fontFamily: 'Barlow-Bold',
        color: 'white',
        fontSize: size(30)
    },
    backBtn: {
        backgroundColor: appColors.lightGray,
        height: size(65),
        borderRadius: 20,
        marginRight: size(7.5)
    },
    finishedBtn: {
        backgroundColor: appColors.green,
        height: size(65),
        borderRadius: 20,
        marginLeft: size(7.5)
    }
})