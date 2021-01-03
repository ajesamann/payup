//react
import React from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';

const TransactionsScreen = (props) => {
    return (
		<LinearGradient colors={[appColors.appBlue, appColors.appPurple]} style={globalStyles.centerMax}>
		</LinearGradient>
    );
};

export default TransactionsScreen;