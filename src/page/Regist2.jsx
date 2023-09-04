import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import registStyles from '../style/registStyles';
import ChoosePostTit from '../component/regist/ChoosePostTit';
import ChoosePostCont from '../component/regist/ChoosePostCont';
import ChoosePostArea from '../component/regist/ChoosePostArea';
import ChoosePostDate from '../component/regist/ChoosePostDate';
import ChooseTeamOrPer from '../component/regist/ChooseTeamOrPer';
import NextRegist from '../component/regist/NextRegist';

const Regist2 = ({route}) => {

  const navigation = useNavigation();
  const[postTit, setPostTit] = useState('');          // 게시글 제목
  const[postCont, setPostCont] = useState('');        // 게시글 내용
  const[postArea1, setPostArea1] = useState('');      // 대분류 선택지역
  const[postArea2, setPostArea2] = useState('');      // 소분류 선택지역
  const[postAreaNm1, setPostAreaNm1] = useState('');  // 대분류 선택지역명
  const[postAreaNm2, setPostAreaNm2] = useState('');  // 소분류 선택지역명
  const[endDt, setEndDt] = useState('');              // 마감날짜
  const[perYn, setPerYn] = useState('Y');             // 개인여부
  const[teamYn, setTeamYn] = useState('Y');           // 팀여부
  const[teamMinCnt, setTeamMinCnt] = useState(0);    // 팀최소인원
  const[teamMaxCnt, setTeamMaxCnt] = useState(0);    // 팀 최대인원
  
  const goNextStep = () => { 

    if(validation()) {
      
      const hashTag = filterHashTag();  // 해시태그 추출

      const naviData = {
        // Regist1에서 담은 내용
        'openYn':route.params.openYn,
        'fileData':route.params.fileData,
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
     navigation.navigate('게시글작성3', naviData);
    }    
  };

  const validation = () => {

    if(postTit == '') {
      alert('제목을 입력 해주세요');
      return false;
    }

    if(postCont == '') {
      alert('내용을 입력 해주세요');
      return false;
    }

    if(postArea1 == '') {
      alert('대분류 지역을 입력 해주세요');
      return false;
    }

    if(postArea2 == '') {
      alert('소분류 지역을 입력 해주세요');
      return false;
    }

    if(endDt == '') {
      alert('마감날짜를 입력 해주세요');
      return false;
    }

    if(perYn == 'Y' && teamYn == 'N') {
      if(teamMinCnt == 0) {
        alert('팀 인원수를 입력 해주세요');
        return false;
      }      
    } else {
      if(teamMinCnt > teamMaxCnt) {
        alert('팀 최소 인원수가 최대 인원수를 넘을 수 없습니다 다시 입력 해주세요');
        return false;
      }
      if(teamMaxCnt == 0) {
        alert('팀 최대 인원수를 입력 해주세요');
        return false;
      }
    }

    return true;
  };

  // 해시태그 추출
  const filterHashTag = () => {
    
    if(postCont.indexOf('#') == -1) {
      return '';
    } else {
      let hashTag = '';
      let tempPostContArr = postCont.split('#');      
      tempPostContArr = tempPostContArr.slice(1);

      for(let i=0; i<tempPostContArr.length; i++) {

        if(tempPostContArr[i].trim() == '') {
          continue;
        } else {          
          if(tempPostContArr[i].indexOf(' ') == -1) {
            hashTag = hashTag + tempPostContArr[i] + ' ';
          } else {
            const tempHashTag = tempPostContArr[i].substring(0, tempPostContArr[i].indexOf(' '));
            hashTag = hashTag + tempHashTag + ' ';
          }          
        }
      }      
      return hashTag.trim();
    }
  };

  return (        
    <View style={registStyles().registContainer}>
      <View style={{height:'93%'}}>
        <ChoosePostTit
          postTit={postTit}
          setPostTit={setPostTit}
        />
        <ChoosePostCont
          postCont={postCont}
          setPostCont={setPostCont}
        />     
        <ChoosePostArea
          setPostArea1={setPostArea1}
          setPostArea2={setPostArea2}        
          setPostAreaNm1={setPostAreaNm1}
          setPostAreaNm2={setPostAreaNm2}        
          postAreaNm1={postAreaNm1}
          postAreaNm2={postAreaNm2}
        />
        <ChoosePostDate
          endDt={endDt}
          setEndDt={setEndDt}        
        />
        <ChooseTeamOrPer
          perYn={perYn}
          setPerYn={setPerYn}
          teamYn={teamYn}          
          setTeamYn={setTeamYn}
          teamMinCnt={teamMinCnt}
          setTeamMinCnt={setTeamMinCnt}
          teamMaxCnt={teamMaxCnt}
          setTeamMaxCnt={setTeamMaxCnt}
        />
      </View>
      <NextRegist
        title='다음'
        goNextStep={goNextStep}
      />
    </View>
  );  
}

export default Regist2;