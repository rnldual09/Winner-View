import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import areaModalStyles from '../areaModal/areaModalStyles';

const ModalCloseBtn = (props) => {

  const { onRequestClose } = props

  return (
    <View style={areaModalStyles().modalCloseBtnContainer}>
      <TouchableOpacity onPress={() => onRequestClose((state) => !state)}>
        <Image 
          source={require('../../assets/icon/xIcon.png')}
          style={areaModalStyles().modalCloseBtn}
        />
      </TouchableOpacity>
    </View>
  );  
}

export default ModalCloseBtn;
