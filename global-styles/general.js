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
    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    leftRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    toBottom: {
        marginTop: 'auto',
    },
    toTop: {
        marginBottom: 'auto'
    },
    toRight: {
        marginLeft: 'auto',
    },
    toLeft: {
        marginRight: 'auto',
    },
    //text
    wtext:{
        fontFamily: 'Barlow-Medium',
        color: 'white'
    },
    btnText: {
        color: appColors.primary,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Barlow-Medium'
    },
    payup_tag: {
        color: 'white',
        fontFamily: 'Barlow-Bold',
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
    ml15: {
        marginLeft: 15
    },
    ml0: {
        marginLeft: 0
    },
    ml5: {
        marginLeft: 5
    },
    ml10: {
        marginLeft: 10
    },
    mr5: {
        marginRight: 5
    },
    mr10: {
        marginRight: 10
    },
    mr15: {
        marginRight: 15
    },
    mb5: {
        marginBottom: 5
    },
    mb30: {
        marginBottom: 30
    },
    mt5: {
        marginTop: 5
    },
    mt10: {
        marginTop: 10
    },
    mt40: {
        marginTop: 40
    },
    mt30: {
        marginTop: 30
    },
    mt22: {
        marginTop: 22
    },
    //card
    card: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    //padding
    py15: {
        paddingTop: 15,
        paddingBottom: 15
    },
    pl20: {
        paddingLeft: 20
    },
    pr20: {
        paddingRight: 20
    },
    plr20: {
        paddingRight: 20,
        paddingLeft: 20
    },
    ptb20: {
        paddingTop: 20,
        paddingBottom: 20
    },
    ptb10: {
        paddingTop: 10,
        paddingBottom: 10
    },
    ptb15: {
        paddingTop: 15,
        paddingBottom: 15
    },
    ptb17: {
        paddingTop: 17,
        paddingBottom: 17
    },
    ptb18: {
        paddingTop: 18,
        paddingBottom: 18
    },
    //widths
    w100: {
        width: '100%'
    },
    w90: {
        width: '90%'
    },
    w85: {
        width: '85%'
    },
    w80: {
        width: '80%'
    },
    w75: {
        width: '75%'
    },
    //heights
    h100: {
        height: "100%"
    },
    h25: {
        height: "25%"
    },
    h20: {
        height: "20%"
    },
    h15: {
        height: "15%"
    },
    h5: {
        height: "5%"
    },
    h30: {
        height: "30%"
    },
    h50: {
        height: "50%"
    },
    h60: {
        height: "60%"
    },
    h70: {
        height: "70%"
    },
    h75: {
        height: "75%"
    },
    h85: {
        height: "85%"
    },
    h80: {
        height: "80%"
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
        color: appColors.primary,
        height: 50,
        paddingLeft: 15,
        borderRadius: 5,
        marginTop: 20,
        fontFamily: 'Barlow-Medium'
    },
    //icons
    btn_icon: {
        marginLeft: 7
    },
    //buttons
    stack_btn: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
    },
    delete_x: {
        fontSize: 20,
        fontFamily: 'Barlow-Medium',
        color: appColors.black
    },
    //dividers
    dividerColumn: {
        width: '100%',
        borderBottomColor: 'white',
        marginTop: 10,
        marginBottom: 40,
        borderBottomWidth: 1,
    },
    //card
    card: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: '100%',
    },
    full_card: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '100%',
    }
})
  