import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import registStyles from '../style/registStyles';
import RegistContent from '../component/regist/RegistContent';
import SelectDate from '../component/regist/SelectDate';
import RegistStepImg from '../component/regist/RegistStepImg';
import SelectTime from '../component/regist/SelectTime';
import NextRegist from '../component/regist/NextRegist';

const Regist = () => {

  const[postTit, setPostTit] = useState('');    // 게시글제목
  const[postCont, setPostCont] = useState('');  // 게시글내용

  return (    
    <View style={registStyles().registContainer}>
      <View style={{width:'90%', height:'60%'}}>
        <RegistStepImg nowStep='2'/>        
        <SelectDate />
        <SelectTime />        
        <View style={registStyles(0.01).marginTops}>
          <RegistContent 
            placeholder='제목을 입력해주세요'
            type='postTit'
            getter={postTit}
            setter={setPostTit}
          /> 
        </View>
        <View style={registStyles(0.01).marginTops}>
          <RegistContent 
            placeholder='내용을 입력해주세요'
            type='postCont'
            getter={postCont}
            setter={setPostCont}
          />
        </View>        
      </View>  
      <View style={registStyles().nextRegistContainer}>
        <NextRegist nowStep='2'/>
      </View>    
    </View>
  );  
}

export default Regist;