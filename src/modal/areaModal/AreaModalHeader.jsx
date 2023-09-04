import React from 'react';
import { View, Text } from 'react-native';
import areaModalStyles from './areaModalStyles';

const AreaModalHeader = (props) => {

  const { headerTitle, step } = props;

  const returnHeadTitle = () => {
    if(step == '1') {
      return '지역선택';
    } else {
      return headerTitle;
    }
  };

  return (
    <View style={areaModalStyles().modalHeaderContainer}>
      <Text style={areaModalStyles().modalHeaderTitle}>
        {returnHeadTitle()}
      </Text>
    </View>
  );  
}

export default AreaModalHeader;