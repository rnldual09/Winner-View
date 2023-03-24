import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import modalStyles from '../../style/modalStyles';
import commonStyles from '../../style/commonStyles';
import { TouchableOpacity } from 'react-native';

const DateHeader = (props) => {

  const { year, setYear, month, setMonth } = props;

  const [leftOpacity, setLeftOpacity] = useState(1);    // < 화살표 투명도
  const [rightOpacity, setRigntOpacity] = useState(1);  // > 화살표 투명도

  useEffect(() => {
    // 화살표 아이콘 세팅
    settingIcon();
  }, [month]);

  // 화살표 아이콘 세팅
  const settingIcon = () => {

    const nowMonth = (new Date()).getMonth() + 1; // 이번달

    // 넘겨받은 달이 이번달이라면 왼쪽 화살표 숨기기
    if(nowMonth == month) {
      setLeftOpacity(0.2);
    // 넘겨받은 달이 이번달 + 3 이라면 오른쪽 화살표 숨기기
    } else if(nowMonth + 3 == month) {
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

  const rihtClick = () => {
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
    <View style={modalStyles().dateHeaderContainer}>
      <View style={modalStyles('column').dateHeaderYearMonth}>
        <Text style={commonStyles(2.1).Font_000}>
          {year}
        </Text>
      </View>
      <View style={modalStyles('row').dateHeaderYearMonth}>
        <TouchableOpacity onPress={() => leftClick()}>
          <Image
            source={require('../../assets/icon/left.png')}
            style={modalStyles(leftOpacity).leftRigntBtn}
          />
        </TouchableOpacity>
        <View style={{marginHorizontal:'15%'}}>
          <Text style={commonStyles(2.1).Font_000}>
            {month}
          </Text>
        </View>
        <TouchableOpacity onPress={() => rihtClick()}>
          <Image
            source={require('../../assets/icon/right.png')}
            style={modalStyles(rightOpacity).leftRigntBtn}
          />
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default DateHeader;
