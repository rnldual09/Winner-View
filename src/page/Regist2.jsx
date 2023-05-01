import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import AreaModal from '../modal/areaModal/AreaModal';

const Regist2 = ({route}) => {

  const[postTit, setPostTit] = useState('');
  const[postCont, setPostCont] = useState('');
  const[postArea1, setPostArea1] = useState('');      // 대분류 선택지역
  const[postArea2, setPostArea2] = useState('');      // 소분류 선택지역
  const[postAreaNm1, setPostAreaNm1] = useState('');  // 대분류 선택지역명
  const[postAreaNm2, setPostAreaNm2] = useState('');  // 소분류 선택지역명
  const[endDt, setEndDt] = useState('');
  const[perYn, setPerYn] = useState('');
  const[teamYn, setTeamYn] = useState('');
  const[teamMinCnt, setTeamMinCnt] = useState('');
  const[teamMaxCnt, setTeamMaxCnt] = useState('');
  const[areaModalVisible, setAreaModalVisible] = useState(false);  // 모달활성화
  const[isUpdate, setIsUpdate] = useState(false);

  useEffect(() => { 
    init();
  },[]);

  const init = async () => {
    
    /*
     * 게시글작성 접근이
     * 내 게시글 수정이 아닌 게시글 작성으로 접근하였을경우
     * 매개변수 postMstData 를 읽을 수 없어 에러 발생하여 try catch 처리
     * 내 게시글 수정으로 접근하였을 경우에는 해당 값들을 초기 값으로 입력함
     */
    try {
      const postMstData = route.params.postMstData;
      const postInfo = postMstData.postInfo;
      
      setPostTit(postInfo.postTit);
      setPostCont(postInfo.postCont);
      setPostArea1(postInfo.postArea1);
      setPostArea2(postInfo.postArea2);      
      setEndDt(postInfo.endDt);
      setPerYn(postInfo.perYn);
      setTeamYn(postInfo.teamYn);
      setTeamMinCnt((postInfo.teamMinCnt).toString());
      setTeamMaxCnt((postInfo.teamMaxCnt).toString());
      setPostAreaNm1('dd');
      setPostAreaNm2('gg');  

      setIsUpdate(true);
    } catch (e) {
      return;
    }
  };

  const navigation = useNavigation();
  const goNextRegist = () => { 

    const hashTag = filterHashTag();  // 해시태그 추출

    const naviData = {
      // Regist1에서 담은 내용
      'openYn':route.params.openYn,
      'svrFile':route.params.svrFile,
      'oriFile':route.params.oriFile,
      // Regist2에서 담은 내용
      'postTit':postTit,
      'postCont':postCont,
      'postArea1':postArea1,
      'postArea2':postArea2,
      'hashTag':hashTag,
      'endDt':endDt,
      'perYn':perYn,
      'teamYn':teamYn,
      'teamMinCnt':teamMinCnt,
      'teamMaxCnt':teamMaxCnt,      
    };

    if(isUpdate) naviData.postMstData = route.params.postMstData;

    navigation.navigate('게시글작성3', naviData);
  };

  // 해시태그 추출
  const filterHashTag = () => {

    const hashArr = postCont.split('#');
    let result = '';

    // 게시글 내용 중 #이 하나라도 있다면 해시태그 추출
    if(hashArr.length != 1) {
      for(let i=1; i<hashArr.length; i++) {
        
        const hash = hashArr[i].trim();
        if(hash == '') continue;        // #만 입력했다면 해시태그에 담지않는다
        
        // 해시태그 구분기준은 첫 공백까지
        if(hash.indexOf(' ') != -1) result = result + hash.substring(0, hash.indexOf(' ')) + ',';
        else result = result + hash + ',';       
      }
    }  
    
    return result;
  };

  return (        
    <View>      
      <Text>공개여부 넘어온거 : {route.params.openYn}</Text>
      <Text>파일 넘어온거 : {route.params.svrFile}</Text>
      <Text>파일 넘어온거 : {route.params.oriFile}</Text>
      <TextInput
        placeholder='제목'
        value={postTit}
        onChangeText={(txt) => setPostTit(txt)}
        style={styles().txtinp}
      />
      <TextInput
        placeholder='내용'
        value={postCont}
        onChangeText={(txt) => setPostCont(txt)}
        style={styles().txtinp2}
      />
      <TouchableOpacity style={styles().btn} onPress={() => setAreaModalVisible(true)}><Text>지역선택 모달활성화</Text></TouchableOpacity>
      <Text>선택한 대분류 지역코드 {postArea1}</Text>
      <Text>선택한 소분류 지역코드 {postArea2}</Text>
      <Text>선택한 대분류 지역이름{postAreaNm1}</Text>      
      <Text>선택한 소분류 지역이름{postAreaNm2}</Text>      
      <Text style={{marginTop:15}}>마감날짜선택</Text>
      <Text>선택한 마감날짜 : {endDt}</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{borderColor:'red', borderWidth:1}} onPress={() => setEndDt('20230501')}><Text>마감날짜 20230501</Text></TouchableOpacity>
        <TouchableOpacity style={{borderColor:'red', borderWidth:1}} onPress={() => setEndDt('20230601')}><Text>마감날짜 20230601</Text></TouchableOpacity>
        <TouchableOpacity style={{borderColor:'red', borderWidth:1}} onPress={() => setEndDt('20230701')}><Text>마감날짜 20230701</Text></TouchableOpacity>
      </View>
      <Text style={{marginTop:15}}>신청타입 개인여부 : {perYn} 팀여부 : {teamYn}</Text>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{borderColor:'red', borderWidth:1, marginHorizontal:10}} onPress={() => {setPerYn('N'); setTeamYn('Y'); setTeamMaxCnt(0); setTeamMinCnt(0);}}><Text>팀</Text></TouchableOpacity>
        <TouchableOpacity style={{borderColor:'red', borderWidth:1, marginHorizontal:10}} onPress={() => {setPerYn('Y'); setTeamYn('N');}}><Text>개인</Text></TouchableOpacity>
        <TouchableOpacity style={{borderColor:'red', borderWidth:1, marginHorizontal:10}} onPress={() => {setPerYn('Y'); setTeamYn('Y');}}><Text>전체</Text></TouchableOpacity>
      </View>
      <View style={{marginTop:15}}s>
        {teamYn == 'Y' && perYn == 'N' ? (
          <>
            <Text>팀선택</Text>
            <TextInput
              placeholder='팀 구성인원수 !!테스트시 숫자만 입력할 것!!'
              value={teamMaxCnt}
              onChangeText={(txt) => {setTeamMinCnt(txt); setTeamMaxCnt(txt);}}
              style={{width:300, height:40, borderColor:'red', borderWidth:1}}
              keyboardType='numeric'
            />
          </>
        ):null}
        {teamYn == 'Y' && perYn == 'Y' ? (
          <>
            <Text>전체선택</Text>
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
        <Text>최소인원 : {teamMinCnt}</Text>
        <Text>최대인원 : {teamMaxCnt}</Text>
        <TouchableOpacity onPress={() => goNextRegist()}><Text>다음</Text></TouchableOpacity>
      </View>
      <AreaModal
        visible={areaModalVisible}
        onRequestClose={setAreaModalVisible}
        setArea1={setPostArea1}
        setArea2={setPostArea2}
        setAreaNm1={setPostAreaNm1}
        setAreaNm2={setPostAreaNm2}
      />
    </View>
  );  
}

const styles = () => StyleSheet.create({

  row:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:15
  },  
  btn:{
    alignItems:'center',
    justifyContent:'center',
    borderColor:'red',
    borderWidth:1,
    marginHorizontal:5,
    width:150,
    height:30
  },
  txtinp:{
    borderColor:'red',
    borderWidth:1,
    width:400,
    height:40,
    marginVertical:10
  },
  txtinp2:{
    borderColor:'red',
    borderWidth:1,
    width:400,
    height:100,
    marginVertical:10
  }

});

export default Regist2;