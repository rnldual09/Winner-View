import React from 'react';
import { View, Image, TextInput } from 'react-native';
import CommonBtn from '../component/common/CommonBtn';
import LoginBtns from '../component/login/LoginBtns'
import loginStyles from '../style/loginStyles';
import { useNavigation } from "@react-navigation/native";

const Login = () => {

  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate('메인');
  };
  

  return (
    <View style={loginStyles().loginContainer}>
      <Image 
        source={require('../assets/icon/appIcon.png')}
        style={loginStyles().loginIcon}
      />        
      <TextInput 
        placeholder='아이디를 입력하세요'
        placeholderTextColor='#999'
        style={loginStyles().loginTextInput}
      />
      <TextInput 
        placeholder='비밀번호를 입력하세요'
        placeholderTextColor='#999'
        style={loginStyles().loginTextInput}
        secureTextEntry={true}
      />        
      <View style={loginStyles().loginSubContainer}>
        <CommonBtn 
          title="로그인"
          OnPress={goLogin}
        />
        <LoginBtns />        
      </View>
    </View>
  );  
}

export default Login;
