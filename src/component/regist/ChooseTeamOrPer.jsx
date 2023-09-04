import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import registStyles from '../../style/registStyles';
import ChooseTeamCnt from './ChooseTeamCnt';

const ChooseTeamOrPer = (props) => {

  const { perYn, setPerYn, teamYn, setTeamYn, teamMinCnt, setTeamMinCnt, teamMaxCnt, setTeamMaxCnt } = props;
  const[type, setType] = useState('');

  useEffect(() => {

    if(perYn == 'Y' && teamYn == 'Y') {
      setType('all');
    } else if(perYn == 'Y' && teamYn == 'N') {
      setType('per');
    } else {
      setType('team')
    }
    setTeamMinCnt(0);
    setTeamMaxCnt(0);
  },[teamYn, perYn]);

  const plusPerCnt = () => {
    setTeamMinCnt((cnt) => cnt + 1);
    setTeamMaxCnt((cnt) => cnt + 1);
  };

  const plusTeamMinCnt = () => {
    setTeamMinCnt((cnt) => cnt + 1);
  };

  const plusTeamMaxCnt = () => {
    setTeamMaxCnt((cnt) => cnt + 1);
  };

  const minusPerCnt = () => {
    setTeamMinCnt((cnt) => cnt - 1);
    setTeamMaxCnt((cnt) => cnt - 1);
  };

  const minusTeamMinCnt = () => {
    if(teamMinCnt == 0) return;
    setTeamMinCnt((cnt) => cnt - 1);
  };

  const minusTeamMaxCnt = () => {
    if(teamMaxCnt == 0) return;
    setTeamMaxCnt((cnt) => cnt - 1);
  };

  return (    
    <View style={registStyles().teamOrPerContainer}>
      <Text style={registStyles().teamOrPerText}>팀/개인 선택</Text>
      <View style={registStyles().teamOrPerSubContainer}>
        <TouchableOpacity
          style={type == 'all' ? registStyles().teamOrPerSelectedBtn : registStyles().teamOrPerNotSelectBtn}
          onPress={() => {setPerYn('Y'); setTeamYn('Y');}}
        >
          <Text style={type == 'all' ? registStyles().teamOrPerSelectedText : registStyles().openYnNotSelectText}>전체</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={type == 'team' ? registStyles().teamOrPerSelectedBtn : registStyles().teamOrPerNotSelectBtn}
          onPress={() => {setPerYn('N'); setTeamYn('Y');}}
        >
          <Text style={type == 'team' ? registStyles().teamOrPerSelectedText : registStyles().openYnNotSelectText}>팀</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={type == 'per' ? registStyles().teamOrPerSelectedBtn : registStyles().teamOrPerNotSelectBtn}
          onPress={() => {setPerYn('Y'); setTeamYn('N');}}
        >
          <Text style={type == 'per' ? registStyles().teamOrPerSelectedText : registStyles().openYnNotSelectText}>개인</Text>
        </TouchableOpacity>        
      </View>
      {type == 'per' ? (
        <>          
          <ChooseTeamCnt
            text={'팀 인원수'}
            plusFunc={plusPerCnt}
            minusFunc={minusPerCnt}
            cnt={teamMinCnt}
          />
        </>
      ) : (
        <>
          <ChooseTeamCnt
            text={'팀 최소 인원수'}
            plusFunc={plusTeamMinCnt}
            minusFunc={minusTeamMinCnt}
            cnt={teamMinCnt}
          />
          <ChooseTeamCnt
            text={'팀 최대 인원수'}
            plusFunc={plusTeamMaxCnt}
            minusFunc={minusTeamMaxCnt}
            cnt={teamMaxCnt}
          />
        </>
      )}      
    </View>
  );  
}

export default ChooseTeamOrPer;