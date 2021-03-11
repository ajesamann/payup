//react
import React from 'react';
import {View, TextInput, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
//redux
import { connect } from 'react-redux';
//encryption
import bcrypt from 'react-native-bcrypt';
//api
import * as fetchUsers from '../../api/usersApi';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {loginStyles} from './styles/login';
import {appColors} from '../../global-styles/colors';
import {size} from '../../global-styles/sizing'
//icons
import Icon from '../../assets/icons/Icons.js';
//loader
import Spinner from 'react-native-spinkit';

const LoginScreen = (props) => {
  	const [username, onChangeUsername] = React.useState();
  	const [password, onChangePassword] = React.useState();
  	const [rememberMe, setRememberMe] = React.useState(false);
	const [showSpinner, toggleSpinner] = React.useState(false);

  	const login = () => {
    //send a get to the api and log the user in
	if(!username){
		props.showAlert(appColors.error, props.lang('username_required'));
	}else if(!password){
		props.showAlert(appColors.error, props.lang('password_required'));
	}else{
		toggleSpinner(true);
		fetchUsers.getTargetedUser('username', '==', username)
			.then(data => {
				if(data !== false){
					//check the passwords from data and if they match log them in and start session
					bcrypt.compare(password, data.password, (err, res) => {
						if(res === true){
							toggleSpinner(false);
							props.navigation.navigate('UserLoggedIn');
						}else{
							toggleSpinner(false);
							props.showAlert(appColors.error, props.lang('user_not_found'));
						}
					});
				}else if(data === false){
					//no user was found
					toggleSpinner(false);
					props.showAlert(appColors.error, props.lang('user_not_found'));
				}
			});
		}
	}

    return (
      <LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
		<StatusBar barStyle="light-content" />
		<View style={loginStyles.img_con}>
			<Image source={require('../../assets/logos/payup-white-tp.png')} style={loginStyles.login_logo}/>
		</View>
		<View style={[{height: '45%'}, globalStyles.spreadColumn, globalStyles.w100]}>
			{/* LOGIN INPUTS */}
			<View style={[globalStyles.centerColumn, globalStyles.w75]}>
				<TextInput
					style={[globalStyles.stack_input, , globalStyles.w100, {fontSize: size(13)}]}
					onChangeText={username => onChangeUsername(username)}
					value={username}
					placeholder={props.lang('username')}
					maxLength={64}
				/>
				<TextInput
					style={[globalStyles.stack_input, , globalStyles.w100, {fontSize: size(13)}]}
					onChangeText={password => onChangePassword(password)}
					value={password}
					placeholder={props.lang('password')}
					secureTextEntry={true}
					maxLength={64}
				/>
				<View style={[globalStyles.spreadRow, globalStyles.mt20, globalStyles.w100]}>
					{/* REMEMBER ME CHECKBOX */}
					<View style={globalStyles.centerRow}>
						{!rememberMe ?
							<Icon name={'unchecked'} onPress={() => setRememberMe(!rememberMe)} size={size(16)} color={'white'}/>
							: <Icon name={'checked'} onPress={() => setRememberMe(!rememberMe)} size={size(16)} color={'white'}/>
						}
						<Text style={[globalStyles.wtext, globalStyles.ml10, {fontSize: size(13)}]}>{props.lang('remember_me')}</Text>
					</View>
					{/* FORGOT PASSWORD BUTTON */}
					<TouchableOpacity
						style={globalStyles.centerRow}
						onPress={() => {props.navigation.navigate('Forgot Password')}}
					>
						<Text style={[{fontSize: size(13)}, globalStyles.wtext]}>{props.lang('forgot_password')}</Text>
					</TouchableOpacity>
				</View>
				{/* LOGIN BUTTON */}
				<TouchableOpacity
					style={[globalStyles.centerRow, globalStyles.w100, globalStyles.stack_btn]}
					onPress={() => login()}
				>
					<Spinner isVisible={showSpinner} size={size(23)} type={'ThreeBounce'} color={appColors.black}/>
					{ !showSpinner ? <Text style={{color: appColors.primary, fontFamily: 'Barlow-Medium', fontSize: size(13)}}>{props.lang('login')}</Text> : null}
				</TouchableOpacity>
			</View>
			{/* SIGN UP TEXT */}
			<View style={globalStyles.centerRow}>
				<Text style={[globalStyles.linkText, {fontSize: size(13)}]}>{props.lang('first_time') + " "}</Text>
				<Text style={[globalStyles.linkTextBold, {fontSize: size(13)}]} onPress={() => {props.navigation.navigate('Create Account'), props.dispatch({type: 'ALERT_OFF'})}}>
					{props.lang('sign_up')}
				</Text>
			</View>
		</View>
      </LinearGradient>
    );
};

const mapStateToProps = (state) => {
    const { alert } = state
    return { alert }
};

export default connect(mapStateToProps)(LoginScreen);