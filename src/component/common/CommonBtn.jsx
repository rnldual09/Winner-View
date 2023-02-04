import React from 'react';
import { Text,TouchableOpacity, } from 'react-native';
import commonStyles from '../../style/commonStyles';

const CommonBtn = (props) => {

  const { OnPress, title } = props;

  return (
    <TouchableOpacity
      onPress={OnPress}
      style={commonStyles().commonBtn}
    >
      <Text style={commonStyles(2).Font_fff}>{title}</Text>
    </TouchableOpacity>
  );  
}

export default CommonBtn;
