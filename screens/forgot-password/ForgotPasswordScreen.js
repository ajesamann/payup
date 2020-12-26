import React from 'react';
import {View, Text} from 'react-native';
//components
import BackButton from '../../components/BackButton'
//styles
import {globalStyles} from '../../global-styles/general'

const ForgotPasswordScreen = (props) => {
    return (
        <View style={globalStyles.centerMax}>
            <Text>ForgotPassword Screen</Text>
            <BackButton navigation={props.navigation} screen={'login'}/>
        </View>
    );
};

export default ForgotPasswordScreen;