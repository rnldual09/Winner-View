import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import UserAgree from '../component/signUp/UserAgree';
import SignUpTitle from '../component/signUp/SignUpTitle';
import CommonBtn from '../component/common/CommonBtn';
import commonStyles from '../style/commonStyles';

const SignUp1 = () => {

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <View
      style={{
        backgroundColor:'#fff',
        height:'100%',
        width:'100%'
      }}
    >
      <ScrollView>
        <View
          style={{
            marginTop:15,
            alignItems:'center',
            alignSelf:'center',
            width:'95%'
          }}
        >
          <SignUpTitle />
          <UserAgree
            checked={checked1}
            setChecked={setChecked1}
          />
          <UserAgree
            checked={checked2}
            setChecked={setChecked2}
          />
          <UserAgree
            checked={checked3}
            setChecked={setChecked3}
          />
        </View>
      </ScrollView>
      <CommonBtn 
        title="다음"
      />
    </View>
  );  
}

export default SignUp1;
