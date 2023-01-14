import React from 'react';
import { View, Text } from 'react-native';

const SignUpTitle = () => {

  return (    
    <View
      style={{
        marginVertical:15,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
      }}
    >
      <Text
        style={{
          fontSize:17,          
          fontWeight:'600',
          color:'#000'
        }}
      >
        이용약관에
      </Text>
      <Text
        style={{
          fontSize:17,      
          color:'#000'
        }}
      >
        &nbsp;동의해 주세요.
      </Text>
    </View>
  );  
}

export default SignUpTitle;
