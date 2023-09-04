import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import dateModalStyles from './dateModalStyles';

const DateHeader = (props) => {

  const { year, setYear, month, setMonth } = props;

  const [leftOpacity, setLeftOpacity] = useState(1);    // < 화살표 투명도
  const [rightOpacity, setRigntOpacity] = useState(1);  // > 화살표 투명도

  useEffect(() => {    
    settingIconOpaCity(); // 화살표 아이콘 투명도 세팅
  }, [month]);

  // 화살표 아이콘 세팅
  const settingIconOpaCity = () => {

    const nowMonth = (new Date()).getMonth() + 1; // 이번달

    // 넘겨받은 달이 이번달이라면 왼쪽 화살표 숨기기
    if(nowMonth == month) {
      setLeftOpacity(0.2);
      setRigntOpacity(1);
    // 넘겨받은 달이 이번달 + 3 이라면 오른쪽 화살표 숨기기
    } else if(nowMonth + 3 == month) {
      setLeftOpacity(1);
      setRigntOpacity(0.2);
    } else {
      setLeftOpacity(1);
      setRigntOpacity(1);
    } 
  };

  const leftClick = () => {
    // 보는 달이 현재달이라면 이전달로 이동 x
    if(leftOpacity == 1) {
      if(month - 1 == 0) {
        setMonth(12);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    }
  };

  const rightClick = () => {
    // 보는 달이 현재달 + 3 이라면 다음달로 이동 x
    if(rightOpacity == 1) {
      if(month + 1 == 13) {
        setMonth(1);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    }  
  };

  return (
    <View style={dateModalStyles().dateHeaderContainer}>
      <View style={dateModalStyles().dateHeaderYearMonth}>
        <Text style={dateModalStyles().dateHeaderText}>{year}</Text>
      </View>
      <View style={dateModalStyles().dateHeaderYearMonth}>
        <TouchableOpacity onPress={() => leftClick()}>
          <Image
            source={require('../../assets/icon/left.png')}
            style={dateModalStyles(leftOpacity).leftRigntBtn}
          />
        </TouchableOpacity>
        <View style={{marginHorizontal:'15%'}}>
          <Text style={dateModalStyles().dateHeaderText}>{month}</Text>
        </View>
        <TouchableOpacity onPress={() => rightClick()}>
          <Image
            source={require('../../assets/icon/right.png')}
            style={dateModalStyles(rightOpacity).leftRigntBtn}
          />
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default DateHeader;
