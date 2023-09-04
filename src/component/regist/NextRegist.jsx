import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import registStyles from '../../style/registStyles';

const NextRegist = (props) => {

  const { goNextStep } = props;

  return (    
    <View style={{height:'7%'}}>
      <TouchableOpacity
        style={registStyles().nextBtn}
        onPress={() => goNextStep()}
      >
        <Text style={registStyles().nextBtnText}>다음</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default NextRegist;