import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../../style/commonStyles';
import applyStyles from '../../style/applyStyles';

const ApplyPerContent = (props) => {

  const { usrId, usrNm, birthDt, usrSex, usrPh } = props;

  const applyBtnClick = () => {
    
  };

  return (
    <View
      style={{
        marginBottom:8, justifyContent:'space-between', height:'100%'
      }}
    >
      <View>
        <Text>ID: {usrId}</Text>
        <Text>성명: {usrNm}</Text>
        <Text>생년월일: {birthDt}</Text>
        <Text>성별: {usrSex}</Text>
        <Text>연락처: {usrPh}</Text>
      </View>

      <TouchableOpacity
        style={applyStyles().applyBtn}
        onPress={() => applyBtnClick()}
      >
        <Text style={commonStyles(1.5).Font_fff}>신청하기</Text>
      </TouchableOpacity>
      
      
    </View>
  );  
}

export default ApplyPerContent;
