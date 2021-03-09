//react
import React from 'react';
import { View, Text } from 'react-native';
//redux
import { connect } from 'react-redux';
//styles
import LinearGradient from 'react-native-linear-gradient';
import {globalStyles} from './../global-styles/general';
import {appColors} from './../global-styles/colors';
import {size} from '../global-styles/sizing';
//icons
import Icon from '../assets/icons/Icons.js'

const NotificationPopup = (props) => {

    return (
        <View style={[globalStyles.centerColumn, globalStyles.w100, {position: 'absolute', top: '12.5%'}]}>
            <View style={[globalStyles.notification, globalStyles.centerRow]}>
                    <View style={[globalStyles.notifShape, {backgroundColor: props.alert.color}]}></View>
                    <Text style={[globalStyles.btnTextWhite, {flex: 1, fontSize: size(14)}]}>{props.alert.msg}</Text>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    const { alert } = state
    return { alert }
};
  
export default connect(mapStateToProps)(NotificationPopup);