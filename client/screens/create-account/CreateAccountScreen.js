import React from 'react';
import {View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';
//encryption
import bcrypt from 'react-native-bcrypt';
//api
import * as fetchUsers from '../../api/usersApi';
//redux
import { connect } from 'react-redux';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {appColors} from '../../global-styles/colors';
import {size} from '../../global-styles/sizing'
//loader
import Spinner from 'react-native-spinkit';

const CreateAccountScreen = (props) => {
    const [email, onChangeEmail] = React.useState();
    const [username, onChangeUsername] = React.useState();
    const [password, onChangePassword] = React.useState();
    const [confirmPassword, onChangeConfirmPassword] = React.useState();
	const [showSpinner, toggleSpinner] = React.useState(false);
  
    const createAccount = () => {
        //grab the input info from user and send to firebase, then send to confirm account page
        if(!password || !username || !email) return props.showAlert(appColors.error, props.lang('fill_all'));

        //email validating regular expression
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //validate the email
        if (!(emailRegEx.test(email))) return props.showAlert(appColors.error, props.lang('valid_email'));

        toggleSpinner(true);
        bcrypt.genSalt(10, (err, salt) => {
            if(err){
                console.log(err)
            }else{
                bcrypt.hash(password, salt, (err, hash) => {
                    // store hashed password
                    if(err){
                        toggleSpinner(false);
                        return;
                    }else{
                        let newUser = {
                            username,
                            email,
                            password: hash,
                            balance: '0'
                        }
    
                        fetchUsers.addUser(newUser)
                            .then(() => {
                                //toggle alert
                                toggleSpinner(false);
                                props.showAlert(appColors.green, props.lang('account_created_success'));
                            })
                            .catch(error => {
                                props.showAlert(appColors.error, props.lang('something_went_wrong'))
                                toggleSpinner(false);
                            });
                    }
                });
            }
        });
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
                        onPress={() => {props.dispatch({type: 'ALERT_OFF'}), createAccount()}}
                        style={[globalStyles.centerRow, globalStyles.w100, globalStyles.stack_btn, , globalStyles.mt20]}
                    >
                        <Spinner isVisible={showSpinner} size={size(23)} type={'ThreeBounce'} color={appColors.black}/>
                        { !showSpinner ? <Text style={{color: appColors.primary, fontFamily: 'Barlow-Medium', fontSize: size(13)}}>{props.lang('create_account')}</Text> : null}
                    </TouchableOpacity>
                </View>
                <View style={[{position: "absolute", bottom: 90}, globalStyles.centerColumn, globalStyles.w100]}>
                    {/* BACK TO LOGIN - STACK BUTTON */}
                    <TouchableOpacity
                        style={globalStyles.centerRow}
                        onPress={() => {props.navigation.navigate('Login'), props.dispatch({ type: 'ALERT_OFF' })}}
                    >
                        <Text style={[globalStyles.wtext, {fontSize: size(13)}]}>{props.lang('back_to_login')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const mapStateToProps = (state) => {
    const { alert } = state
    return { alert }
};

export default connect(mapStateToProps)(CreateAccountScreen);