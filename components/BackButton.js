import React from 'react';
import { View, Button } from 'react-native';

const BackButton = (props) => {

    return (
      <View>
			<Button
				title={`Back to ${props.screen}`}
				onPress={() => props.navigation.goBack()}
			/>
      </View>
    );
};

export default BackButton;