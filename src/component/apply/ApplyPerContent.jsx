import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import Util from '../../util/Util';
import commonStyles from '../../style/commonStyles';
import applyStyles from '../../style/applyStyles';
import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';

const ApplyPerContent = (props) => {
  const navigation = useNavigation();
  const { postSeq, usrId, usrNm, birthDt, usrSex, usrPh, perGrdSelected, setPerGrdSelected, grdCombo } = props;

  /** 신청하기 버튼 클릭 */
  const applyBtnClick = async () => {
    if(!perGrdSelected){
      alert('등급(포지션)을 선택해주세요.');
      return;
    }
    const url = '/app/insPerApp.do';
    const data = {
      'postSeq':postSeq,
      'usrId':usrId,
      'grdSeq':perGrdSelected,
    };

    const result = await Util.fetchWithNotToken(url, data);
    if(result == 1){
      alert('신청이 완료되었습니다.');
      navigation.navigate('메인');
    }else{
      alert('신청에 실패하였습니다.');
    }
  };

  /** 등급 select 박스 설정 */
  const selectView = () => {
    let value = '';
    grdCombo.forEach((item, index) => {
      if(item.key == perGrdSelected) {
        value = item.value;
      };
    });
    
    if(!value){
      return (
        <SelectList 
        setSelected={(val) => setPerGrdSelected(val)} 
        data={grdCombo}
        save="key"
        />
        );
    }else{
      return (
        <SelectList 
        setSelected={(val) => setPerGrdSelected(val)} 
        data={grdCombo}
        save="key"
        defaultOption={{key:perGrdSelected, value:value}}
        />
        );
    }
  }

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
        <Text>등급(포지션)</Text>
        {selectView()}

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
