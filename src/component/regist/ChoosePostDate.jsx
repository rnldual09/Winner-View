import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import registStyles from '../../style/registStyles';
import DateUtil from '../../util/DateUtil';
import DateModal from '../../modal/dateModal/DateModal';

const ChoosePostDate = (props) => {

  const { endDt, setEndDt } = props;
  
  const[modalVisible, setModalVisible] = useState(false);  // 모달활성화
  
  // 오늘날짜
  const nowDate = () => {
    const yyyymmdd = DateUtil.returnYYYYMMDD();
    return yyyymmdd.substring(0,4) + '.' + yyyymmdd.substring(4,6) + '.' + yyyymmdd.substring(6,8);
  };

  // endDt 가공
  const returnEndDt = () => {
    if(endDt == '') {
      return '';
    } else {
      return endDt.substring(0,4) + '.' + endDt.substring(4,6) + '.' + endDt.substring(6,8);
    }      
  };

  return (    
    <>
      <View style={registStyles().postDateContainer}>
        <Text style={registStyles().postDateText}>날짜선택</Text>
        <View style={registStyles().postDateSubContainer}>
          <TouchableOpacity
            style={registStyles().postDateBtn}
            onPress={() => setModalVisible((state) => !state)}
          >
            <Text style={registStyles().postDateText2}>날짜선택</Text>
          </TouchableOpacity>
          <View style={registStyles().postDateTextContainer}>
            <Text style={registStyles().postDateText3}>시작날짜 : {nowDate()}</Text>
            <Text style={registStyles().postDateText3}>마감날짜 : {returnEndDt()}</Text>
          </View>
        </View>
      </View>
      <DateModal
        visible={modalVisible}
        onRequestClose={setModalVisible}
        setDate={setEndDt}
      />
    </>
  );  
}

export default ChoosePostDate;