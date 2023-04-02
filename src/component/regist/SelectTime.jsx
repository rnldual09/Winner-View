import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import registStyles from '../../style/registStyles';
import TimeModal from '../../modal/timeModal/TimeModal';
 
const SelectTime = (props) => {
  
  const { amPm, setAmPm, hour, setHour, minute, setMinute } = props;
  
  const [visible, setVisible] = useState(false);  // 모달활성화
  const [success, setSuccess] = useState(false);  // 입력여부

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