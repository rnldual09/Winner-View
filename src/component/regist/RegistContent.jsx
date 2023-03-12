import React from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

const RegistContent = (props) => {

  const { type, placeholder } = props;

  // type 별 multiline 지원여부 결정
  const returnMultiLine = () => {    
    const flag = type == 'wonLine' ? false : true;
    return flag;
  };
  
  // type 별 maxlength 값 return
  const returnMaxLength = () => {
    const length = type == 'wonLine' ? 15 : 1000;
    return length;
  };

  // type 별 style 값 return
  const returnStyles = () => {
    const styles = type == 'wonLine' ? {borderBottomColor:'#1a8cff', borderBottomWidth:1, fontSize:13} : {borderBottomColor:'#1a8cff', borderBottomWidth:1, fontSize:13, maxHeight:70};
    return styles;
  };

  return (
    <>      
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={returnStyles()}
        maxLength={returnMaxLength()}
        multiline={returnMultiLine()}
      />
    </>
  );  
}

export default RegistContent;
