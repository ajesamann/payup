import React from 'react';
import {View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
import { Base64 } from 'js-base64';
//api
import * as fetchUsers from '../../api/usersApi';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {size} from '../../global-styles/sizing'

const CreateAccountScreen = (props) => {
    const [email, onChangeEmail] = React.useState();
    const [username, onChangeUsername] = React.useState();
    const [password, onChangePassword] = React.useState();
    const [confirmPassword, onChangeConfirmPassword] = React.useState();
  
    const createAccount = () => {
        //grab the input info from user and send to firebase, then send to confirm account page
        let encryptedPassword = Base64.encode(password);

        let newUser = {
            username,
            email,
            password: encryptedPassword,
        }

        fetchUsers.addUser(newUser)
    }
  
      return (
        <LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
		    <StatusBar barStyle="light-content" />
            <View style={[globalStyles.h100, globalStyles.centerColumn, globalStyles.w75]}>
                <View style={[globalStyles.centerColumn, globalStyles.w100]}>
                    {/* USERNAME INPUT */}
                    <TextInput
                        style={[globalStyles.stack_input, , globalStyles.w100, {fontSize: size(13)}]}
                        onChangeText={username => onChangeUsername(username)}
                        value={username}
                        placeholder={props.lang('username')}
                    />
                    {/* EMAIL INPUT */}
                    <TextInput
                        style={[globalStyles.stack_input, , globalStyles.w100, {fontSize: size(13)}]}
                        onChangeText={email => onChangeEmail(email)}
                        value={email}
                        placeholder={props.lang('email')}
                    />
                    {/* PASSWORD INPUT */}
                    <TextInput
                        style={[globalStyles.stack_input, , globalStyles.w100, {fontSize: size(13)}]}
                        onChangeText={password => onChangePassword(password)}
                        value={password}
                        placeholder={props.lang('password')}
                        secureTextEntry={true}
                    />
                    {/* CONFIRM PASSWORD INPUT */}
                    <TextInput
                        style={[globalStyles.stack_input, , globalStyles.w100, {fontSize: size(13)}]}
                        onChangeText={confirmPassword => onChangeConfirmPassword(confirmPassword)}
                        value={confirmPassword}
                        placeholder={props.lang('confirm_password')}
                        secureTextEntry={true}
                    />
                    {/* CREATE ACCOUNT BUTTON */}
                    <TouchableOpacity
                        onPress={() => createAccount()}
                        style={[globalStyles.centerRow, globalStyles.w100, globalStyles.stack_btn, , globalStyles.mt20]}
                    >
                        <Text style={{color: appColors.primary, fontFamily: 'Barlow-Medium', fontSize: size(13)}}>{props.lang('create_account')}</Text>
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

export default CreateAccountScreen;