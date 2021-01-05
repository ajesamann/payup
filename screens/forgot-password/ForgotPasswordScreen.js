import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
//components
import BackButton from '../../components/BackButton'
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';

const ForgotPasswordScreen = (props) => {
    const [email, onChangeEmail] = React.useState();
  
    const login = () => {
      //send a get to the api and log the user in
      props.navigation.navigate('UserLoggedIn');
    }
  
      return (
        <LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
            <View style={[globalStyles.h100, globalStyles.centerColumn, globalStyles.w75]}>
                <View style={[globalStyles.centerColumn, globalStyles.w100]}>
                    {/* FORGOT PASSWORD EMAIL INPUT */}
                    <TextInput
                        style={[globalStyles.stack_input, , globalStyles.w100]}
                        onChangeText={email => onChangeEmail(email)}
                        value={email}
                        placeholder={props.lang('enter_email')}
                    />
                    {/* RESET PASSWORD BUTTON */}
                    <TouchableOpacity
                        style={[globalStyles.centerRow, globalStyles.w100, globalStyles.stack_btn, , globalStyles.mt20]}
                    >
                        <Text style={{color: appColors.primary, fontFamily: 'Barlow-Medium'}}>{props.lang('reset_password')}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{position: "absolute", bottom: 90}, globalStyles.centerColumn, globalStyles.w100]}>
                    {/* BACK TO LOGIN - STACK BUTTON */}
                    <TouchableOpacity
                        style={globalStyles.centerRow}
                        onPress={() => {props.navigation.navigate('Login')}}
                    >
                        <Text style={globalStyles.wtext}>{props.lang('back_to_login')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
      );
  };

export default ForgotPasswordScreen;