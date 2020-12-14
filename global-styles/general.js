import { StyleSheet } from "react-native"
import {appColors} from './colors';

export const globalStyles = StyleSheet.create({
    centerMiddleContainerMax: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerMiddleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    primary_bg: {
        backgroundColor: appColors.primary
    },
})
  