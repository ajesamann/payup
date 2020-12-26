//react
import React from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../../global-styles/general'
import {loginStyles} from './styles/login'
import {appColors} from '../../global-styles/colors'

const LoginScreen = (props) => {
  const [username, onChangeUsername] = React.useState();
  const [password, onChangePassword] = React.useState();
  const [rememberMe, setRememberMe] = React.useState(false);

  console.log(props)

  const login = () => {
    //send a get to the api and log the user in
    props.navigation.navigate('UserLoggedIn');
  }

    return (
      <LinearGradient colors={[appColors.appBlue, appColors.appPurple]} style={globalStyles.centerMax}>
		<View style={loginStyles.img_con}>
			<Image source={require('../../assets/logos/payup-white-tp.png')} style={loginStyles.login_logo}/>
		</View>
		<View style={[{height: '45%'}, globalStyles.spreadColumn, globalStyles.w100]}>
			{/* LOGIN INPUTS */}
			<View style={[globalStyles.centerColumn, globalStyles.w75]}>
				<TextInput
					style={[loginStyles.login_input, globalStyles.box_shadow, globalStyles.w100]}
					onChangeText={username => onChangeUsername(username)}
					value={username}
					placeholder={props.lang('username')}
				/>
				<TextInput
					style={[loginStyles.login_input, globalStyles.box_shadow, globalStyles.w100]}
					onChangeText={password => onChangePassword(password)}
					value={password}
					placeholder={props.lang('password')}
				/>
				<View style={[globalStyles.spreadRow, globalStyles.mt20, globalStyles.w100]}>
					<View style={globalStyles.centerRow}>
						<CheckBox
							disabled={false}
							boxType={'square'}
							value={rememberMe}
							onValueChange={(newValue) => setRememberMe(newValue)}
						/>
						<Text style={[globalStyles.wtext, globalStyles.ml10]}>Remember me</Text>
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
					style={[globalStyles.centerRow, globalStyles.w100, loginStyles.login_btn, globalStyles.box_shadow]}
					onPress={() => login()}
				>
					<Text style={{color: '#4d0094'}}>{props.lang('login')}</Text>
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