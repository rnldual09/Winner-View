import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../style/commonStyles';
import registStyles from '../style/registStyles';
import RegistPrivateGubun from '../component/regist/RegistPrivateGubun';
import RegistPicture from '../component/regist/RegistPicture';
import RegistContent from '../component/regist/RegistContent';
import SelectDate from '../component/regist/SelectDate';
import Util from '../util/Util';

const Regist = () => {

  const [open, setOpen] = useState(true);   // 공개여부
  const [priv, setPriv] = useState(false);  // 비공개여부

  return (    
    <View style={registStyles().registContainer}>
      <View style={registStyles().registSubContainer}>
        <ScrollView>          
          <View 
            style={{
              justifyContent:'center',
              alignContent:'center',
              flexDirection:'row',              
            }}
          >
            <Image 
              source={require("../assets/icon/prevNext.png")}
              style={{width:10, height:10, marginHorizontal:5}}
            />
            <Image 
              source={require("../assets/icon/now.png")}
              style={{width:10, height:10, marginHorizontal:5}}
            />     
          </View>          
          <View style={registStyles().registComponentMargin}>
            <Text style={registStyles().explainText}>경기날짜를 선택해주세요</Text>            
            <SelectDate />
          </View>
          <View style={registStyles().registComponentMargin}>
            <Text style={registStyles().explainText}>제목을 입력해 주세요</Text>
            <RegistContent 
              placeholder='제목을 입력해주세요'
              type='wonLine'
            />
          </View>    
          <View style={registStyles().registComponentMargin}>
            <Text style={registStyles().explainText}>내용을 입력해 주세요</Text>
            <RegistContent 
              placeholder='내용을 입력해주세요'
              type='multiLine'
            />
          </View>
          <View style={registStyles().registComponentMargin}>
            <Text style={registStyles().explainText}>관련검색어를 입력해 주세요</Text>
            <RegistContent 
              placeholder='관련검색어를 입력해주세요'
              type='multiLine'
            />
          </View>
          <View style={registStyles().registComponentMargin}>
            <Text style={registStyles().explainText}>경기위치를 입력해 주세요</Text>
            <RegistContent 
              placeholder='경기위치를 입력해주세요'
              type='multiLine'
            />
          </View>          
        </ScrollView>
      </View>      
    </View>
  );  
}

export default Regist;