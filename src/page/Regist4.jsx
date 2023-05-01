import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import registStyles from '../style/registStyles';
import { useNavigation } from '@react-navigation/native';
import Util from '../util/Util';

const Regist4 = ({route}) => {

  const navigation = useNavigation();
  const[isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    
    /*
     * 게시글작성 접근이
     * 내 게시글 수정이 아닌 게시글 작성으로 접근하였을경우
     * 매개변수 postMstData 를 읽을 수 없어 에러 발생하여 try catch 처리
     * 내 게시글 수정으로 접근하였을 경우에는 해당 값들을 초기 값으로 입력함
     */
    try {
      const postMstData = route.params.postMstData;
    
      if(postMstData != undefined) {
        setIsUpdate(true);
      }
    } catch (e) {
      return;
    }  
  };

  const insertPostMst = async () => {

    const usrInfo =  await Util.getUsrInfo();
    const usrId = usrInfo.usrId;

    const url = isUpdate ? '/post/uptPostMst.do' : '/post/insPostMst.do';
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
  };

  return (    
    <View>
      <Text>1차에서 넘어온거</Text>
      <Text>공개 여부 :{route.params.openYn}</Text>
      <Text>파일명1 : {route.params.svrFile} </Text>
      <Text>파일명2 : {route.params.oriFile}</Text>
      <Text style={{marginTop:15}}>2차에서 넘어온거</Text>
      <Text>제목 : {route.params.postTit}</Text>
      <Text>내용 : {route.params.postCont}</Text>
      <Text>자역 대분류 코드명 : {route.params.postArea1}</Text>
      <Text>자역 소분류 코드명 : {route.params.postArea2}</Text>
      <Text>해시태그 : {route.params.hashTag}</Text>
      <Text>마감날찌 : {route.params.endDt}</Text>
      <Text>개인여부 : {route.params.perYn}</Text>
      <Text>팀여부 : {route.params.teamYn}</Text>
      <Text>팀 최소인원 : {route.params.teamMinCnt}</Text>
      <Text>팀 최대인원 : {route.params.teamMaxCnt}</Text>
      <TouchableOpacity
        onPress={() => insertPostMst()}
        style={{marginTop:15, borderColor:'red',borderWidth:1, width:100, height:50}}
      >
        <Text>{isUpdate ? '게시글 수정하기' : '게시글 등록하기'}</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default Regist4;