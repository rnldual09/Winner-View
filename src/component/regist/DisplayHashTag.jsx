import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import registStyles from '../../style/registStyles';
import commonStyles from '../../style/commonStyles';

const DisplayHashTag = (props) => {

  const { hashTagArr, setHashTagArr } = props;

  //useEffect(() => {console.log('dd');},[hashTagArr])

  // 해시태그 삭제
  const deleteH = (index) => {          
    const arr = hashTagArr
    arr.splice(index, 1);
    setHashTagArr(arr);
    
  };

  return (
    <View
      style={{        
        width:'100%',
        height:'100%',
        flexDirection:'row',          
        alignItems:'flex-start',
        justifyContent:'flex-start',
        flexWrap:'wrap'      
      }}
    >            
      {hashTagArr.map((item, index) => (       
        <TouchableOpacity
          style={{
            backgroundColor:'#000',
            height:30,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            margin:3,
            paddingHorizontal:10,
          }}
          onPress={() => deleteH(index)}
          key={index}
        >
          <Text style={commonStyles(1.3).Font_fff}>X  </Text>
          <Text style={commonStyles(1.5).Font_fff}>{item}</Text>
        </TouchableOpacity>             
      ))}  
    </View>
  );  
}

export default DisplayHashTag;
