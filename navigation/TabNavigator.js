import React from 'react';
//navigation
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import AccountScreen from '../screens/account/AccountScreen';
import ActivityScreen from '../screens/activity/ActivityScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
//icons
import Icon from '../assets/icons/Icons.js'
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../global-styles/general';
import {appColors} from '../global-styles/colors';

Icon.loadFont();

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
    return (
      <Tab.Navigator initialRouteName="Wallet" 
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Wallet') {
              iconName = 'wallet-icon';
            } else if (route.name === 'Account') {
              iconName = 'dashboard-icon';
            } else if (route.name === 'Activity') {
              iconName = 'history-icon';
            }
            
            return <Icon name={iconName} size={focused ? 34 : 26} color={color}/>;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: appColors.primary,
          inactiveTintColor: appColors.gray,
          style: {
            height: '12.5%'
          },
        }}
      >
        <Tab.Screen name="Activity">
        {() => <ActivityScreen navigation={useNavigation()} lang={props.lang}/>}
        </Tab.Screen>
        <Tab.Screen name="Wallet">
        {() => <WalletScreen navigation={useNavigation()} lang={props.lang}/>}
        </Tab.Screen>
        <Tab.Screen name="Account">
        {() => <AccountScreen navigation={useNavigation()} lang={props.lang}/>}
        </Tab.Screen>
      </Tab.Navigator>
    );
};

export default TabNavigator;