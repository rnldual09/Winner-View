import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import registStyles from '../../style/registStyles';
import TimeModal from '../../modal/timeModal/TimeModal';
 
const SelectTime = () => {

  const [visible, setVisible] = useState(false);  // 시간모달 활성화
  const [amPm, setAmPm] = useState('AM');         // 오전 오후
  const [hour, setHour] = useState(1);         // 시간
  const [minute, setMinute] = useState(0);     // 분
  const [success, setSuccess] = useState(false);  // 날짜입력여부

  const plusZero = (param) => {
    return param < 10 ? '0' + param : param;
  };

  return (
    <> 
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={registStyles(0.02).rowContainer}
      >  
        {!success ? 
          <Text style={registStyles(success).explainText}>경기시간</Text>              
            : 
          <Text style={registStyles(success).explainText}>{amPm} {plusZero(hour)} : {plusZero(minute)}</Text>
        }                        
        <Image 
          source={require("../../assets/icon/right.png")}
          style={registStyles().dateImg}
        />
      </TouchableOpacity>        
      <TimeModal
        visible={visible}
        onRequestClose={setVisible}        
        setAmPm={setAmPm}
        setHour={setHour}        
        setMinute={setMinute}
        setSuccess={setSuccess}
      />
    </>
  );  
}

export default SelectTime;