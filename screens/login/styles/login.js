import { StyleSheet } from "react-native"
import {appColors} from '../../../global-styles/colors';

export const loginStyles = StyleSheet.create({
    //logo
    login_logo: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    img_con: {
      width: '30%',
      height: '35%' 
    },
    //login stuff
    login_input: {
        backgroundColor: 'white',
        height: 40,
        paddingLeft: 15,
        borderRadius: 5,
        marginTop: 15,
        fontFamily: 'Barlow-Medium'
    },
    login_btn: {
        backgroundColor: 'white',
        height: 40,
        borderRadius: 5,
        marginTop: 15
    }
})