import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';
import {size} from '../../../global-styles/sizing';

export const moneyActions = StyleSheet.create({
    moneyInput: {
        fontFamily: 'Barlow-Medium',
        fontSize: size(60),
        color: 'white'
    },
    moneyInputSend: {
        fontFamily: 'Barlow-Medium',
        fontSize: size(50),
        color: 'white'
    },
    sendMoneyTo: {
        backgroundColor: appColors.lightGray,
        width: '100%',
        paddingLeft: 10,
        marginBottom: size(15),
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        fontFamily: 'Barlow-Medium',
        fontSize: size(17)
    },
    sendMoneyTo: {
        backgroundColor: appColors.lightGray,
        width: '100%',
        paddingLeft: 10,
        marginBottom: size(15),
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        fontFamily: 'Barlow-Medium',
        fontSize: size(17)
    },
    moneyAvailable: {
        backgroundColor: 'white',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
    },
    sendMoneyNote: {
        backgroundColor: appColors.lightGray,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        height: size(135),
        maxHeight: size(135),
        borderRadius: 10,
        fontFamily: 'Barlow-Medium',
        fontSize: size(17)
    },
    depositBtn: {
        backgroundColor: 'white',
        width: '100%',
        height: size(50),
        borderRadius: 10
    },
    sendBtn: {
        backgroundColor: appColors.green,
        width: '100%',
        height: size(50),
        borderRadius: 10
    },
    dropDown: {
        borderWidth: 0,
        color: appColors.green
    }
})