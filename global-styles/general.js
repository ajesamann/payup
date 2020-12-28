import { StyleSheet } from "react-native"
import {appColors} from './colors';

export const globalStyles = StyleSheet.create({
    //alignment
    centerMax: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spreadColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    spreadRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    //text
    wtext:{
        fontFamily: 'Barlow-Medium',
        color: 'white'
    },
    //margin
    mt20: {
        marginTop: 20
    },
    mt25: {
        marginTop: 25
    },
    ml10: {
        marginLeft: 10
    },
    ml0: {
        marginLeft: 0
    },
    //widths
    w100: {
        width: '100%'
    },
    w75: {
        width: '75%'
    },
    //heights
    h100: {
        height: "100%"
    },
    //drop shadows
    box_shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: .34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    //links
    linkText: {
        color: "white",
        fontFamily: 'Barlow-Medium'
    },
    linkTextBold: {
        color: "white",
        fontWeight: 'bold',
        fontFamily: 'Barlow-Medium'
    },
    // background-colors
    primary_bg: {
        backgroundColor: appColors.primary
    },
    //inputs
    stack_input: {
        backgroundColor: 'white',
        color: appColors.appPurple,
        height: 40,
        paddingLeft: 15,
        borderRadius: 5,
        marginTop: 15,
        fontFamily: 'Barlow-Medium'
    },
    //buttons
    stack_btn: {
        backgroundColor: 'white',
        height: 40,
        borderRadius: 5,
        marginTop: 20,
    }
})
  