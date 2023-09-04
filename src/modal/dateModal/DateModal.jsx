import React, { useState, useEffect } from 'react';
import { Modal, View, Pressable } from 'react-native';
import dateModalStyles from './dateModalStyles';
import DateHeader from '../dateModal/DateHeader';
import ModalCloseBtn from './ModalCloseBtn';
import DateContent from './DateContent';

const DateModal = (props) => {

  const { visible, onRequestClose, setDate } = props;
  
  const [year, setYear] = useState((new Date()).getFullYear());
  const [month, setMonth] = useState((new Date()).getMonth() + 1);
  const [day, setDay] = useState();

  useEffect(() => {
    // 모달창 open 시 현재날짜로 초기화
    if(visible) {
      setYear((new Date()).getFullYear());
      setMonth((new Date()).getMonth() + 1);
    }
  },[visible]);

  // 날짜 선택시 값 담은 후 모달 종료
  useEffect(() => {
    endChooseDate();
  }, [day]);

  const endChooseDate = () => {

    if(day) {
      
      const resultMonth = month < 10 ? '0' + month : month;
      const resultDay = day < 10 ? '0' + day : day;

      const result = year.toString() + resultMonth + resultDay;
      setDate(result);
      onRequestClose((state) => !state);
    }
  };

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
        style={dateModalStyles().modalContainer}
        onPress={(event) => touchScreen(event)}
      >
        <View style={dateModalStyles().modalSubContainer}>          
          <ModalCloseBtn onRequestClose={onRequestClose}/>     
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
          />
        </View>
      </Pressable>
    </Modal>
  );  
}

export default DateModal;
