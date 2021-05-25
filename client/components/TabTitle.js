import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from './../global-styles/general';
import {appColors} from './../global-styles/colors';
import {size} from '../global-styles/sizing';
//icons
import Icon from '../assets/icons/Icons.js'

const TabTitle = (props) => {

    const navUser = (location) => {
        switch (location){
            // nav user to settings screen
            case "settings-icon":
                props.navigation.navigate('Settings');
                break;
            // nav user to qr code screen
            case "qr-icon":
                props.navigation.navigate('QR');
                break;
        }
    }

    return (
      <View style={[globalStyles.h22, globalStyles.leftRow, globalStyles.w100, globalStyles.plr20, globalStyles.toTop]}>
            <Text 
                style={{
                    fontFamily: "Barlow-Bold",
                    fontSize: size(34),
                    color: props.color
                }}
            >
            {props.title}
            </Text>
            {props.icon ? <TouchableOpacity><Icon name={props.icon} onPress={() => navUser(props.icon)} size={size(35)} color={'white'}/></TouchableOpacity> : null}
      </View>
    );
};

export default TabTitle;