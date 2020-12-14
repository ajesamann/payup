import React from 'react';
//navigations
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//screens
import DashboardScreen from '../dashboard/DashboardScreen';
import NotificationsScreen from '../notifcations/NotifcationsScreen';
import WalletScreen from '../wallet/WalletScreen';
import SettingsScreen from './screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
};

export default TabNavigator;