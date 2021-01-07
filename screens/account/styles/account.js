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
})