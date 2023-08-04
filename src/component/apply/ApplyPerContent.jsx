import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../../style/commonStyles';
import applyStyles from '../../style/applyStyles';

const ApplyPerContent = (props) => {

  const { usrId, usrNm, birthDt, usrSex, usrPh } = props;

  const applyBtnClick = async () => {
    /*
    const usrInfo =  await Util.getUsrInfo();
    const usrId = usrInfo.usrId;

    const url = '/post/insPostMst.do';
    const data = {
      'usrId':usrId,
      'openYn':route.params.openYn,
      'svrFile':route.params.svrFile,
      'oriFile':route.params.oriFile,
      'postTit':route.params.postTit,
      'postCont':route.params.postCont,
      'postArea1':route.params.postArea1,
      'postArea2':route.params.postArea2,
      'hashTag':route.params.hashTag,
      'endDt':route.params.endDt,
      'perYn':route.params.perYn,
      'teamYn':route.params.teamYn,
      'teamMinCnt':route.params.teamMinCnt,
      'teamMaxCnt':route.params.teamMaxCnt,
      'grdArr':route.params.grdArr,
    };

    if(isUpdate) data.postSeq = (route.params.postMstData.postInfo.postSeq).toString();

    await Util.fetchWithNotToken(url, data);
    
    const alertTitle = isUpdate ? '게시글 수정완료' : '게시글 등록완료';
    alert(alertTitle);
    
    navigation.navigate('메인');
    */
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
