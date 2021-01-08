import { StyleSheet } from "react-native"
import {appColors} from '../../../global-styles/colors';

export const accountStyles = StyleSheet.create({
    //payup tag
    payup_tag_container: {
        backgroundColor: 'white',
        borderRadius: 100,
        paddingLeft: 20,
        paddingTop: 6,
        paddingBottom: 11,
        paddingRight: 20
    },
    payup_tag: {
        color: appColors.black,
        fontFamily: 'Barlow-Medium',
        fontSize: 23,
    },
    //notifications
    amount_sent: {
        fontFamily: 'Barlow-Medium',
        fontSize: 50,
        color: appColors.primary
    },
    sent_by: {
        fontFamily: 'Barlow-Bold',
        fontSize: 17,
        color: appColors.black
    },
    sent_text: {
        fontFamily: 'Barlow-Medium',
        fontSize: 17,
        color: appColors.black
    },
    accept_btn: {
        height: 40,
        width: 125,
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: appColors.primary,
        marginRight: 12
    },
    deny_btn: {
        height: 40,
        width: 125,
        flexGrow: 1,
        borderRadius: 10,
        backgroundColor: appColors.error,
        marginLeft: 12
    },
    notif_icon: {
        position: 'absolute',
        right: -12,
        top: -12,
        width: 42.5,
        height: 42.5,
        backgroundColor: appColors.error,
        borderRadius: 100
    },
    notif_icon_text: {
        color: 'white',
        fontFamily: 'Barlow-Medium',
        fontSize: 18
    }
})