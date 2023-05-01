import React from 'react';
import { View, Text } from 'react-native';
import modalStyles from '../../style/modalStyles';
import commonStyles from '../../style/commonStyles';

const AreaModalHeader = (props) => {

  const { headerTitle, step } = props;

  return (
    <View style={modalStyles().modalHeaderContainer}>
      <Text style={commonStyles(2.2).Font_000}>{step == 'second' ? headerTitle : '지역선택'}</Text>
    </View>
  );  
}

export default AreaModalHeader;