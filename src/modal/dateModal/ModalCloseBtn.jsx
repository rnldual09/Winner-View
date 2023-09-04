import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import dateModalStyles from './dateModalStyles';

const ModalCloseBtn = (props) => {

  const { onRequestClose } = props

  return (
    <View style={dateModalStyles().modalCloseBtnContainer}>
      <TouchableOpacity onPress={() => onRequestClose((state) => !state)}>
        <Image 
          source={require('../../assets/icon/xIcon.png')}
          style={dateModalStyles().modalCloseBtn}
        />
      </TouchableOpacity>
    </View>
  );  
}

export default ModalCloseBtn;
