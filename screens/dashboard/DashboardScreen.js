//react stuff
import React from 'react';
import { Text, View } from 'react-native';
//styles
import {globalStyles} from '../../global-styles/general'

const DashboardScreen = (props) => {
    return (
      <View style={globalStyles.centerMiddleContainerMax}>
        <Text>{props.lang('hello')}</Text>
      </View>
    );
};

export default DashboardScreen;