import React from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../style/styles';

const RegistSubject = (props) => {

  const { size, placeholder } = props;

  return (
    <View
      style={{
        marginBottom:8
      }}
    >
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={{
          borderBottomColor:'#1a8cff',
          borderBottomWidth:1,
          fontSize:13,
          maxHeight:100,
          textAlignVertical:'center'
        }}
        multiline={true}
      />
    </View>
  );  
}

export default RegistSubject;
