import React  from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import commonStyles from '../../style/commonStyles';
import modalStyles from '../../style/modalStyles';
import ModalCloseBtn from '../commonModal/ModalCloseBtn';
import ScrollItem from './ScrollItem';

const TimeModal = (props) => {

  const { visible, onRequestClose, setAmPm, setHour, setMinute, setSuccess } = props;

  return (
    <Modal
      animationType={"none"}
      transparent={true}
      visible={visible}
      onRequestClose={() => onRequestClose((state) => !state)}
    >
      <View style={modalStyles().modalContainer}>
        <View style={modalStyles().modalSubContainer}>                 
          <View style={modalStyles().modalCloseBtnContainer}>
            <ModalCloseBtn onRequestClose={onRequestClose}/>
          </View>          
          <View style={modalStyles().gijun}/>
          <View style={modalStyles().scrollItemContainer}>            
            <View style={modalStyles().scrollItemSubContainer}>
              <ScrollItem
                type='amPm'
                setAmPm={setAmPm}
              />
            </View>
            <View style={modalStyles().scrollItemSubContainer}>
              <ScrollItem
                type='hour'
                setHour={setHour}
              />
            </View>
            <View style={modalStyles().scrollItemSubContainer}>
              <ScrollItem
                type='minute'
                setMinute={setMinute}
              />
            </View>            
          </View>
          <TouchableOpacity
            style={modalStyles().successBtn}
            onPress={() => {setSuccess(true); onRequestClose((state) => !state);}}
          >
            <Text style={commonStyles(1.7).Font_000}>선택완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );  
}

export default TimeModal;
