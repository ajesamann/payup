import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';
import {size} from '../../../global-styles/sizing';

export const QRStyles = StyleSheet.create({
    QRContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 25,
        borderWidth: 3
    },
    text: {
        fontSize: size(16),
        fontFamily: 'Barlow-Medium'
    },
    scanBtn: {
        height: size(37.5),
        borderRadius: 10,
        backgroundColor: appColors.green,
    }
})