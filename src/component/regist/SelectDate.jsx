import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import registStyles from '../../style/registStyles';
import DateModal from '../../modal/dateModal/DateModal';
 
const SelectDate = (props) => {

  const { year, setYear, month, setMonth, day, setDay } = props;

  const [visible, setVisible] = useState(false);  // 모달활성화
  const [success, setSuccess] = useState(false);  // 입력여부

  // ex) 3월 03월로 수정
  const addZero = (param) => { return param < 10 ? '0' + param : param;}

  return (
    <> 
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={registStyles(0.02).rowContainer}
      >  
        {!success ? 
          <Text style={registStyles(success).explainText}>게시글 마감날짜</Text>              
            : 
          <Text style={registStyles(success).explainText}>{year} - {addZero(month)} - {addZero(day)}</Text>
        }                        
        <Image 
          source={require("../../assets/icon/right.png")}
          style={registStyles().dateImg}
        />
      </TouchableOpacity>        
      <DateModal
        visible={visible}
        onRequestClose={setVisible}
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
        setDay={setDay}
        setSuccess={setSuccess}
      />
    </>
  );  
}

export default SelectDate;