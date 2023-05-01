import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import modalStyles from '../../style/modalStyles';
import commonStyles from '../../style/commonStyles';

const AreaModalFooter = (props) => {

  const { step, settingStep, areaFinish } = props;

  return (
    <View style={modalStyles().modalFooterContainer}>
      {step == 'first' ?
        (
          <TouchableOpacity
            style={modalStyles().nextBtn2}
            onPress={() => settingStep('second')}
          >
            <Text style={commonStyles(1.8).Font_fff}>다음</Text>
          </TouchableOpacity>
        )
      :
        (
          <View style={modalStyles().footerContainer}>
            <TouchableOpacity
              style={modalStyles().nextBtn1}
              onPress={() => settingStep('first')}
            >
              <Text style={commonStyles(1.8).Font_000}>이전</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={modalStyles().nextBtn2}
              onPress={() => areaFinish()}
            >
              <Text style={commonStyles(1.8).Font_fff}>선택</Text>
            </TouchableOpacity>  
          </View>
        )}
      
    </View>
  );  
}

export default AreaModalFooter;