import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Util, { phonePattern, birthDtPattern } from '../../util/Util';
import ApplyPerContent from './ApplyPerContent';
import ApplyTeamContent from './ApplyTeamContent';

const ApplyContent = (props) => {

  const { person, team, teamMinCnt, teamMaxCnt } = props;

  useEffect(() => {
    setInit();
  }, []);


  useEffect(() => {
    contentChg();
  }, [person,team]);

  const [usrId, setUsrId] = useState('');
  const [usrNm, setUsrNm] = useState('');
  const [birthDt, setBirthDt] = useState('');
  const [usrSex, setUsrSex] = useState('');
  const [usrPh, setUsrPh] = useState('');

  const setInit = async () => {
    const usrInfo = await Util.getUsrInfo();
    
    setUsrId(usrInfo.usrId);
    setUsrNm(usrInfo.usrNm);
    setBirthDt(usrInfo.birthDt.replace(birthDtPattern, '$1-$2-$3'));
    setUsrSex(usrInfo.usrSex==1?'남':'여');
    setUsrPh(usrInfo.usrPh.replace(phonePattern, '$1-$2-$3'));
  };

  const contentChg = () => {
    if(person){
      return (
        <ApplyPerContent
          usrId={usrId}
          usrNm={usrNm}
          birthDt={birthDt}
          usrSex={usrSex}
          usrPh={usrPh}
        />
      );
    }else{
      return (
        <ApplyTeamContent
          usrId={usrId}
          usrNm={usrNm}
          teamMinCnt={teamMinCnt}
          teamMaxCnt={teamMaxCnt}
        />
      );
    }
  };

  return (
    <View
      style={{
        marginBottom:8, height:'90%'
      }}
    >
    {contentChg()}
    </View>
  );  
}

export default ApplyContent;
