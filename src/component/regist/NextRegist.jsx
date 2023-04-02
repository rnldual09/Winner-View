import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import registStyles from '../../style/registStyles';
import commonStyles from '../../style/commonStyles'; 


const NextRegist = (props) => {

  const { nowStep, goNextRegist } = props;
  
  return (
    <TouchableOpacity
      onPress={() => goNextRegist()}
      style={registStyles().nextBtn}
    >  
      <Text style={commonStyles(2.2).Font_fff}>
        {nowStep == 3 ? '완료' : '다   음'}
      </Text>
    </TouchableOpacity>        
  );  
}

export default NextRegist;