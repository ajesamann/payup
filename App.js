//react
import React from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'

const App: () => React$Node = () => {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
