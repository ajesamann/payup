//react
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, Text } from 'react-native';
//redux
import { connect } from 'react-redux';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from '../global-styles/general';
import {appColors} from '../global-styles/colors';
import {size} from '../global-styles/sizing';
//icons
import Icon from '../assets/icons/Icons.js'

const AlertPopup = (props) => {
    // slideAnim will be used as the value for opacity. Initial Value: 0
    const slideAnim = useRef(new Animated.Value(-250)).current;

    const slideIn = () => {
    // Will change slideAnim value to 1 in 5 seconds
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 425,
            useNativeDriver: true,
            easing: Easing.elastic(1)
        }).start();
    };

    const slideOut = () => {
    // Will change slideAnim value to 0 in 5 seconds
        Animated.timing(slideAnim, {
            toValue: -250,
            duration: 425,
            useNativeDriver: true,
        }).start();
    };

    const animation = () => {
        slideIn();
        setTimeout(() => {
            props.alert.show ? slideOut() : null;
        }, 2750);
    }
    
    animation();

    return (
        <Animated.View style={[globalStyles.centerColumn, globalStyles.w100, {position: 'absolute', top: '12.5%', transform: [{ translateY: slideAnim }]}]}>
            <View style={[globalStyles.notification, globalStyles.centerRow]}>
                    <View style={[globalStyles.notifShape, {backgroundColor: props.alert.color}]}></View>
                    <Text style={[globalStyles.btnTextWhite, {flex: 1, fontSize: size(14)}]}>{props.alert.msg}</Text>
            </View>
        </Animated.View>
    );
};

const mapStateToProps = (state) => {
    const { alert } = state
    return { alert }
};
  
export default connect(mapStateToProps)(AlertPopup);