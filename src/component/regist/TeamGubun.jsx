import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import registStyles from '../../style/registStyles';
import TeamGubunBtn from './TeamGubunBtn';
import TeamMinMaxCnt from './TeamMinMaxCnt';

const TeamGubun = (props) => {
  
  const { teamMaxCnt, setTeamMaxCnt, teamMinCnt, setTeamMinCnt } = props;

  const [all, setAll] = useState(true);
  const [per, setPer] = useState(false);
  const [team, setTeam] = useState(false);

  const clickTeam = (type) => {
    if(type == 'all')  { setAll(true);  setPer(false); setTeam(false); }
    if(type == 'per')  { setAll(false); setPer(true);  setTeam(false); }
    if(type == 'team') { setAll(false); setPer(false); setTeam(true); }
  };

  return (
    <View>
      <View style={registStyles().registGubunContainer}>
        <TeamGubunBtn clickTeam={clickTeam} type={'all'}  clickYn={all}/>
        <TeamGubunBtn clickTeam={clickTeam} type={'team'} clickYn={team}/>      
        <TeamGubunBtn clickTeam={clickTeam} type={'per'}  clickYn={per}/>        
      </View>     
      <TeamMinMaxCnt 
        getter={teamMinCnt}
        setter={setTeamMinCnt}
        type='min'
      />
      <TeamMinMaxCnt 
        getter={teamMaxCnt}
        setter={setTeamMaxCnt}     
        type='max'  
      />      
    </View> 
  );  
}

export default TeamGubun;