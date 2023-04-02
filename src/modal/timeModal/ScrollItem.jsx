import React, { useEffect, useRef, useState }  from 'react';
import { TouchableWithoutFeedback, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import modalStyles from '../../style/modalStyles';
import commonStyles from '../../style/commonStyles';

const ScrollItem = (props) => {

  const { type, setAmPm, setHour, setMinute } = props;

  const amPmArr = ['','','오전','오전','','','',''];
  const hourArr = ['','','1','2','3','4','5','6','7','8','9','10','11','12','','','',''];
  const [minuteArr, setMinuteArr] = useState([]);
  
  const stopRef = useRef();

  useEffect(() => { settingArr(); }, []);

  // 분 컴포넌트 배열 만들기
  const settingArr = () => {

    const mArr = ['',''];

    for(let i=0; i<=60; i++) { mArr.push( i < 10 ? '0' + i : i ); }
    for(let i=0; i<4; i++)   { mArr.push(''); }
    
    setMinuteArr(mArr);
  };
  
  const stopDrag = (event) => {
    
    const standY = event.nativeEvent.contentOffset.y;

    // 오전오후 스크롤처리
    if(type == 'amPm') {

      resultY = standY < 15 ? 0 : 30;
      resultY == 0 ? setAmPm('AM') : setAmPm('PM');
      
    } else if(type == 'hour') {

      if(standY < 15) {
        resultY = 0;
        setHour(1);
      } else if(315 <= standY ) {
        resultY = 330;
        setHour(12);
      } else {
        
        let cnt = 1;

        for(let i=15; i<=285; i=i+30) {
          if(i <= standY && standY < i + 30) {
            resultY = cnt * 30;
            setHour(cnt + 1);
            break;
          }
          cnt++;
        }
      }
    } else {
      
      if(standY < 15) {
        resultY = 0;
        setMinute(0);
      } else if(1785 <= standY ) {
        resultY = 1800;
        setMinute(60);
      } else {
        
        let cnt = 1;

        for(let i=15; i<=1755; i=i+30) {
          if(i <= standY && standY < i + 30) {
            resultY = cnt * 30;
            setMinute(cnt);
            break;
          }
          cnt++;
        }
      }
    }

    stopRef.current.scrollTo({x: 0, y: resultY, animated: true });
  };

  // 타입별로 컴포넌트 렌더링하기
  const returnComponent = () => {

    let target = [];

    if(type == 'amPm')   target = amPmArr;
    if(type == 'hour')   target = hourArr;
    if(type == 'minute') target = minuteArr;

    return (
      <>
        {target.map((item, index) => (
          <View key={index}>
            <View style={modalStyles().selTimeScrollItem}>
              <Text style={commonStyles(2.2).Font_000}>{item}</Text>
            </View>            
          </View>     
        ))}
      </>
    );  
  };

  return (
    <View style={{height:200}}>      
      <ScrollView
        showsVerticalScrollIndicator={false}        
        onScrollEndDrag={(event) => stopDrag(event)}        
        ref={stopRef}
        decelerationRate='fast'        
      >
        {returnComponent()}      
      </ScrollView>      
    </View>
  );  
}

export default ScrollItem;
