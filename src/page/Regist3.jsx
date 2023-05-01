import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import registStyles from '../style/registStyles';
import commonStyles from '../style/commonStyles';
import { useNavigation } from '@react-navigation/native';

const Regist3 = ({route}) => {
  
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
      const grdList = postMstData.grdList;

      setIsUpdate(true);
      setGrdArr(grdList);
    } catch (e) {
      return;
    }
  };

  // 등급 및 포지션 객채
  const[grdArr, setGrdArr] = useState([]);

  const[grdNm, setGrdNm] = useState('');
  const[grdCnt, setGrdCnt] = useState('');

  const navigation = useNavigation();
  const goNextRegist = () => { 

    const naviData = {
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
      'grdArr':grdArr,
      'postMstData':route.params.postMstData
    };

    if(isUpdate) naviData.postMstData = route.params.postMstData;
    navigation.navigate('게시글작성4', naviData);
  };

  const addGrade = () => {
    
    const data = {'grdNm':grdNm, 'grdCnt':grdCnt};

    const tempGrdArr = grdArr.slice();
    tempGrdArr.push(data);
    setGrdArr(tempGrdArr);
  };

  const removeGrade = (index) => {
    const tempGrdArr = grdArr.slice();
    tempGrdArr.splice(index, 1);
    setGrdArr(tempGrdArr);
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
      <View style={{marginTop:15, flexDirection:'row'}}>
        <TextInput
          placeholder='등급 또는 포지션명'
          value={grdNm}
          onChangeText={(txt) => setGrdNm(txt)}
          style={{width:250, height:40, borderColor:'red', borderWidth:1, marginRight:10}}
        />
        <TextInput
          placeholder='인원수'
          value={grdCnt}
          onChangeText={(txt) => setGrdCnt(txt)}
          style={{width:50, height:40, borderColor:'red', borderWidth:1, marginRight:10}}          
          keyboardType='numeric'
        />
        <TouchableOpacity
          onPress={() => addGrade()}
          style={{width:30, height:40, borderColor:'red', borderWidth:1}}
        >
          <Text>추가</Text>
        </TouchableOpacity>
      </View>
      {grdArr != [] ? (
        <>
          {grdArr.map((item, index) => (            
            <View
              key={index}
              style={{flexDirection:'row'}}
            >
              <Text>{index + 1}   </Text>
              <Text>{item.grdNm}    </Text>
              <Text>{item.grdCnt}명  </Text>
              <TouchableOpacity onPress={() => removeGrade(index)}><Text>x지우기x</Text></TouchableOpacity>
            </View>
          ))}   
        </>
      ) : null}      
      <TouchableOpacity onPress={() => goNextRegist()}><Text>다음</Text></TouchableOpacity>
    </View>
  );  
}

export default Regist3;