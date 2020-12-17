import React from 'react';
//navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import NotificationsScreen from '../screens/notifcations/NotifcationsScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
//icons
import Icon from '../assets/icons/Icons.js'

Icon.loadFont();

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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

            // You can return any component that you like here!
            return <Icon name={iconName} size={35} color={'red'}/>;
          },
        })}
        tabBarOptions={{
          showLabel: false
        }}
      >
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
      </Tab.Navigator>
    );
};

export default TabNavigator;