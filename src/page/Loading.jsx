import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Util from '../util/Util';
import DeviceInfo from 'react-native-device-info';

const Loading = () => {

  const navigation = useNavigation();
  
  useEffect(() => {
    //getDeviceInfo();
    movePage();
  }, []);

  // 기기 고유 아이디 가져오기
  const getDeviceInfo = () => {    
    DeviceInfo.getUniqueId().then((uniqueId) => {
      // 기기 고유 아이디 가져오기 성공 시 자동로그인 저장여부 가져옴
      getUserAutoLoginYn(uniqueId);
    }).catch((error) => {
      moveNextPage('login')
      console.log(error);
    });
  };

  // 자동로그인 저장여부 가져오기
  const getUserAutoLoginYn = async (uniqueId) => {
    const url = '/user/getUserAutoLoginYn.do';
    const data = {'uniqueId':uniqueId};
    //const response = await Util.fetchWithNotToken(url, data);

    //console.log(response);
  };

  // 다음 페이지 이동
  const moveNextPage = (type) => {    
    if(type == 'login') {
      navigation.navigate("로그인");
    } else {

    }
  };


  const movePage = async () => {

    const autoLogin = await AsyncStorage.getItem('autoLogin');
    
    // 자동로그인을 체크 했다면 로그인 처리 후 메인으로 이동
    if(autoLogin == 'Y') {

      

    } else {
      setTimeout(() => {
         navigation.navigate("로그인");
      }, 2000);
    }
  };

  return (    
    <View style={{backgroundColor:'#fff', alignItems:'center', justifyContent:'center', flex:1}}>
      <Image 
        source={require('../assets/icon/appIcon.png')}
        style={{width:100, height:100}}
      />        
      </View>
  );  
}

export default Loading;
