import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import modalStyles from '../../style/modalStyles';

const ModalCloseBtn = (props) => {

  const { onRequestClose } = props

  return (
    <TouchableOpacity onPress={() => onRequestClose((state) => !state)}>
      <Image 
        source={require('../../assets/icon/xIcon.png')}
        style={modalStyles().modalCloseBtn}
      />
    </TouchableOpacity>
  );  
}

export default ModalCloseBtn;
