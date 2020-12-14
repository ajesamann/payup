//react
import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
//styles
import {globalStyles} from '../../global-styles/general'
import {appColors} from '../../global-styles/colors'

const LoginScreen = (props) => {
  const [username, onChangeUsername] = React.useState();
  const [password, onChangePassword] = React.useState();

  const login = (props) => {
    //send a get to the api
    console.log('Login User')
  }

    return (
      <View style={[globalStyles.centerMiddleContainerMax, globalStyles.primary_bg]}>
        <View style={[{ width: '100%' }, globalStyles.centerMiddleContainer]}>
          <TextInput
            style={styles.input}
            onChangeText={username => onChangeUsername(username)}
            value={username}
            placeholder={'Username'}
          />
          <TextInput
            style={styles.input}
            onChangeText={password => onChangePassword(password)}
            value={password}
            placeholder={'Password'}
          />
        </View>
        <View style={{ width: '100%' }}>
          <View style={{ width: '100%' }}>
            <Button
              title="Login"
              onPress={login}
            />
            <Button
              title="Create Account"
              onPress={() => props.navigation.navigate('Create Account')}
            />
          </View>
          <Button
            title="Forgot Password"
            onPress={() => props.navigation.navigate('Forgot Password')}
          />
        </View>
      </View>
    );
};



const styles = StyleSheet.create({
  input: {
      marginTop: 10,
      borderWidth: 1,
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 3,
      padding: 10
  },
})

export default LoginScreen;