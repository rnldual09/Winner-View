import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import applyTeamManageModalStyles from './applyTeamManageModalStyles';

const ModalCloseBtn = (props) => {

  const { onRequestClose } = props

  return (
    <View style={applyTeamManageModalStyles().modalCloseBtnContainer}>
      <TouchableOpacity onPress={() => onRequestClose((state) => !state)}>
        <Image 
          source={require('../../assets/icon/xIcon.png')}
          style={applyTeamManageModalStyles().modalCloseBtn}
        />
      </TouchableOpacity>
    </View>
  );  
}

export default ModalCloseBtn;
