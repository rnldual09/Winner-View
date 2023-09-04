import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import registStyles from '../style/registStyles';
import NextRegist from '../component/regist/NextRegist';
import ChooseGrade from '../component/regist/ChooseGrade';
import GradeList from '../component/regist/GradeList';
import Util from '../util/Util';

const Regist3 = ({route}) => {

  const navigation = useNavigation();
  const[grdArr, setGrdArr] = useState([]);
  
  const goNextStep = async () => { 

    if(grdArr.length == 0) {
      alert('등급 또는 포지션을 입력해주세요');
      return;
    }

    const usrInfo =  await Util.getUsrInfo();
    const url = '/post/insPostMst.do';
    const data = {
      'usrId':usrInfo.usrId,
      'openYn':route.params.openYn,
      'fileData':route.params.fileData,
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
      'grdArr':grdArr,
    };

    const response = await Util.fetchWithNotToken(url, data);    
    
    if(response.result) {
      navigation.navigate('메인'); 
    } else {
      alert('게시글 등록 오류');
    }    
  };

  return (    
    <View style={registStyles().registContainer}>
      <View style={{height:'93%'}}>
        <ChooseGrade
          grdArr={grdArr}
          setGrdArr={setGrdArr}
        />     
        <GradeList
          grdArr={grdArr}
          setGrdArr={setGrdArr}
        />
      </View>
      <NextRegist
        title='게시글 등록'
        goNextStep={goNextStep}
      />
    </View>
  );  
}

export default Regist3;