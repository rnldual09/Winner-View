import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Util from '../util/Util';
import { useNavigation } from '@react-navigation/native';

const SignUp2 = ({ route }) => {

  const navigation = useNavigation();

  const[success, setSuccess] = useState(false);

  // 회원가입
  const insertMember = async () => {

    const url = '/insertMember.do';
    const data = {
      'usrId':route.params.usrId,
      'usrPw':route.params.usrPw,
      'mailId':route.params.mailId,
      'mailDomain':route.params.mailDomain,
      'usrArea1':route.params.usrArea1,
      'usrArea2':route.params.usrArea2,
      'profile':route.params.profile,
      'usrNm':route.params.usrNm,
      'usrPh':route.params.usrPh,
      'birthDt':route.params.birthDt,
      'usrSex':route.params.usrSex
    };
    
    const response = await Util.fetchWithNotToken(url, data);

    console.log(response);

    if(response.result == 'success') {
      setSuccess(true);
    } else {
      alert('회원가입 실패');  
    }
  };

  const goNextSignUp = () => { navigation.navigate('회원가입3'); };

  const funcOnPress = () => {
    if(!success) insertMember();
    else         goNextSignUp();
  }

  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
      <Text>한번 더 확인헤보세유</Text>
      <Text>아이디 : {route.params.usrId}</Text>
      <Text>비번 : {route.params.usrPw}</Text>
      <Text>메일 : {route.params.mailId}</Text>
      <Text>메일도메인 : {route.params.mailDomain}</Text>
      <Text>대분류 지역 : {route.params.usrArea1}</Text>
      <Text>소분류 지역 : {route.params.usrArea2}</Text>
      <Text>프로필사진명 : {route.params.profile}</Text>
      <Text>유저명 : {route.params.usrNm}</Text>
      <Text>휴대폰번호 : {route.params.usrPh}</Text>
      <Text>생년월일 : {route.params.birthDt}</Text>
      <Text>성별 1남자 2여자 : {route.params.usrSex}</Text>
      <View>
        <TouchableOpacity
          style={{borderColor:'red', borderWidth:1, width:100, height:40, marginTop:20}}
          onPress={() => funcOnPress()}
        >
          <Text>{success ? '회원가입완료' : '가입하기'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default SignUp2;
