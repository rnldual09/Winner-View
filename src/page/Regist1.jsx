import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import registStyles from '../style/registStyles';
import ChooseOpenYn from '../component/regist/ChooseOpenYn';
import ChoosePicture from '../component/regist/ChoosePicture';
import NextRegist from '../component/regist/NextRegist';

const Regist1 = () => {

  const navigation = useNavigation();
  const[openYn, setOpenYn] = useState('Y');       // 공개 비공개여부
  const[fileData, setFileData] = useState([{'oriFile':'buni1.jpeg','svrFile':'buni4.jpeg'}]);  // 파일데이타

  // 다음 스텝 이동
  const goNextStep = () => {
    
    const naviData = {
      'openYn':openYn,
      'fileData':fileData,      
    };

    navigation.navigate('게시글작성2', naviData);
  };

  return (    
    <View style={registStyles().registContainer}>
      <View style={{height:'93%'}}>
        <ChooseOpenYn
          openYn={openYn}
          setOpenYn={setOpenYn}
        />
        <ChoosePicture
          
        />
      </View>
      <NextRegist
        title='다음'
        goNextStep={goNextStep}
      />
    </View>
  );  
}

export default Regist1;