import React, { useState } from 'react';
import { Text, View } from 'react-native';
import registStyles from '../style/registStyles';
import RegistStepImg from '../component/regist/RegistStepImg';
import NextRegist from '../component/regist/NextRegist';
import { useNavigation } from '@react-navigation/native';

const Regist4 = () => {

  const navigation = useNavigation();
  

  return (    
    <View style={registStyles().registContainer}>
      <Text>신청완료페이지</Text>
    </View>
  );  
}

export default Regist4;