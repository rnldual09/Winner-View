import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import modalStyles from '../../style/modalStyles';
import commonStyles from '../../style/commonStyles';
import DateUtil from '../../util/DateUtil';
import DateContentWeek from './DateContentWeek';

const DateContent = (props) => {

  const { setDay, month, onRequestClose, setSuccess } = props;
  
  const [dateContent, setDateContent] = useState([{}]);

  useEffect(() => {
    // 넘겨받은 달에 맞게 달력세팅
    settingScreen();
  }, [month]);

  // 달력모양 리턴받기
  const settingScreen = () => {    
    const result = DateUtil.returnDateContent(month);
    setDateContent(result);
  };

  // 달력날짜 클릭
  const clickDay = (paramDay) => {
    
    if(checkParamDay(paramDay)) {
      setDay(paramDay);
      setSuccess(true);
      onRequestClose((state) => !state);
    }
  };

  // 넘겨받은 일이 오늘 일수보다 적다면 불투명한 디자인으로 리턴
  const textDayStyles = (paramDay) => {

    if(checkParamDay(paramDay)) return commonStyles(1.7).Font_000;

    return commonStyles(1.7).Font_999;
  };

  // 입력받은 날짜가 오늘보다 이전이후 인지 판별
  const checkParamDay = (paramDay) => {
  
    const nowMonth = (new Date()).getMonth() + 1;   // 오늘달
    const nowDay = (new Date()).getDate();          // 오늘날짜

    if(nowMonth < month) return true;   
    if(nowMonth == month && nowDay < paramDay) return true;
       
    return false;
  };

  return (
    <View style={modalStyles().dateContentContainer}>
      <DateContentWeek />
      {dateContent.map((item, index) => (
        <View
          style={modalStyles('14.7%').dateContentSubContainer}
          key={index}
        >
          <TouchableOpacity
            style={modalStyles().week}
            onPress={() => clickDay(item.sun)}
          >
            <Text style={commonStyles(1.7).Font_red}>{item.sun}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={modalStyles().date}
            onPress={() => clickDay(item.mon)}
          >
            <Text style={textDayStyles(item.mon)}>{item.mon}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={modalStyles().date}
            onPress={() => clickDay(item.tue)}
          >
            <Text style={textDayStyles(item.tue)}>{item.tue}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={modalStyles().date}
            onPress={() => clickDay(item.wed)}
          >
            <Text style={textDayStyles(item.wed)}>{item.wed}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={modalStyles().date}
            onPress={() => clickDay(item.thu)}
          >
            <Text style={textDayStyles(item.thu)}>{item.thu}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={modalStyles().date}
            onPress={() => clickDay(item.fri)}
          >
            <Text style={textDayStyles(item.fri)}>{item.fri}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={modalStyles().date}
            onPress={() => clickDay(item.sat)}
          >
            <Text style={commonStyles(1.7).Font_1a8cff}>{item.sat}</Text>  
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );  
}

export default DateContent; 