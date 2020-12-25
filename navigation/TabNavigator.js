import React from 'react';
//navigation
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import NotificationsScreen from '../screens/notifcations/NotifcationsScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
//icons
import Icon from '../assets/icons/Icons.js'

Icon.loadFont();

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
    return (
      <Tab.Navigator initialRouteName="Wallet" 
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;

            if (route.name === 'Wallet') {
              iconName = 'wallet-icon';
            } else if (route.name === 'Dashboard') {
              iconName = 'dashboard-icon';
            } else if (route.name === 'Notifications') {
              iconName = 'history-icon';
            }
            
            return <Icon name={iconName} size={35} color={'red'}/>;
          },
        })}
        tabBarOptions={{
          showLabel: false
        }}
      >
        <Tab.Screen name="Notifications">
        {() => <NotificationsScreen navigation={useNavigation()} lang={props.lang}/>}
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