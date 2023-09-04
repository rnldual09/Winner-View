import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import registStyles from '../../style/registStyles';
import DateUtil from '../../util/DateUtil';
import DateModal from '../../modal/dateModal/DateModal';

const ChoosePostDate = (props) => {

  const { endDt, setEndDt } = props;
  
  const[modalVisible, setModalVisible] = useState(false);  // 모달활성화

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
        <Text style={registStyles().postDateText}>마감날짜선택</Text>
        <View style={registStyles().postDateSubContainer}>
          <TouchableOpacity
            style={registStyles().postDateBtn}
            onPress={() => setModalVisible((state) => !state)}
          >
            <Text style={registStyles().postDateText2}>마감날짜선택</Text>
          </TouchableOpacity>
          <View style={registStyles().postDateTextContainer}>
            <Text style={registStyles().postDateText3}>{returnEndDt()}</Text>
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