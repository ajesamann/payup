import { StyleSheet } from "react-native"
import {appColors} from '../../../global-styles/colors';

export const dashboardStyles = StyleSheet.create({
    //payup tag
    payup_tag_container: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 25,
        paddingTop: 6,
        paddingBottom: 10,
        paddingRight: 25
    },
    payup_tag: {
        color: appColors.black,
        fontFamily: 'Barlow-Medium',
        fontSize: 20,
    }
})