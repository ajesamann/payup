import { StyleSheet } from "react-native"
import {appColors} from '../../../global-styles/colors';
import {size} from '../../../global-styles/sizing';

export const accountStyles = StyleSheet.create({
    //payup tag
    payup_tag_container: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 23,
        paddingTop: 11,
        paddingBottom: 15,
        paddingRight: 23
    },
    payup_tag: {
        color: appColors.black,
        fontFamily: 'Barlow-Medium',
        fontSize: size(18),
    },
    //notifications
    amount_sent: {
        fontFamily: 'Barlow-Bold',
        fontSize: size(43),
        color: appColors.green
    },
    sent_by: {
        fontFamily: 'Barlow-Bold',
        fontSize: size(15),
        color: appColors.black
    },
    sent_text: {
        fontFamily: 'Barlow-Medium',
        fontSize: size(15),
        color: appColors.black
    },
    sent_for: {
        fontFamily: 'Barlow-Light',
        fontSize: size(15),
        color: appColors.darkGray
    },
    accept_btn: {
        height: size(37),
        width: size(125),
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: appColors.green,
        marginRight: size(10)
    },
    deny_btn: {
        height: size(37),
        width: size(125),
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: appColors.lightGray,
        marginLeft: size(10)
    },
    notif_icon: {
        position: 'absolute',
        right: -12,
        top: -12,
        width: size(40),
        height: size(40),
        backgroundColor: appColors.error,
        borderRadius: 100
    },
    notif_icon_text: {
        color: 'white',
        fontFamily: 'Barlow-Medium',
        fontSize: size(16)
    }
})