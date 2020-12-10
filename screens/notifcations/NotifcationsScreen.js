//react stuff
import React from 'react';
import {Text, View} from 'react-native';
//navigations
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import DashboardScreen from '../dashboard/DashboardScreen';
import WalletScreen from '../wallet/WalletScreen';

const Tab = createBottomTabNavigator();

const NotificationsScreen = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
      </Tab.Navigator>
    );
};

export default NotificationsScreen;