import React from 'react';
import { View, Text } from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from './../global-styles/general';
import {appColors} from './../global-styles/colors';
import {size} from '../global-styles/fontSize';
//icons
import Icon from '../assets/icons/Icons.js'

const TabTitle = (props) => {

    return (
      <View style={[globalStyles.h22, globalStyles.leftRow, globalStyles.w100, globalStyles.plr20, globalStyles.toTop,]}>
            <Text 
                style={{
                    fontFamily: "Barlow-Bold",
                    fontSize: size(40),
                    color: props.color
                }}
            >
            {props.title}
            </Text>
            {props.icon ? <Icon name={props.icon} size={size(35)} color={'white'}/> : null}
      </View>
    );
};

export default TabTitle;