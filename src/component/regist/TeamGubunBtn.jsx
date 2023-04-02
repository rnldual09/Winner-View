import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import commonStyles from '../../style/commonStyles';
import registStyles from '../../style/registStyles';

const TeamGubunBtn = (props) => {
  
  const { type, clickTeam, clickYn } = props;



  const typeNm = () => {
    if(type == 'all')  return <Text style={clickYn ? commonStyles(1.5).Font_fff : commonStyles(1.5).Font_000}>전체</Text>;
    if(type == 'team') return <Text style={clickYn ? commonStyles(1.5).Font_fff : commonStyles(1.5).Font_000}>팀</Text>;
    if(type == 'per')  return <Text style={clickYn ? commonStyles(1.5).Font_fff : commonStyles(1.5).Font_000}>개인</Text>;
  };

  return (  
    <TouchableOpacity
      style={clickYn ? registStyles().TeamCheck : registStyles().TeamUnCheck}
      onPress={() => clickTeam(type)}
    >
      {typeNm()}
    </TouchableOpacity>
  );  
}

export default TeamGubunBtn;