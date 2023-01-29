import React from 'react';
import { TextInput } from 'react-native';
import loginStyles from '../../style/loginStyles';

const LoginTextInput = (props) => {

  const { placeholder, secureTextEntry, value, onChangeText } = props;

  return (
    <TextInput 
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor='#999'
      style={loginStyles().loginTextInput}        
      autoCapitalize="none"
    />              
  );  
}

export default LoginTextInput;
