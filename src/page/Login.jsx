import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import CommonBtn from '../component/common/CommonBtn';
import LoginBtns from '../component/login/LoginBtns'
import loginStyles from '../style/loginStyles';
import { useNavigation } from "@react-navigation/native";
import LoginTextInput from '../component/login/LoginTextInput';
import CommonErrMsg from '../component/common/CommonErrMsg';
import Util from '../util/Util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBoxs from '../component/login/CheckBoxs';

const Login = () => {

  const navigation = useNavigation();

  const [usrId, setUsrId] = useState('');             // 아이디
  const [usrPw, setUsrPw] = useState('');             // 비밀번호
  const [errMsg, setErrMsg] = useState('');           // 에러메세지
  const [errState, setErrState] = useState(false);    // 에러상태
  const [openModal, setOpenModal] = useState(true);   // 모달띄우기 여부
  const [autoLogin, setAutoLogin] = useState(false);  // 자동로그인 여부
  const [saveId, setSaveId] = useState(false);        // 아이디저장

  useEffect(() => { setErrMsg(''); setErrState(false); },[usrId]);  // 아이디 입력 시 에러문구 초기화
  useEffect(() => { setErrMsg(''); setErrState(false); },[usrPw]);  // 비밀번호 입력 시 에러문구 초기화

  const goLogin = async () => {
    
    if(validate()) {

      const url = '/login.do';
      const data = {'usrId':usrId, 'usrPw':usrPw};
      
      const responseText = await Util.fetchWithNotToken(url, data);
      
      if(responseText.status == 'success') {        // 로그인 성공   
        await setAsyncStorage(responseText);
        navigation.navigate('메인');
      }
      if(responseText.status == 'undefinedUser') {  // 유저정보 미존재
        setErrMsg('아이디와 비밀번호를 확인해주세요.');
        setErrState(true);
      }
      if(responseText.status == 'changePw') {       // 비밀번호 변경일 3개월 지난 유저
        console.log('dd');
        // 모달창 띄우기

      }
      if(responseText.status == 'lockUser') {       // 로그인 락 걸린 유저
        console.log('dddd');
        // 모달창 띄우기

      }     
    }    
  };
  
  // 기기에 유저정보 저장
  const setAsyncStorage = async (responseText) => {
    
    const usrInfo = JSON.stringify(responseText.usrInfo);
    
    await AsyncStorage.setItem('usrInfo', usrInfo);
    await AsyncStorage.setItem('token', responseText.token);
    
    const postFilter = {
      'onlyMate':'N',
      'postArea1':responseText.usrInfo.usrArea1,
      'postArea2':responseText.usrInfo.usrArea2,
      'postAreaNm1':responseText.usrInfo.usrAreaNm1,
      'postAreaNm2':responseText.usrInfo.usrAreaNm2,
      'perYn':'Y',
      'teamYn':'Y',
      'teamMinCnt':'',
      'teamMaxCnt':'',
      'endDt':'',
    };
    
    console.log(postFilter);

    await AsyncStorage.setItem('postFilter', JSON.stringify(postFilter));

    autoLogin ? await AsyncStorage.setItem('autoLogin', 'Y') : await AsyncStorage.setItem('autoLogin', 'N');
    saveId    ? await AsyncStorage.setItem('saveId', usrId)  : await AsyncStorage.setItem('saveId', '');
  };

  // 아이디 비밀번호 입력여부 확인
  const validate = () => {

    if(usrId == '') {
      setErrMsg('아이디를 입력해주세요.');
      setErrState(true);
      return false;
    }

    if(usrPw == '') {
      setErrMsg('비밀번호를 입력해주세요.');
      setErrState(true);
      return false;
    }

    return true;
  };

  // 자동로그인 체크박스 클릭
  const clickAutoLogin = () => { setAutoLogin((state) => !state); };
  // 아이디저장 체크박스 클릭
  const clickSaveId = () => { setSaveId((state) => !state) };

  return (
    <>
      <View style={loginStyles().loginContainer}>
        <Image 
          source={require('../assets/icon/appIcon.png')}
          style={loginStyles().loginIcon}
        />        
        <LoginTextInput       
          placeholder='아이디를 입력하세요'
          secureTextEntry={false}
          value={usrId}
          onChangeText={setUsrId}
        />
        <LoginTextInput 
          placeholder='비밀번호를 입력하세요'
          secureTextEntry={true}
          value={usrPw}
          onChangeText={setUsrPw}
        />  
        <View style={{width:'85%'}}>
          <CommonErrMsg
            errMsg={errMsg}
            errState={errState}
          />
          <View style={{flexDirection:'row'}}>
            <CheckBoxs
              checked={autoLogin}
              onPress={clickAutoLogin}
              text="아이디저장"
            />
            <CheckBoxs
              checked={saveId}
              onPress={clickSaveId}
              text="자동로그인"
            />
          </View>          
        </View>
        <View style={loginStyles().loginSubContainer}>
          <View style={{height:45}}>
            <CommonBtn 
              title="로그인"
              OnPress={goLogin}
            />
          </View>
          <LoginBtns />        
        </View>
      </View>
      
    </>
  );  
}

export default Login;
