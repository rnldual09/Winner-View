import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import registStyles from '../../style/registStyles';

const ChooseOpenYn = (props) => {

  const { openYn, setOpenYn } = props;

  return (    
    <View style={registStyles().openYnContainer}>
      <TouchableOpacity
        style={openYn == 'Y' ? registStyles().openYnSelectedBtn : registStyles().openYnNotSelectBtn}
        onPress={() => setOpenYn('Y')}
      >
        <Text style={openYn == 'Y' ? registStyles().openYnSelectedText : registStyles().openYnNotSelectText}>
          공개
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={openYn == 'N' ? registStyles().openYnSelectedBtn : registStyles().openYnNotSelectBtn}
        onPress={() => setOpenYn('N')}
      >
        <Text style={openYn == 'N' ? registStyles().openYnSelectedText : registStyles().openYnNotSelectText}>
          비공개
        </Text>
      </TouchableOpacity>
    </View>
  );  
}

export default ChooseOpenYn;