//react
import React from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general';
import {loginStyles} from './styles/login';
import {appColors} from '../../global-styles/colors';
//icons
import Icon from '../../assets/icons/Icons.js';

const LoginScreen = (props) => {
  const [username, onChangeUsername] = React.useState();
  const [password, onChangePassword] = React.useState();
  const [rememberMe, setRememberMe] = React.useState(false);

  const login = () => {
    //send a get to the api and log the user in
    props.navigation.navigate('UserLoggedIn');
  }

    return (
      <LinearGradient colors={[appColors.primary, appColors.primary]} style={globalStyles.centerMax}>
		<View style={loginStyles.img_con}>
			<Image source={require('../../assets/logos/payup-white-tp.png')} style={loginStyles.login_logo}/>
		</View>
		<View style={[{height: '45%'}, globalStyles.spreadColumn, globalStyles.w100]}>
			{/* LOGIN INPUTS */}
			<View style={[globalStyles.centerColumn, globalStyles.w75]}>
				<TextInput
					style={[globalStyles.stack_input, , globalStyles.w100]}
					onChangeText={username => onChangeUsername(username)}
					value={username}
					placeholder={props.lang('username')}
				/>
				<TextInput
					style={[globalStyles.stack_input, , globalStyles.w100]}
					onChangeText={password => onChangePassword(password)}
					value={password}
					placeholder={props.lang('password')}
				/>
				<View style={[globalStyles.spreadRow, globalStyles.mt20, globalStyles.w100]}>
					{/* REMEMBER ME CHECKBOX */}
					<View style={globalStyles.centerRow}>
						{!rememberMe ?
							<Icon name={'unchecked'} onPress={() => setRememberMe(!rememberMe)} size={18} color={'white'}/>
							: <Icon name={'checked'} onPress={() => setRememberMe(!rememberMe)} size={18} color={'white'}/>
						}
						<Text style={[globalStyles.wtext, globalStyles.ml10]}>{props.lang('remember_me')}</Text>
					</View>
					{/* FORGOT PASSWORD BUTTON */}
					<TouchableOpacity
						style={globalStyles.centerRow}
						onPress={() => {props.navigation.navigate('Forgot Password')}}
					>
						<Text style={globalStyles.wtext}>{props.lang('forgot_password')}</Text>
					</TouchableOpacity>
				</View>
				{/* LOGIN BUTTON */}
				<TouchableOpacity
					style={[globalStyles.centerRow, globalStyles.w100, globalStyles.stack_btn, ]}
					onPress={() => login()}
				>
					<Text style={{color: appColors.primary, fontFamily: 'Barlow-Medium'}}>{props.lang('login')}</Text>
				</TouchableOpacity>
			</View>
			{/* SIGN UP TEXT */}
			<View style={globalStyles.centerRow}>
				<Text style={globalStyles.linkText}>{props.lang('first_time') + " "}</Text>
				<Text style={globalStyles.linkTextBold} onPress={() => {props.navigation.navigate('Create Account')}}>
					{props.lang('sign_up')}
				</Text>
			</View>
		</View>
      </LinearGradient>
    );
};

export default LoginScreen;