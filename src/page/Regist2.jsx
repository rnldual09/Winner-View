import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import registStyles from '../style/registStyles';
import RegistContent from '../component/regist/RegistContent';
import SelectDate from '../component/regist/SelectDate';
import RegistStepImg from '../component/regist/RegistStepImg';
import SelectTime from '../component/regist/SelectTime';
import NextRegist from '../component/regist/NextRegist';
import RegistHashTag from '../component/regist/RegistHashTag';
import { useNavigation } from '@react-navigation/native';

const Regist2 = () => {

  const [year, setYear] = useState((new Date).getFullYear());     // 년
  const [month, setMonth] = useState((new Date).getMonth() + 1);  // 월
  const [day, setDay] = useState((new Date).getDate() + 1);       // 일
  
  const [amPm, setAmPm] = useState('AM');                         // 오전 오후
  const [hour, setHour] = useState(1);                            // 시간
  const [minute, setMinute] = useState(0);                        // 분
  
  const[postTit, setPostTit] = useState('');                      // 게시글제목
  const[postCont, setPostCont] = useState('');                    // 게시글내용
  
  const[hashTagArr, setHashTagArr] = useState([]);                // 해시태그
  
  const navigation = useNavigation();
  const goNextRegist = () => { navigation.navigate('게시글작성3'); };

  return (        
    <View style={registStyles().registContainer}>      
      <View style={{width:'93%', height:'90%'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <RegistStepImg nowStep='2'/>     
          <SelectDate
            year={year}
            setYear={setYear}
            month={month}
            setMonth={setMonth}
            day={day}
            setDay={setDay}
          />
          <SelectTime
            amPm={amPm}
            setAmPm={setAmPm}
            hour={hour}
            setHour={setHour}
            minute={minute}
            setMinute={setMinute}
          />        
          <RegistContent 
            placeholder='제목을 입력해주세요'
            type='postTit'
            getter={postTit}
            setter={setPostTit}
          /> 
          <RegistContent 
            placeholder='내용을 입력해주세요'
            type='postCont'
            getter={postCont}
            setter={setPostCont}
          />         
          <RegistHashTag
            hashTagArr={hashTagArr}
            setHashTagArr={setHashTagArr}
          />
        </ScrollView>
      </View>  
      <NextRegist
        nowStep='2'
        goNextRegist={goNextRegist}
      />
    </View>
  );  
}

export default Regist2;