import React from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../../style/commonStyles';

const RegistPicture = () => {

  return (
    <View
      style={{                      
        flexDirection:'row',
        marginBottom:8,
      }}
    >          
      <View
        style={{
          justifyContent:'center',            
          alignItems:'center',
          marginRight:8
        }}
      >
        <TouchableOpacity
          style={{
            alignItems:'center',
            justifyContent:'center',
            borderRadius:10,
            borderColor:'#000',
            borderWidth:1,                  
            width:70,
            height:70,
          }}
        >
          <Image
            source={require('../../assets/icon/camera.png')}
            style={{
              width:23,
              height:23,
              resizeMode:'contain',
              marginBottom:5,
            }}  
          />
          <Text style={commonStyles(0.028).Font_000}>사진추가</Text>
        </TouchableOpacity>    
      </View>
      <ScrollView horizontal={true}>        
        <Image 
          source={require('../../assets/icon/buni3.jpeg')}
          style={{
            width:70,
            height:70,
            resizeMode:'contain',
            marginRight:5,
            borderRadius:10,
          }}
        />        
      </ScrollView>
    </View>
  );  
}

export default RegistPicture;