import React from 'react';
import { Modal, View, Pressable } from 'react-native';
import modalStyles from '../../style/modalStyles';
import DateHeader from '../dateModal/DateHeader';
import ModalCloseBtn from '../commonModal/ModalCloseBtn';
import DateContent from './DateContent';

const DateModal = (props) => {

  const { visible, onRequestClose, year, setYear, month, setMonth, setSuccess, setDay } = props;
  
  const touchScreen = (event) => {
    // 부모 pressable 클릭시에만
    if(event.target == event.currentTarget) {
      onRequestClose((state) => !state);
    }
  };

  return (
    <Modal
      animationType={"none"}
      transparent={true}
      visible={visible}
      onRequestClose={() => onRequestClose((state) => !state)}
    >
      <Pressable 
        style={modalStyles().modalContainer}
        onPress={(event) => touchScreen(event)}
      >
        <View style={modalStyles().modalSubContainer}>          
          <View style={modalStyles().modalCloseBtnContainer}>
            <ModalCloseBtn onRequestClose={onRequestClose}/>
          </View>          
          <DateHeader
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
          />
          <DateContent
            setDay={setDay} 
            month={month}
            onRequestClose={onRequestClose}
            setSuccess={setSuccess}
          />
        </View>
      </Pressable>
    </Modal>
  );  
}

export default DateModal;
