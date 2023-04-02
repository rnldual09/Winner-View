import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Util, { phonePattern, birthDtPattern } from '../../util/Util';

const ApplyContent = (props) => {

  const { person, team, teamMinCnt, teamMaxCnt } = props;

  useEffect(() => {
    setInit();
  }, [])

  const [usrNm, setUsrNm] = useState('');
  const [birthDt, setBirthDt] = useState('');
  const [usrSex, setUsrSex] = useState('');
  const [usrPh, setUsrPh] = useState('');

  const setInit = async () => {
    const usrInfo = await Util.getUsrInfo();
    
    setUsrNm(usrInfo.usrNm);
    setBirthDt(usrInfo.birthDt.replace(birthDtPattern, '$1-$2-$3'));
    setUsrSex(usrInfo.usrSex==1?'남':'여');
    setUsrPh(usrInfo.usrPh.replace(phonePattern, '$1-$2-$3'));
  };

  return (
    <View
      style={{
        marginBottom:8
      }}
    >
      <Text>성명</Text>
      <Text>{usrNm}</Text>
      <Text>생년월일</Text>
      <Text>{birthDt}</Text>
      <Text>성별</Text>
      <Text>{usrSex}</Text>
      <Text>연락처</Text>
      <Text>{usrPh}</Text>
    </View>
  );  
}

export default ApplyContent;
