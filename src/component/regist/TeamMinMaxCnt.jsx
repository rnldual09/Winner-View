import React, { useRef } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import commonStyles from '../../style/commonStyles';
import registStyles from '../../style/registStyles';

const TeamMinMaxCnt = (props) => {

  const { getter, setter, type } = props;

  const focusRef = useRef();

  const funcOnChange = (text) => {

    console.log(text);
    
    const val = ['0','1','2','3','4','5','6','7','8','9'];
    console.log(val.indexOf(text));
    console.log(typeof(text));
    if(text == '') text = 0;
    if(val.indexOf(text) == -1) text = text.substring(0, text.length-1);

    setter(text);
  }

  return (  
    <TouchableOpacity
      onPress={() => focusRef.current.focus()}
      style={registStyles().teamMinMaxCntContainer}
    >
      <Text style={commonStyles(1.8).Font_000}>팀 최소인원</Text>
      <TextInput 
        style={registStyles().minMaxInp}
        keyboardType='number-pad'
        ref={focusRef}
        value={getter}
        onChangeText={(text) => funcOnChange(text)}
      />        
    </TouchableOpacity>
  )
};

export default TeamMinMaxCnt;