import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import dateModalStyles from './dateModalStyles';
import DateUtil from '../../util/DateUtil';
import DateContentWeek from './DateContentWeek';

const DateContent = (props) => {

  const { setDay, month } = props;
  
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
    
    if(dayValidation(paramDay)) {
      setDay(paramDay);
    }
  };

  // 각 컴포넌트의 날짜가 오늘날짜 보다 이전이라면 불투명한 디자인으로 변경(주말제외)
  const textDayStyles = (paramDay) => {

    if(dayValidation(paramDay)) {
      return dateModalStyles('#000').dayText;
    } else {
      return dateModalStyles('#999').dayText; 
    }    
  };

  // 입력받은 날짜가 오늘보다 이전 또는 이후 인지 판별
  const dayValidation = (paramDay) => {
  
    const nowMonth = (new Date()).getMonth() + 1;   // 오늘달
    const nowDay = (new Date()).getDate();          // 오늘날짜

    if(nowMonth < month) return true;   
    if(nowMonth == month && nowDay < paramDay) return true;
       
    return false;
  };

  return (
    <View style={dateModalStyles().dateContentContainer}>
      <DateContentWeek />
      {dateContent.map((item, index) => (
        <View
          style={dateModalStyles().dateContentSubContainer}
          key={index}
        >
          <TouchableOpacity
            style={dateModalStyles().days}
            onPress={() => clickDay(item.sun)}
          >
            <Text style={dateModalStyles('red').dayText}>{item.sun}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={dateModalStyles().days}
            onPress={() => clickDay(item.mon)}
          >
            <Text style={textDayStyles(item.mon)}>{item.mon}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={dateModalStyles().days}
            onPress={() => clickDay(item.tue)}
          >
            <Text style={textDayStyles(item.tue)}>{item.tue}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={dateModalStyles().days}
            onPress={() => clickDay(item.wed)}
          >
            <Text style={textDayStyles(item.wed)}>{item.wed}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={dateModalStyles().days}
            onPress={() => clickDay(item.thu)}
          >
            <Text style={textDayStyles(item.thu)}>{item.thu}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={dateModalStyles().days}
            onPress={() => clickDay(item.fri)}
          >
            <Text style={textDayStyles(item.fri)}>{item.fri}</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={dateModalStyles().days}
            onPress={() => clickDay(item.sat)}
          >
            <Text style={dateModalStyles('#1a8cff').dayText}>{item.sat}</Text>  
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );  
}

export default DateContent; 