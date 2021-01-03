import React from 'react';
//navigation
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import NotificationsScreen from '../screens/transactions/TransactionsScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
//icons
import Icon from '../assets/icons/Icons.js'
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../global-styles/general';
import {appColors} from '../global-styles/colors';
import TransactionsScreen from '../screens/transactions/TransactionsScreen';

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
            } else if (route.name === 'Dashboard') {
              iconName = 'dashboard-icon';
            } else if (route.name === 'Transactions') {
              iconName = 'history-icon';
            }
            
            return <Icon name={iconName} size={32} color={color}/>;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: appColors.appPurple,
          inactiveTintColor: 'gray',
          style: {
            height: '12.5%'
          },
        }}
      >
        <Tab.Screen name="Transactions">
        {() => <TransactionsScreen navigation={useNavigation()} lang={props.lang}/>}
        </Tab.Screen>
        <Tab.Screen name="Wallet">
        {() => <WalletScreen navigation={useNavigation()} lang={props.lang}/>}
        </Tab.Screen>
        <Tab.Screen name="Dashboard">
        {() => <DashboardScreen navigation={useNavigation()} lang={props.lang}/>}
        </Tab.Screen>
      </Tab.Navigator>
    );
};

export default TabNavigator;