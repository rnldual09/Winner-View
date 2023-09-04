import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import registStyles from '../../style/registStyles';

const ChooseGrade = (props) => {

  const { grdArr, setGrdArr } = props;
  const[grdNm, setGrdNm] = useState('');

  const addGrade = () => {

    if(grdNm == '') {
      return;
    }

    for(let i=0; i<grdArr.length; i++) {
      if(grdArr[i].grdNm == grdNm) {
        return;
      }
    }

    const tempGrdArr = grdArr.slice();
    tempGrdArr.push({'grdNm':grdNm, 'grdCnt':1});

    setGrdArr(tempGrdArr);
    setGrdNm('');
  }

  return (    
    <View style={registStyles().gradeContainer}>
      <Text style={registStyles().gradeText}>등급 및 포지션 입력</Text>
      <View style={registStyles().gradeInsertContainer}>
        <TextInput
          placeholder='등급 및 포지션 입력'
          style={registStyles().gradeTextInp}
          value={grdNm}
          onChangeText={(txt) => setGrdNm(txt)}
          maxLength={18}
        />        
        <TouchableOpacity
          style={registStyles().gradeAddBtn}
          onPress={() => addGrade()}
        >
          <Text style={registStyles().gradeAddBtnText}>추가</Text>
        </TouchableOpacity>
      </View>      
    </View>
  );  
}

export default ChooseGrade;