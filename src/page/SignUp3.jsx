import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp3 = () => {

  const navigation = useNavigation();

  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text>회원가입을 축하드림다</Text>
      <TouchableOpacity
        style={{
          marginTop:20,
          borderColor:'red',
          borderWidth:1,
          height:40
        }}
        onPress={() => navigation.navigate('로그인')}
      >
        <Text>로그인하러가기</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default SignUp3;
