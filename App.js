//react
import React from 'react';
//navigations
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
//screens
import CreateAccountScreen from './screens/create-account/CreateAccountScreen';
import ForgotPasswordScreen from './screens/forgot-password/ForgotPasswordScreen';
import LoginScreen from './screens/login/LoginScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen navigation={useNavigation} name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen navigation={useNavigation} name="Forgot Password" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
        <Stack.Screen navigation={useNavigation} name="Create Account" component={CreateAccountScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
