//react
import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {size} from '../../global-styles/sizing';
import {QRStyles} from './styles/qr-code';
//components
import NavTitle from '../../components/NavTitle';
import { QRCode } from 'react-native-custom-qr-codes';
//icons
import Icon from '../../assets/icons/Icons.js'
//nav
import { useIsFocused } from '@react-navigation/native';

const QrCodeScreen = (props) => {
    const isFocused = useIsFocused();

    return (
	<LinearGradient colors={['white', 'white']} style={globalStyles.centerMax}>
        {isFocused ? <StatusBar barStyle="dark-content" /> : null}
		<NavTitle location={'My Account'} navigation={props.navigation} icon={"arrow-left-icon"} title={props.lang('scan_pay')} color={appColors.primary}/>
        <View style={[globalStyles.w100, globalStyles.plr40, globalStyles.topColumn, {flex: 1, paddingBottom: size(35)}]}>
            <View style={[QRStyles.QRContainer]}>
                <QRCode codeStyle='dot' content='https://ajesamann.com' size={size(250)}/>
            </View>
            <View style={[QRStyles.bottomPortion, globalStyles.spreadColumn, globalStyles.w100, globalStyles.pb15, {flex: 1}]}>
                <View style={globalStyles.mt50}>
                    <Text style={QRStyles.text}>Scan to send money to @ajesamann</Text>
                </View>
                {/* SCAN QR CODE BUTTON */}
                <TouchableOpacity
                    style={[globalStyles.centerColumn, QRStyles.scanBtn]}
                    onPress={() => scan_code()}
                >
                    <Text style={[globalStyles.btnText, globalStyles.plr40, {color: 'white', fontSize: size(15)}]}>{props.lang('scan_code')}</Text>
                </TouchableOpacity>
            </View>
        </View>
	</LinearGradient>
    );
};

export default QrCodeScreen;