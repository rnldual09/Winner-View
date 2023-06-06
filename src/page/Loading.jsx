import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Util from '../util/Util';

const Loading = () => {

  const navigation = useNavigation();
  
  useEffect(() => {
    movePage();
  }, []);

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
