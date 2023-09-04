import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import areaModalStyles from './areaModalStyles';

const AreaModalFooter = (props) => {

  const { step, setStep, areaFinish, parentCod, childCod } = props;

  return (
    <View style={areaModalStyles().modalFooterContainer}>
      {step == '1' ?
        (
          <>
            {parentCod != '' ? (
              <TouchableOpacity
                style={areaModalStyles().nextBtn}
                onPress={() => setStep('2')}
              >
                <Text style={areaModalStyles().nextText}>다음</Text>
              </TouchableOpacity>
            ) : null}          
          </>
        )
      :
        (
          <View style={areaModalStyles().footerBtnContainer}>
            <TouchableOpacity
              style={areaModalStyles().beforeBtn}
              onPress={() => setStep('1')}
            >
              <Text style={areaModalStyles().beforeText}>이전</Text>
            </TouchableOpacity>
            {childCod != '' ? (
              <TouchableOpacity
                style={areaModalStyles().nextBtn}
                onPress={() => areaFinish()}
              >
                <Text style={areaModalStyles().nextText}>선택</Text>
              </TouchableOpacity>  
            ) : null}            
          </View>
        )}
      
    </View>
  );  
}

export default AreaModalFooter;