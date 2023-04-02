import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import registStyles from '../../style/registStyles';
import commonStyles from '../../style/commonStyles';
import DisplayHashTag from './DisplayHashTag';

const RegistHashTag = (props) => {

  const { hashTagArr, setHashTagArr } = props;

  const[tempHashTag, setTempHashTag] = useState('');  // 작성용도
  
  // 추가 눌렀을 때
  const addHashTag = () => {

    if(tempHashTag == '') { return; }

    const hash = '#' + tempHashTag;
    hashTagArr.push(hash);
    setHashTagArr(hashTagArr);
    setTempHashTag('');
  };

  // 텍스트 입력도중 # 입력되면 제거
  const funcOnchange = (text) => {
    text = text.replace('#', '');
    setTempHashTag(text);
  };

  useEffect(() => {
    console.log('change');
  },[hashTagArr]);

  return (    
    <View style={{marginTop:15}}>
      <TouchableOpacity
        style={registStyles().hashInformation}
        onPress={() => console.log('dd')}
      >
        <Text style={commonStyles(2).Font_000}># 관련검색어</Text>
        <Image 
          source={require('../../assets/icon/information.png')}
          style={commonStyles(2.55).CommonImage}
        />
      </TouchableOpacity>
      <View style={registStyles().regHashTagContainer}>        
        <TextInput
          placeholder='관련검색어를 입력해주세요'
          style={registStyles().hashTagInp}
          maxLength={10}          
          value={tempHashTag}
          onChangeText={(text) => funcOnchange(text)}
        />
        <TouchableOpacity
          style={registStyles().addBtn}
          onPress={() => addHashTag()}
        >
          <Text style={commonStyles(2).Font_fff}>+  </Text>
          <Text style={commonStyles(1.5).Font_fff}>추가</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={registStyles().hashTextContainer}        
        showsVerticalScrollIndicator={false}        
      >        
        <DisplayHashTag
          hashTagArr={hashTagArr}
          setHashTagArr={setHashTagArr}
        />
      </ScrollView>
    </View>
  );  
}

export default RegistHashTag;
