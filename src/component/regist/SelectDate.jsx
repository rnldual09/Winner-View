import React from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import registStyles from '../../style/registStyles';

const SelectDate = () => {

  const addPicture = () => {
    console.log('사진추가');
  };

  return (
    <View
      style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      <Text
        style={{                    
          paddingVertical:10,
          color:'#000',
          fontSize:17,
          marginRight:'5%',
          borderBottomColor:'#1a8cff',
          borderBottomWidth:1,
          width:'80%',
          textAlign:'left'
        }}
      >
        2022 - 02 - 24   ~   2022 - 02 - 24
      </Text>
      <View
        style={{
          width:'15%',
          alignItems:'center',
          justifyContent:'center',
        }}
      >
        <TouchableOpacity>
          <Image 
            source={require("../../assets/icon/date.png")}
            style={{
              width:30,
              height:30,
              resizeMode:'contain',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default SelectDate;