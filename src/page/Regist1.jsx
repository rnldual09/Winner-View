import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import registStyles from '../style/registStyles';
import RegistStepImg from '../component/regist/RegistStepImg';
import NextRegist from '../component/regist/NextRegist';
import RegistPrivateGubun from '../component/regist/RegistPrivateGubun';
import RegistPicture from '../component/regist/RegistPicture';
import { useNavigation } from '@react-navigation/native';

const Regist1 = () => {

  const [open, setOpen] = useState(true);
  const [priv, setPriv] = useState(false);
     
  const navigation = useNavigation();
  const goNextRegist = () => { navigation.navigate('게시글작성2'); };

  return (    
    <View style={registStyles().registContainer}>
      <View style={{width:'93%', height:'90%'}}>
        <RegistStepImg nowStep='1'/>        
        <RegistPrivateGubun
          open={open}
          priv={priv}
          setOpen={setOpen}
          setPriv={setPriv}
        />
        <RegistPicture />    
      </View>  
      <NextRegist
        nowStep='1'
        goNextRegist={goNextRegist}
      />  
    </View>
  );  
}

export default Regist1;