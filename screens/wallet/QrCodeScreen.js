//react
import React from 'react';
import {View, Text, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {size} from '../../global-styles/sizing';
import {accountStyles} from '../account/styles/account';
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
	<LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
        {isFocused ? <StatusBar barStyle="light-content" /> : null}
		<NavTitle location={'My Account'} navigation={props.navigation} icon={"arrow-left-icon"} title={props.lang('my_code')} color={'white'}/>
        <View style={[globalStyles.w100, globalStyles.plr20, globalStyles.topColumn, {flex: 1, paddingBottom: size(35)}]}>
            <QRCode codeStyle='square'/>
        </View>
	</LinearGradient>
    );
};

export default QrCodeScreen;