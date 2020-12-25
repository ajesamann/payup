import React from 'react';
//navigation
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//screens
import CreateAccountScreen from '../screens/create-account/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/forgot-password/ForgotPasswordScreen';
import LoginScreen from '../screens/login/LoginScreen';
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator();

const StackNavigator = (props) => {
    return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }}>
        {() => <LoginScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
        <Stack.Screen name="UserLoggedIn" options={{ headerShown: false }}>
        {() => <TabNavigator navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
        <Stack.Screen name="Forgot Password" options={{ headerShown: false }}>
        {() => <ForgotPasswordScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
        <Stack.Screen name="Create Account" options={{ headerShown: false }}>
        {() => <CreateAccountScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
    </Stack.Navigator>
    );
};

export default StackNavigator;