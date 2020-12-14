//react stuff
import React from 'react';
import {Text, View} from 'react-native';
//navigations
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//components
import { TabNavigator } from '../../components/TabNavigator';

const Tab = createBottomTabNavigator();

const NotificationsScreen = () => {
    return (
      <View>
        <TabNavigator />
      </View>
    );
};

export default NotificationsScreen;