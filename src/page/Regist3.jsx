import React, { useState } from 'react';
import { Text, View } from 'react-native';
import registStyles from '../style/registStyles';
import RegistStepImg from '../component/regist/RegistStepImg';
import NextRegist from '../component/regist/NextRegist';
import { useNavigation } from '@react-navigation/native';
import TeamGubun from '../component/regist/TeamGubun';

const Regist3 = () => {

  const[teamYn, setTeamYn] = useState(false); // 팀여부 * 전체는 팀, 개인 둘다 Y로 insert
  const[perYn, setPerYn] = useState(false);   // 개인여부 * 전체는 팀, 개인 둘다 Y로 insert
  const[teamMinCnt, setTeamMinCnt] = useState(0);
  const[teamMaxCnt, setTeamMaxCnt] = useState(0);

  
  const navigation = useNavigation();
  const goNextRegist = () => { navigation.navigate('게시글작성4'); };

  return (    
    <View style={registStyles().registContainer}>
      <View style={{width:'90%', height:'60%'}}>
        <RegistStepImg nowStep='3'/>        
        <TeamGubun
          teamMaxCnt={teamMaxCnt}
          setTeamMaxCnt={setTeamMaxCnt}
          teamMinCnt={teamMinCnt}
          setTeamMinCnt={setTeamMinCnt}
        />
      </View>  
      <NextRegist
        nowStep='3'
        goNextRegist={goNextRegist}
      />  
    </View>
  );  
}

export default Regist3;