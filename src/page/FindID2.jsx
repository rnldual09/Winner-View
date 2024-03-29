import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FindID2 = ({route}) => {

  const navigation = useNavigation();

  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text>고객님의 아이디는 : {route.params.usrId} 입니다</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('로그인')}
      >
        <Text>로그인하러가기</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default FindID2;