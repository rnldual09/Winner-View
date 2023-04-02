import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../style/commonStyles';
import Util from '../util/Util';
import ApplyGubun from '../component/apply/ApplyGubun';
import ApplyContent from '../component/apply/ApplyContent';

const Apply = ({ route }) => {

  useEffect(() => {
    getPostInfo();
  }, [])

  const postSeq = route.params.postSeq;

  const [person, setPerson] = useState(false); //개인 클릭 여부
  const [team, setTeam] = useState(false); //팀 클릭 여부
  const [perYn, setPerYn] = useState('N');   // 개인여부
  const [teamYn, setTeamYn] = useState('N');  // 팀여부
  const [teamMinCnt, setTeamMinCnt] = useState('');  // 팀 최소인원
  const [teamMaxCnt, setTeamMaxCnt] = useState('');  // 팀 최대인원

  const getPostInfo = async () => {
    const url = '/post/getPostInfo.do';
    const data = {'postSeq':postSeq};
    console.log('22222');
    const postInfo = await Util.fetchWithNotToken(url, data);
    setPerYn(postInfo.perYn);
    setTeamYn(postInfo.teamYn);
    setTeamMinCnt(postInfo.teamMinCnt);
    setTeamMaxCnt(postInfo.teamMaxCnt);

    if((postInfo.perYn == 'Y' && postInfo.teamYn == 'Y') || postInfo.teamYn == 'N'){
      setPerson(true);
      setTeam(false);
    }else{
      setPerson(false);
      setTeam(true);
    }
  }
  
  return (
    <View style={commonStyles().CommonContainer}>
      <View style={commonStyles().CommonSubContainer}>
        <View style={commonStyles(0.04).onlyMargin}>
            <ApplyGubun
              person={person}
              team={team}
              perYn={perYn}
              teamYn={teamYn}
              setPerson={setPerson}
              setTeam={setTeam}
            />
            <ApplyContent 
              person={person}
              team={team}
              teamMinCnt={teamMinCnt}
              teamMaxCnt={teamMaxCnt}
            />  
        </View>
      </View>
    </View>
  );  
}

export default Apply;
