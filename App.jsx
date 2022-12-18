import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Router from './src/util/router';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1}}>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );  
};

export default App;