import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Util from '../util/Util';

const FindPW3 = ({route}) => {

  const navigation = useNavigation();
  const[usrPw, setUsrPw] = useState('');

  const changeUsrPw = async () => {

    const url = '/changePassword.do';
    const data = {'usrId':route.params.usrId, 'usrPw':usrPw};
    const response = await Util.fetchWithNotToken(url, data);

    if(response.updateCnt == 1) {
      navigation.navigate('비밀번호찾기4');
    } else {
      alert('비밀번호 변경 에러');
    }
  };

  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
      <TextInput
        placeholder='비밀번호 입력'
        value={usrPw}
        onChangeText={(text) => setUsrPw(text)}
        style={{borderColor:'red', borderWidth:1, width:400}}
      />
      <TouchableOpacity
        onPress={() => changeUsrPw()}
        style={{borderColor:'green', borderWidth:1, marginTop:20}}
      >
        <Text>변경하기</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default FindPW3;