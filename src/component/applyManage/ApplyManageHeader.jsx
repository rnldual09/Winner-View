import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import applyManageStyles from '../../style/applyManageStyles';

const ApplyManageHeader = (props) => {
  
  const { postList, manageType, setManageType } = props;
  
  const returnEndNm = () => {
    if(postList.endYn == 'Y') {
      return '모집마감';
    } else {
      return '모집중';
    }  
  };

  return (
    <View style={applyManageStyles().managerHeaderContainer}>
      <View style={applyManageStyles().endYnContainer}>
        <Text style={applyManageStyles().endYnText}>마감일자 : {postList.endDt}</Text>
        <Text style={applyManageStyles().endYnText}>( {returnEndNm()} )</Text>
      </View>
      <View style={applyManageStyles().manageTypeContainer}>
        <TouchableOpacity
          style={manageType == 'team' ? applyManageStyles().selectedManageType : applyManageStyles().selectManageType}
          onPress={() => setManageType('team')}
        >
          <Text style={applyManageStyles().managerTypeText}>인원관리</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={manageType == 'tournament' ? applyManageStyles().selectedManageType : applyManageStyles().selectManageType}
          onPress={() => setManageType('tournament')}
        >
          <Text style={applyManageStyles().managerTypeText}>토너먼트관리</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default ApplyManageHeader;
