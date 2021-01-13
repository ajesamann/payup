import React from 'react';
import { View, Text } from 'react-native';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from './../global-styles/general';
import {appColors} from './../global-styles/colors';
//icons
import Icon from '../assets/icons/Icons.js'

const TabTitle = (props) => {

    return (
      <View style={[globalStyles.h20, globalStyles.leftRow, globalStyles.w100, globalStyles.plr20, globalStyles.toTop, globalStyles.pt30]}>
            <Text 
                style={{
                    fontFamily: "Barlow-Bold",
                    fontSize: 40,
                    color: props.color
                }}
            >
            {props.title}
            </Text>
            {props.icon ? <Icon name={props.icon} size={40} color={'white'}/> : null}
      </View>
    );
};

export default TabTitle;