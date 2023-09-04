import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../style/commonStyles';
import Util from '../util/Util';
import ApplyGubun from '../component/apply/ApplyGubun';
import ApplyContent from '../component/apply/ApplyContent';
import { useNavigation } from '@react-navigation/native';

const Apply = ({ route }) => {

  useEffect(() => {
    getPostInfo();
  }, [])

  const navigation = useNavigation();
  const postSeq = route.params.postSeq;

  const [person, setPerson] = useState(true); //개인 클릭 여부
  const [team, setTeam] = useState(false); //팀 클릭 여부
  const [perYn, setPerYn] = useState('Y');   // 개인여부
  const [teamYn, setTeamYn] = useState('N');  // 팀여부
  const [teamMinCnt, setTeamMinCnt] = useState(0);  // 팀 최소인원
  const [teamMaxCnt, setTeamMaxCnt] = useState(0);  // 팀 최대인원
  const [grdList, setGrdList] = useState([{}]);  // 등급 리스트
  const [grdCombo, setGrdCombo] = useState([]);

  const getPostInfo = async () => {
    const usrInfo = await Util.getUsrInfo();
    const url1 = '/app/postAppExist.do';
    const data1 = {
      'postSeq':postSeq,
      'usrId':usrInfo.usrId
    };
    
    const existCnt = await Util.fetchWithNotToken(url1, data1);
    if(existCnt != 0){
      alert('이미 신청한 게시글입니다.');
      navigation.navigate('메인');
    }

    const url2 = '/post/getPostInfo.do';
    const data2 = {'postSeq':postSeq};
    const post = await Util.fetchWithNotToken(url2, data2);
    setPerYn(post.postInfo.perYn);
    setTeamYn(post.postInfo.teamYn);
    setTeamMinCnt(post.postInfo.teamMinCnt);
    setTeamMaxCnt(post.postInfo.teamMaxCnt);
    setGrdList(post.grdList);

    post.grdList.forEach((item, index) => {
      grdCombo.push({key : item.grdSeq, value : item.grdNm});
    });
    setGrdCombo(grdCombo);

    if(post.postInfo.perYn == 'N'){
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
              postSeq={postSeq}
              person={person}
              team={team}
              teamMinCnt={teamMinCnt}
              teamMaxCnt={teamMaxCnt}
              grdList={grdList}
              grdCombo={grdCombo}
            />  
        </View>
      </View>
    </View>
  );  
}

export default Apply;
