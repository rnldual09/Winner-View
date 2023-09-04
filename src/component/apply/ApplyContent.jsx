import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Util, { phonePattern, birthDtPattern } from '../../util/Util';
import ApplyPerContent from './ApplyPerContent';
import ApplyTeamContent from './ApplyTeamContent';

const ApplyContent = (props) => {

  const { postSeq, person, team, teamMinCnt, teamMaxCnt, grdList, grdCombo } = props;
  const [perGrdSelected, setPerGrdSelected] = useState(""); //개인 등급 선택한 값
  const[possibleCnt, setPossibleCnt] = useState(teamMaxCnt-1);  // 가능한 팀맴버 수
  const[teamNm, setTeamNm] = useState("");  // 팀명
  

  useEffect(() => {
    setInit();
  }, []);


  useEffect(() => {
    contentChg();
  }, [person,team]);

  const [usrId, setUsrId] = useState(''); //회원ID
  const [usrNm, setUsrNm] = useState(''); //회원명
  const [birthDt, setBirthDt] = useState(''); //생년월일
  const [usrSex, setUsrSex] = useState(''); //성별
  const [usrPh, setUsrPh] = useState(''); //전화번호
  const [teamMembers, setTeamMembers] = useState([{}]); //팀에서 선택 한 회원들

  const setInit = async () => {
    const usrInfo = await Util.getUsrInfo();
    
    setUsrId(usrInfo.usrId);
    setUsrNm(usrInfo.usrNm);
    setBirthDt(usrInfo.birthDt.replace(birthDtPattern, '$1-$2-$3'));
    setUsrSex(usrInfo.usrSex==1?'남':'여');
    setUsrPh(usrInfo.usrPh.replace(phonePattern, '$1-$2-$3'));
    setTeamMembers([{memId:usrInfo.usrId, memNm:usrInfo.usrNm, memGrd:''}])
  };

  const contentChg = () => {
    if(person){
      return (
        <ApplyPerContent
        postSeq={postSeq}
          usrId={usrId}
          usrNm={usrNm}
          birthDt={birthDt}
          usrSex={usrSex}
          usrPh={usrPh}
          perGrdSelected={perGrdSelected}
          setPerGrdSelected={setPerGrdSelected}
          grdCombo={grdCombo}
        />
      );
    }else{
      return (
        <ApplyTeamContent
          postSeq={postSeq}
          usrId={usrId}
          usrNm={usrNm}
          teamMinCnt={teamMinCnt}
          teamMaxCnt={teamMaxCnt}
          possibleCnt={possibleCnt}
          setPossibleCnt={setPossibleCnt}
          grdList={grdList}
          grdCombo={grdCombo}
          teamMembers={teamMembers}
          setTeamMembers={setTeamMembers}
          teamNm={teamNm}
          setTeamNm={setTeamNm}
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
