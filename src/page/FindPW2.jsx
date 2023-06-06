import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Util from '../util/Util';
import { useNavigation } from '@react-navigation/native';

const FindPW2 = ({route}) => {

  const navigation = useNavigation();
  const[usrPh, setUsrPh] = useState('');          // 휴대폰번호
  const[certifi, setCertifi] = useState(false);   // 인증번호 입력 보여주기
  const[certifiNo, setCertifiNo] = useState('');  // 인증번호
  const[errMsg, setErrMsg] = useState('');        // 에러메세지

  // 휴대폰번호 입력시마다 호출
  const changeUsrPh = (text) => {
    setUsrPh(text);
    setErrMsg('');
  };

  // 인증번호 입력시마다 호출
  const changeCertifiNo = (text) => {
    setCertifiNo(text);
    setErrMsg('');
  };

  // 인증하기
  const goCertifi = async () => {
    
    if(certifiNo != '1234') {
      setErrMsg('인증번호가 잘못되었습니다');
    }

    const url = '/findMyId.do';
    const data = {'usrPh':usrPh};
    const response = await Util.fetchWithNotToken(url, data);

    if(response.usrId == '') {
      setErrMsg('입력하신 번호로 가입된 내역이없습니다');
    } else if (response.usrId != route.params.usrId) {
      setErrMsg('입력하신 번호로 가입한 아이디와 입력한 아이디와 다릅니다');
    } else {
      navigation.navigate('비밀번호찾기3', {'usrId':response.usrId});
    }
  };

  // 다시 인증하기
  const reCertifi = () => {
    setUsrPh('');
    setCertifiNo('');
    setErrMsg('');
    setCertifi(false);
  };

  return (
    <View>
      {certifi ? (
        <>
          <TextInput
            style={{borderColor:'green', borderWidth:1, marginTop:30}}
            placeholder='인증번호입력 1234'
            value={certifiNo}
            onChangeText={(text) => changeCertifiNo(text)}
            keyboardType='number-pad'
          />
          <TouchableOpacity 
            style={{borderColor:'blue', borderWidth:1, height:50, marginTop:20}}
            onPress={() => goCertifi()}
          >
            <Text>확인</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{borderColor:'blue', borderWidth:1, height:50, marginTop:20}}
            onPress={() => reCertifi()}
          >
            <Text>다시인증하기</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            style={{borderColor:'red', borderWidth:1}}
            placeholder='-제외하고 입력해주세요'
            value={usrPh}
            onChangeText={(text) => changeUsrPh(text)}
            keyboardType='number-pad'
          />
          <TouchableOpacity 
            style={{borderColor:'blue', borderWidth:1, height:50, marginTop:20}}
            onPress={() => setCertifi(true)}
          >
            <Text>인증하기</Text>
          </TouchableOpacity>          
        </>
      )}

      <View>
        <Text>{errMsg}</Text>
      </View>
    </View>
  );  
}

export default FindPW2;
