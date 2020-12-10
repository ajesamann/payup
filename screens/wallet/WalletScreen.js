import React from 'react';
import {Text} from 'react-native';
//navigations
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import DashboardScreen from '../dashboard/DashboardScreen';
import NotificationsScreen from '../notifications/NotificationsScreen';

const Tab = createBottomTabNavigator();

const Wallet = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
      </Tab.Navigator>
    );
};

export default Wallet;