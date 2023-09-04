import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import registStyles from '../../style/registStyles';

const ChooseTeamCnt = (props) => {

  const { text, plusFunc, minusFunc, cnt } = props;
  
  return (    
    <View style={registStyles().teamCntContainer}>
      <View style={registStyles().teamCntSubContainer}>     
        <Text style={registStyles().teamCntText}>{text}</Text>
        <View style={registStyles().teamCntBtnContainer}>       
          <TouchableOpacity
            style={registStyles().teamCntBtn}
            onPress={() => minusFunc()}
          >
            <Text style={registStyles().teamCntBtnText}>-</Text>  
          </TouchableOpacity>
          <Text style={registStyles().teamCntText}>{cnt}</Text>
          <TouchableOpacity
            style={registStyles().teamCntBtn}
            onPress={() => plusFunc()}
          >
            <Text style={registStyles().teamCntBtnText}>+</Text>  
          </TouchableOpacity>
        </View>  
      </View>
    </View>
  );  
}

export default ChooseTeamCnt;