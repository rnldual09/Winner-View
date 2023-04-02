import React, { useEffect, useState } from 'react';
import { Alert } from "react-native";
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../../style/commonStyles';
import applyStyles from '../../style/applyStyles';

const ApplyGubun = (props) => {
  
  const { person, team, setPerson, setTeam, perYn, teamYn } = props;
  
  const personStyle = () => {
    if(perYn == 'N'){
      return applyStyles().applyGubunDisabled;
    }else if(person){
      return applyStyles().applyGubunCheck;
    }else{
      return applyStyles().applyGubunUnCheck;
    }
  }

  const teamStyle = () => {
    if(teamYn == 'N'){
      return applyStyles().applyGubunDisabled;
    }else if(team){
      return applyStyles().applyGubunCheck;
    }else{
      return applyStyles().applyGubunUnCheck;
    }
  }

  // 개인 클릭
  const checkPerson = () => {
    if(perYn == 'N'){
      Alert.alert("개인 신청을 할 수 없는 게시물입니다.");
      return;
    }
    setPerson(true);
    setTeam(false);
  };

  // 팀 클릭
  const checkTeam = () => {
    if(teamYn == 'N'){
      Alert.alert("팀 신청을 할 수 없는 게시물입니다.");
      return;
    }
    setPerson(false);
    setTeam(true);
  };

  return (
  
    <View style={applyStyles().applyGubunContainer}>
      <TouchableOpacity
        style={personStyle()}
        onPress={() => checkPerson()}
      >
        <Text style={person || perYn == 'N' ? commonStyles(1.5).Font_fff : commonStyles(1.5).Font_1a8cff}>개인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={teamStyle()}
        onPress={() => checkTeam()}
      >
        <Text style={team || teamYn == 'N' ? commonStyles(1.5).Font_fff : commonStyles(1.5).Font_1a8cff}>팀</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default ApplyGubun;
