import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import modalStyles from '../../style/modalStyles';

const ButtonModal = (props) => {

  const { visible, onRequestClose } = props;

  return (
    <Modal
      animationType={"none"}
      transparent={true}
      visible={visible}
      onRequestClose={() => onRequestClose((state) => !state)}
    >
      <View>
        <Text>dd</Text>
      </View>
    </Modal>
  );  
}

export default ButtonModal;
