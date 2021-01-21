import React from 'react';
import {View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {size} from '../../global-styles/sizing'

const ForgotPasswordScreen = (props) => {
    const [email, onChangeEmail] = React.useState();
  
      return (
        <LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
		    <StatusBar barStyle="light-content" />
            <View style={[globalStyles.h100, globalStyles.centerColumn, globalStyles.w75]}>
                <View style={[globalStyles.centerColumn, globalStyles.w100]}>
                    {/* FORGOT PASSWORD EMAIL INPUT */}
                    <TextInput
                        style={[globalStyles.stack_input, , globalStyles.w100, {fontSize: size(13)}]}
                        onChangeText={email => onChangeEmail(email)}
                        value={email}
                        placeholder={props.lang('enter_email')}
                    />
                    {/* RESET PASSWORD BUTTON */}
                    <TouchableOpacity
                        style={[globalStyles.centerRow, globalStyles.w100, globalStyles.stack_btn, , globalStyles.mt20]}
                    >
                        <Text style={{color: appColors.primary, fontFamily: 'Barlow-Medium', fontSize: size(13)}}>{props.lang('reset_password')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{position: "absolute", bottom: 90}, globalStyles.centerColumn, globalStyles.w100]}>
                    {/* BACK TO LOGIN - STACK BUTTON */}
                    <TouchableOpacity
                        style={globalStyles.centerRow}
                        onPress={() => {props.navigation.navigate('Login')}}
                    >
                        <Text style={[globalStyles.wtext, {fontSize: size(13)}]}>{props.lang('back_to_login')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
      );
  };

export default ForgotPasswordScreen;