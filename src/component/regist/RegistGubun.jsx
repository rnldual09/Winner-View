import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../../style/styles';

const RegistGubun = (props) => {

  const { left, right } = props;

  return (
  
    <View
      style={{
        marginVertical:8,
        flexDirection:'row',
        justifyContent:'space-between'
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor:'#1a8cff',
          width:'49%',
          height:35,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:5,
        }}
      >
        <Text style={styles(0.031).Font_fff}>{left}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderColor:'#1a8cff',
          borderWidth:1,
          width:'49%',
          height:35,
          alignItems:'center',
          justifyContent:'center',
          borderRadius:5,
        }}
      >
        <Text style={styles(0.031).Font_1a8cff}>{right}</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default RegistGubun;
