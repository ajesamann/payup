import { StyleSheet } from "react-native";
import {appColors} from '../../../global-styles/colors';
import {size} from '../../../global-styles/sizing';

export const settingsStyles = StyleSheet.create({
    btn: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: '100%',
        paddingTop: 25,
        paddingBottom: 25,
    },
    logOutBtn: {
        backgroundColor: appColors.error,
        borderRadius: 10,
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
    }
})