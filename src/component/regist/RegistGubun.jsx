import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../../style/commonStyles';


const RegistGubun = (props) => {

  return (
  
    <View
      style={{
        marginBottom:8,
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
        <Text style={commonStyles(0.031).Font_fff}>공개</Text>
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
        <Text style={commonStyles(0.031).Font_1a8cff}>비공개</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default RegistGubun;
