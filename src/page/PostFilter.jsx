import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import Util from '../util/Util';
import AreaModal from '../modal/areaModal/AreaModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const PostFilter = () => {

  const navigation = useNavigation();

  const[postArea1, setPostArea1] = useState('');                    // 대분류 지역
  const[postArea2, setPostArea2] = useState('');                    // 소분류 지역
  const[postAreaNm1, setPostAreaNm1] = useState('');                // 대분류 선택지역명
  const[postAreaNm2, setPostAreaNm2] = useState('');                // 소분류 선택지역명
  const[areaModalVisible, setAreaModalVisible] = useState(false);   // 모달활성화
  const[endDt, setEndDt] = useState('');                            // 마감날짜
  const[onlyMate, setOnlyMate] = useState('');                      // 친구게시글만 보기 or 전체
  const[perYn, setPerYn] = useState('');                            // 개인여부
  const[teamYn, setTeamYn] = useState('');                          // 팀여부
  const[teamMinCnt, setTeamMinCnt] = useState('');                  // 팀구성최소인원
  const[teamMaxCnt, setTeamMaxCnt] = useState('');                  // 팀구성최대인원
  
  useFocusEffect(  
    useCallback(() => {
      getPostFilter();
    }, []),
  );

  // 내 검색조건 가져오기
  const getPostFilter = async () => {

    const postFilter = await Util.getPostFilter();

    setPostArea1(postFilter.postArea1);
    setPostArea2(postFilter.postArea2);
    setPostAreaNm1(postFilter.postAreaNm1);
    setPostAreaNm2(postFilter.postAreaNm2);
    setPerYn(postFilter.perYn);
    setTeamYn(postFilter.teamYn);
    setTeamMinCnt(postFilter.teamMinCnt);
    setTeamMaxCnt(postFilter.teamMaxCnt);
    setEndDt(postFilter.endDt);
    setOnlyMate(postFilter.onlyMate);    
  };

  // 개인클릭
  const clickRegistType = (per, team, type) => {

    if(type == 'per') {
      setTeamMinCnt('');
      setTeamMaxCnt('');
    }

    setPerYn(per);
    setTeamYn(team);
  };

  const registType = () => {
    let result = '';

    if(perYn == 'Y' && teamYn == 'Y') result = '전체';
    if(perYn == 'N' && teamYn == 'Y') result = '팀';
    if(perYn == 'Y' && teamYn == 'N') result = '개인';

    return result;
  };

  const savePostFilter = async () => {
    const postFilter = {
      'onlyMate':onlyMate,
      'postArea1':postArea1,
      'postArea2':postArea2,
      'postAreaNm1':postAreaNm1,
      'postAreaNm2':postAreaNm2,
      'perYn':perYn,
      'teamYn':teamYn,
      'teamMinCnt':teamMinCnt,
      'teamMaxCnt':teamMaxCnt,
      'endDt':endDt,
    };
    
    await AsyncStorage.setItem('postFilter', JSON.stringify(postFilter));
    navigation.navigate('메인');
  };

  return (
    <>
      <View>
        <View style={{marginVertical:10}}>
          <Text>위치</Text>
          <Text>시 : {postAreaNm1}</Text>
          <Text>동 : {postAreaNm2}</Text>
          <TouchableOpacity
            style={{borderColor:'red', borderWidth:1}}
            onPress={() => setAreaModalVisible(state => !state)}
          >
            <Text>위치고르기</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical:10}}>
          <Text>마감날짜</Text>
          <Text>선택 : {endDt == '' ? '상관없음' : endDt}</Text>
          <TouchableOpacity style={{borderColor:'red', borderWidth:1}} onPress={() => setEndDt('20230501')}><Text>마감날짜 20230501</Text></TouchableOpacity>
          <TouchableOpacity style={{borderColor:'red', borderWidth:1}} onPress={() => setEndDt('20230601')}><Text>마감날짜 20230601</Text></TouchableOpacity>
          <TouchableOpacity style={{borderColor:'red', borderWidth:1}} onPress={() => setEndDt('20230701')}><Text>마감날짜 20230701</Text></TouchableOpacity>
          <TouchableOpacity style={{borderColor:'red', borderWidth:1}} onPress={() => setEndDt('')}><Text>상관없음</Text></TouchableOpacity>
        </View>
        <View style={{marginVertical:10}}>
          <Text>게시글보여지는방식</Text>
          <Text>선택 : {onlyMate == 'N' ? '전체' : '친구'}</Text>
          <TouchableOpacity style={{borderColor:'red', borderWidth:1}} onPress={() => setOnlyMate('Y')}><Text>친구만</Text></TouchableOpacity>
          <TouchableOpacity style={{borderColor:'red', borderWidth:1}} onPress={() => setOnlyMate('N')}><Text>전체</Text></TouchableOpacity>
        </View>
        <View style={{marginVertical:10, height:120, justifyContent:'space-between'}}>
          <Text>신청방식 : {registType()}</Text>
          <TouchableOpacity
            style={registType() == '개인' ? {borderColor:'blue', borderWidth:1} : {borderColor:'red', borderWidth:1}}
            onPress={() => clickRegistType('Y','N','per')}
          >
            <Text>개인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={registType() == '팀' ? {borderColor:'blue', borderWidth:1} : {borderColor:'red', borderWidth:1}}
            onPress={() => clickRegistType('N','Y','team')}
          >
            <Text>팀</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={registType() == '전체' ? {borderColor:'blue', borderWidth:1} : {borderColor:'red', borderWidth:1}}
            onPress={() => clickRegistType('Y','Y','all')}
          >
            <Text>전체</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical:10}}>
          {registType() != '개인' ? (
            <>
              <Text>팀구성인원</Text>
              <Text>최소인원 : {teamMinCnt == '' ? '상관없음' :teamMinCnt }</Text>
              <Text>최대인원 : {teamMaxCnt == '' ? '상관없음' :teamMaxCnt}</Text>
              <TextInput
                placeholder='팀 최소구성인원수 !!숫자만, 최대보다 작게!!'
                value={teamMinCnt}
                onChangeText={(txt) => setTeamMinCnt(txt)}
                style={{width:300, height:40, borderColor:'red', borderWidth:1}}
                keyboardType='numeric'
              />
              <TextInput
                placeholder='팀 최대구성인원수 !!숫자만, 최소보다 크게!!'
                value={teamMaxCnt}
                onChangeText={(txt) => setTeamMaxCnt(txt)}
                style={{width:300, height:40, borderColor:'red', borderWidth:1}}
                keyboardType='numeric'
              />
            </>
          ):null}          
        </View>
        <View style={{marginVertical:10}}>
          <TouchableOpacity
            style={{borderColor:'blue', borderWidth:1}}
            onPress={() => savePostFilter()}
          >
            <Text>저장</Text>
          </TouchableOpacity>
        </View>
      </View>      
      <AreaModal
        visible={areaModalVisible}
        onRequestClose={setAreaModalVisible}
        setArea1={setPostArea1}
        setArea2={setPostArea2}
        setAreaNm1={setPostAreaNm1}
        setAreaNm2={setPostAreaNm2}
      />
    </>
  );  
};

export default PostFilter;