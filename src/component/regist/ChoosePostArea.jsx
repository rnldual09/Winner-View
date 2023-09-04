import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import registStyles from '../../style/registStyles';
import AreaModal from '../../modal/areaModal/AreaModal';

const ChoosePostArea = (props) => {

  const { setPostArea1, setPostArea2, setPostAreaNm1, setPostAreaNm2, postAreaNm1, postAreaNm2 } = props;
  
  const[modalVisible, setModalVisible] = useState(false);  // 모달활성화

  return (    
    <>
      <View style={registStyles().postAreaContainer}>
        <Text style={registStyles().postAreaText}>지역선택</Text>
        <View style={registStyles().postAreaSubContainer}>
          <TouchableOpacity
            style={registStyles().postAreaBtn}
            onPress={() => setModalVisible((state) => !state)}
          >
            <Text style={registStyles().postAreaText2}>지역선택</Text>
          </TouchableOpacity>
          <View style={registStyles().postAreaTextContainer}>
            <Text style={registStyles().postAreaText3}>선택한 구 : {postAreaNm1}</Text>
            <Text style={registStyles().postAreaText3}>선택한 동 : {postAreaNm2}</Text>
          </View>
        </View>
      </View>
      <AreaModal
        visible={modalVisible}
        onRequestClose={setModalVisible}
        setArea1={setPostArea1}
        setArea2={setPostArea2}
        setAreaNm1={setPostAreaNm1}
        setAreaNm2={setPostAreaNm2}
      />
    </>
  );  
}

export default ChoosePostArea;