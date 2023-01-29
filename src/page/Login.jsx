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
import ButtonModal from '../component/modal/ButtonModal';

const Login = () => {

  const navigation = useNavigation();

  const [usrId, setUsrId] = useState('');             // 아이디
  const [usrPw, setUsrPw] = useState('');             // 비밀번호
  const [errMsg, setErrMsg] = useState('');           // 에러메세지
  const [errState, setErrState] = useState(false);    // 에러상태
  const [openModal, setOpenModal] = useState(true);  // 모달띄우기 여부

  useEffect(() => { setErrMsg(''); setErrState(false); },[usrId]);  // 아이디 입력 시 에러문구 초기화
  useEffect(() => { setErrMsg(''); setErrState(false); },[usrPw]);  // 비밀번호 입력 시 에러문구 초기화

  const goLogin = async () => {
    
    //if(validate()) {

      const url = '/login.do';
      const data = {'usrIdd':'', 'usrPw':usrPw};
      
      const responseText = await Util.fetchWithNotToken(url, data);
      console.log(responseText);
      /*
      if(responseText.status == 'success') {        // 로그인 성공   
        await setAsyncStorage(responseText);
        navigation.navigate('메인');
      }
      if(responseText.status == 'undefinedUser') {  // 유저정보 미존재
        setErrMsg('아이디와 비밀번호를 확인해주세요.');
        setErrState(true);
      }
      if(responseText.status == 'changePw') {       // 비밀번호 변경일 3개월 지난 유저
        
        // 모달창 띄우기

      }
      if(responseText.status == 'lockUser') {       // 로그인 락 걸린 유저
        
        // 모달창 띄우기

      }     
     */  
    //}    
  };
  
  // 기기에 유저정보 저장
  const setAsyncStorage = async (responseText) => {
    await AsyncStorage.setItem('usrInfo', responseText.usrInfo);
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

/*
<ButtonModal
        visible={openModal}
        onRequestClose={setOpenModal}
      />
*/
