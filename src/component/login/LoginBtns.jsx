import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import loginStyles from '../../style/loginStyles';
import commonStyles from '../../style/commonStyles';

const LoginBtns = () => {

  const navigation = useNavigation();

  return (
    <View style={loginStyles().loginBtnContainer}>
      <View style={loginStyles().loginBtnSubContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('아이디찾기1')}>
          <Text style={commonStyles(0.032).Font_999}>아이디 찾기</Text>
        </TouchableOpacity>
      </View>
      <View style={loginStyles().loginBtnSubContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('비밀번호찾기1')}>
          <Text style={commonStyles(0.032).Font_999}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
      <View style={loginStyles().loginBtnSubContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('회원가입1')}>
          <Text style={commonStyles(0.032).Font_999}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default LoginBtns;
