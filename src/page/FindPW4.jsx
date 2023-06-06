import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FindPW3 = () => {

  const navigation = useNavigation();

  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text>비밀번호 변경 성공</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('로그인')}
        style={{borderColor:'green', borderWidth:1, marginTop:20}}
      >
        <Text>로그인하러가기</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default FindPW3;