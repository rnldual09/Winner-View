import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import AreaModal from '../modal/areaModal/AreaModal';
import { useNavigation } from '@react-navigation/native';
import Util from '../util/Util';

const SignUp1 = () => {

  const[usrId, setUsrId] = useState('');            // 유저아이디
  const[chkDupId, setChkDupId] = useState(false);   // 아이디 중복체크여부
  const[msg1, setMsg1] = useState('');

  const[usrPw, setUsrPw] = useState('');            // 비밀번호 
  const[mailId, setMailId] = useState('');          // 메일아이디
  const[mailDomain, setMailDomain] = useState('');  // 메일도메인
  const[usrArea1, setUsrArea1] = useState('');      // 대분류 선택지역
  const[usrArea2, setUsrArea2] = useState('');      // 소분류 선택지역
  const[usrAreaNm1, setUsrAreaNm1] = useState('');  // 대분류 선택지역명
  const[usrAreaNm2, setUsrAreaNm2] = useState('');  // 소분류 선택지역명
  const[areaModalVisible, setAreaModalVisible] = useState(false);  // 모달활성화
  const[profile, setProfile] = useState('');        // 프로필 사진
  const[usrNm, setUsrNm] = useState('');
  const[usrPh, setUsrPh] = useState('');
  const[birthDt, setBirthDt] = useState('');
  const[usrSex, setUsrSex] = useState('');
  
  // 아이디 변경시 아이디 중복검사여부 false
  useEffect(() => { 
    setChkDupId(false);
    setMsg1('');
  },[usrId]);

  // 아이디 중복검사
  const checkDupliId = async () => {
    
    if(usrId == '') {
      alert('아이디를 입력 해주세요');
      return;
    }

    const url = '/checkDupId.do';
    const data = {'usrId':usrId};
    const response = await Util.fetchWithNotToken(url, data);
    
    if(response.result == 'available') {
      setChkDupId(true);
      setMsg1('사용가능한 아이디입니다');
    } else {
      setChkDupId(false);
      setMsg1('가입된 아이디입니다');
    }
  };

  const navigation = useNavigation();

  const goNextSignUp = () => { 

    if(!chkDupId) {
      alert('아이디 중복검사를 해주세요');
      return;
    }

    navigation.navigate('회원가입2', {
      'usrId':usrId,
      'usrPw':usrPw,
      'mailId':mailId,
      'mailDomain':mailDomain,
      'usrArea1':usrArea1,
      'usrArea2':usrArea2,
      'profile':profile,
      'usrNm':usrNm,
      'usrPh':usrPh,
      'birthDt':birthDt,
      'usrSex':usrSex
    }); 
  };

  return (
    <View>
      <View style={{flexDirection:'row',}}>
        <Text>아이디입력</Text>
        <TextInput
          value={usrId}
          onChangeText={(txt) => setUsrId(txt)}
          style={{borderColor:'red', borderWidth:1, width:200}}
          placeholder='아이디 입력'
        />
        <TouchableOpacity
          onPress={() => checkDupliId()}
          style={{borderColor:'blue', borderWidth:1}}
        >
          <Text>아이디 중복확인</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginVertical:10}}>
        <Text style={{color:chkDupId ? 'blue' : 'red'}}>{msg1}</Text>
      </View>
      <View style={{flexDirection:'row',}}>
        <Text>비밀번호입력</Text>
        <TextInput
          value={usrPw}
          onChangeText={(txt) => setUsrPw(txt)}
          style={{borderColor:'red', borderWidth:1, width:200}}
          placeholder='비밀번호 입력'
        />
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text>이메일입력</Text>
        <TextInput
          value={mailId}
          onChangeText={(txt) => setMailId(txt)}
          style={{borderColor:'red', borderWidth:1, width:150}}
          placeholder='이메일 입력'
        />
        <Text>@</Text>
        <TextInput
          value={mailDomain}
          onChangeText={(txt) => setMailDomain(txt)}
          style={{borderColor:'red', borderWidth:1, width:150}}
          placeholder='gmail.com'
        />
      </View>
      <TouchableOpacity
        style={{borderColor:'red',borderWidth:1}}
        onPress={() => setAreaModalVisible(true)}
      >
        <Text>지역선택 모달활성화</Text>
      </TouchableOpacity>
      <Text>선택한 대분류 지역코드 : {usrArea1}</Text>
      <Text>선택한 소분류 지역코드 : {usrArea2}</Text>
      <Text>선택한 대분류 지역이름 : {usrAreaNm1}</Text>      
      <Text>선택한 소분류 지역이름 : {usrAreaNm2}</Text>      
      <AreaModal
        visible={areaModalVisible}
        onRequestClose={setAreaModalVisible}
        setArea1={setUsrArea1}
        setArea2={setUsrArea2}
        setAreaNm1={setUsrAreaNm1}
        setAreaNm2={setUsrAreaNm2}
      />
      <View style={{flexDirection:'row',marginTop:20}}>
        <Text>이름입력</Text>
        <TextInput
          value={usrNm}
          onChangeText={(txt) => setUsrNm(txt)}
          style={{borderColor:'red', borderWidth:1, width:200}}
          placeholder='이름입력'
        />
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>전화번호입력</Text>
        <TextInput
          value={usrPh}
          onChangeText={(txt) => setUsrPh(txt)}
          style={{borderColor:'red', borderWidth:1, width:200}}
          placeholder='- 제외하고입력'
        />
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>생년월일 입력</Text>
        <TextInput
          value={birthDt}
          onChangeText={(txt) => setBirthDt(txt)}
          style={{borderColor:'red', borderWidth:1, width:200}}
          placeholder='생년월일입력 YYYYMMDD'
        />
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>성별</Text>
        <TouchableOpacity
          style={{borderColor:'blue',borderWidth:1,width:100,height:40}}
          onPress={() => setUsrSex('1')}
        >
            <Text>남</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{borderColor:'red',borderWidth:1,width:100,height:40}}
          onPress={() => setUsrSex('2')}
        >
            <Text>여</Text>
        </TouchableOpacity>
        <Text>선택된 성별 : {usrSex == 1 ? '남' : '여'}</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:20}}>
        <Text>프로필 사진선택</Text>
        <TouchableOpacity onPress={() => setProfile('ddoong.png')}>
          <Image
            style={{width:100,height:100,marginLeft:5}}
            source={require('../assets/test/ddoong.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setProfile('jyp.png')}>
          <Image
            style={{width:100,height:100,marginLeft:5}}
            source={require('../assets/test/jyp.png')}
          />
        </TouchableOpacity>       
      </View>
      <View style={{flexDirection:'row',marginTop:20}}>
        <Text>프로필 사진선택</Text>
        <TouchableOpacity onPress={() => setProfile('kimY.png')}>
          <Image
            style={{width:100,height:100,marginLeft:5}}
            source={require('../assets/test/kimY.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setProfile('choi.png')}>
          <Image
            style={{width:100,height:100,marginLeft:5}}
            source={require('../assets/test/choi.png')}
          />
        </TouchableOpacity>       
      </View>
      <TouchableOpacity
        onPress={() => goNextSignUp()}
        style={{borderColor:'red', borderWidth:1, marginTop:10}}
      >
        <Text>다음</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default SignUp1;