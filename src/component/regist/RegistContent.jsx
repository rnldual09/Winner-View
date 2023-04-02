import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import registStyles from '../../style/registStyles';

const RegistContent = (props) => {

  const { type, placeholder, getter, setter } = props;

  const [maxLen, setMaxLen] = useState(0); 
  const [styles, setStyles] = useState({});  

  const compoRef = useRef();  // textInput focus용도

  // 마운트 시 타입별로 세팅
  useEffect(() => { settingType(); }, []);

  const settingType = () => {
 
    if(type == 'postCont') { 
      setMaxLen(1000);
      setStyles(registStyles().regContentInp2);
    } else {
      setMaxLen(20);
      setStyles(registStyles().regContentInp1);
    }
  };

  return (
    <TouchableOpacity
      style={registStyles().regContentContainer}
      onPress={() => compoRef.current.focus()}
    >
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor='#999'
        style={styles}
        ref={compoRef}
        maxLength={maxLen}
        multiline={true}
        value={getter}
        onChangeText={(text) => setter(text)}
      />        
    </TouchableOpacity>
  );  
}

export default RegistContent;
