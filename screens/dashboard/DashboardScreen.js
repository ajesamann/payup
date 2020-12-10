import React from 'react';
import {Text} from 'react-native';
//navigations
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import NotificationsScreen from '../notifcations/NotifcationsScreen';
import WalletScreen from '../wallet/WalletScreen';

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
      </Tab.Navigator>
    );
};

export default DashboardScreen;