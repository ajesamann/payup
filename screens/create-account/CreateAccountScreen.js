import React from 'react';
import {Text, View} from 'react-native';
//components
import BackButton from '../../components/BackButton'
//styles
import {globalStyles} from '../../global-styles/general'

const CreateAccountScreen = (props) => {
    return (
        <View style={globalStyles.centerMax}>
            <Text>CreateAccountScreen Screen</Text>
            <BackButton navigation={props.navigation} screen={'login'}/>
        </View>
    );
};

export default CreateAccountScreen;