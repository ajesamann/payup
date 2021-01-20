//react
import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
//components
import TabTitle from '../../components/TabTitle';
//nav
import { useIsFocused } from '@react-navigation/native';

const SettingsScreen = (props) => {
    const isFocused = useIsFocused();

    return (
	<LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
        {isFocused ? <StatusBar barStyle="light-content" /> : null}
		<TabTitle title={props.lang('settings')} color={'white'}/>
	</LinearGradient>
    );
};

export default SettingsScreen;