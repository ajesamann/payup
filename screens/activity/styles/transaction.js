import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';
import {size} from '../../../global-styles/sizing';

export const transactionStyles = StyleSheet.create({
    infoCon: {
        borderBottomWidth: 1,
        borderBottomColor: appColors.black,
        width: '100%',
        paddingTop: 25,
        paddingBottom: 25,
    },
    infoText: {
        color: appColors.black,
        fontFamily: 'Barlow-Medium',
        fontSize: size(14)
    },
    supportBtnText: {
        color: appColors.green,
        fontFamily: 'Barlow-Bold',
        fontSize: size(14)
    }
})