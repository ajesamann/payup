import React from 'react';
//navigation
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
//screens
import CreateAccountScreen from '../screens/create-account/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/forgot-password/ForgotPasswordScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import QrCodeScreen from '../screens/wallet/QrCodeScreen';
import LoginScreen from '../screens/login/LoginScreen';
import TabNavigator from './TabNavigator';
import TransactionScreen from '../screens/activity/TransactionScreen';
import AddMoneyScreen from '../screens/money-actions/AddMoneyScreen';
import SendMoneyScreen from '../screens/money-actions/SendMoneyScreen';
import WithdrawMoneyScreen from '../screens/money-actions/WithdrawMoneyScreen';
import RequestMoneyScreen from '../screens/money-actions/RequestMoneyScreen';
import NumberPadScreen from '../screens/number-pad/NumberPadScreen';

const Stack = createStackNavigator();

const StackNavigator = (props) => {
    return (
    <Stack.Navigator initialRouteName="Login">
        {/* screens before user is logged in */}
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

        {/* logged in screens */}
        <Stack.Screen name="Settings" options={{ headerShown: false }}>
        {() => <SettingsScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
        <Stack.Screen name="TransactionScreen" options={{ headerShown: false }}>
        {() => <TransactionScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>

        {/* wallet screens */}
        <Stack.Screen name="Add Money" options={{ headerShown: false }}>
        {() => <AddMoneyScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
        <Stack.Screen name="Send Money" options={{ headerShown: false }}>
        {() => <SendMoneyScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
        <Stack.Screen name="Request Money" options={{ headerShown: false }}>
        {() => <RequestMoneyScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
        <Stack.Screen name="Withdraw Money" options={{ headerShown: false }}>
        {() => <WithdrawMoneyScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
        <Stack.Screen name="QR" options={{ headerShown: false }}>
        {() => <QrCodeScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
        
        {/* number pad screen */}
        <Stack.Screen name="Number Pad" options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS}}>
        {() => <NumberPadScreen navigation={useNavigation()} lang={props.lang}/>}
        </Stack.Screen>
    </Stack.Navigator>
    );
};

export default StackNavigator;