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

const StackNavigator = () => {
    return (
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen navigation={useNavigation} name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen navigation={useNavigation} name="UserLoggedIn" component={TabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen navigation={useNavigation} name="Forgot Password" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
        <Stack.Screen navigation={useNavigation} name="Create Account" component={CreateAccountScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
    );
};

export default StackNavigator;