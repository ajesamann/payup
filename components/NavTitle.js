//react
import React from 'react';
import { View, Text } from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from './../global-styles/general';
import {appColors} from './../global-styles/colors';
import {size} from '../global-styles/sizing';
//icons
import Icon from '../assets/icons/Icons.js'

const NavTitle = (props) => {

    const goBack = (location) => {
        switch (location){
            // nav user to my account screen
            case "My Account":
                props.navigation.navigate('UserLoggedIn');
                break;
            // nav user to wallet screen
            case "qr-icon":
                break;
        }
    }

    return (
      <View style={[globalStyles.h22, globalStyles.leftRow, globalStyles.w100, globalStyles.plr20, globalStyles.toTop]}>
            <Icon name={props.icon} onPress={() => goBack(props.location)} size={size(27)} color={'white'}/>
            <Text 
                style={{
                    fontFamily: "Barlow-Bold",
                    fontSize: size(40),
                    color: props.color
                }}
            >
            {props.title}
            </Text>
      </View>
    );
};

export default NavTitle;