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
    toBottom: {
        marginTop: 'auto',
        paddingBottom: 20
    },
    toTop: {
        marginBottom: 'auto',
        paddingTop: 20
    },
    //text
    wtext:{
        fontFamily: 'Barlow-Medium',
        color: 'white'
    },
    btnText: {
        color: appColors.appPurple,
        textAlign: 'center',
        fontFamily: 'Barlow-Light'
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
    mb5: {
        marginBottom: 5
    },

    mt10: {
        marginTop: 10
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
    //drop shadows
    box_shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: .25,
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
        height: 50,
        paddingLeft: 15,
        borderRadius: 5,
        marginTop: 20,
        fontFamily: 'Barlow-Medium'
    },
    //buttons
    stack_btn: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
    },
    //dividers
    dividerColumn: {
        width: '100%',
        borderBottomColor: 'white',
        marginTop: 10,
        marginBottom: 40,
        borderBottomWidth: 1,
    }
})
  