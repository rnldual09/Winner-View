import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Util from '../util/Util';

const FindPW1 = () => {

  const navigation = useNavigation();
  const[usrId, setUsrId] = useState('');          // 아이디
  const[errMsg, setErrMsg] = useState('');

  // 아이디 입력시마다 호출
  const changeUsrId = (text) => {
    setUsrId(text);
    setErrMsg('');
  };

  const goFindPW2 = async () => {
    
    if(usrId == '') {
      setErrMsg('아이디를 입력 해주세요');
    } else {

      const url = '/checkDupId.do';
      const data = {'usrId':usrId};
      const response = await Util.fetchWithNotToken(url, data);
      
      if(response.result == 0) {
        setErrMsg('해당아이디로 가입된 내역이 없습니다');
      } else {
        navigation.navigate('비밀번호찾기2', {'usrId':usrId})
      }
    }  
  }

  return (
    <View>     
      <TextInput
        style={{borderColor:'red', borderWidth:1}}
        placeholder='-아이디를 입력해주세요'
        value={usrId}
        onChangeText={(text) => changeUsrId(text)}
      />
      <TouchableOpacity 
        style={{borderColor:'blue', borderWidth:1, height:50, marginTop:20}}
        onPress={() => goFindPW2()}
      >
        <Text>다음</Text>
      </TouchableOpacity>          
      <View>
        <Text>{errMsg}</Text>
      </View>        
    </View>
  );  
}

export default FindPW1;
