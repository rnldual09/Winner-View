import React, { useState } from 'react';
import { View, Pressable, Modal, Text, TouchableOpacity, ScrollView } from 'react-native';
import modalStyles from '../../style/modalStyles';
import commonStyles from '../../style/commonStyles';

const AreaModalContent = (props) => {

  const { contentArr, setCodVal1, setCodVal2, codVal1, codVal2, codNm2, setCodNm1, setCodNm2, step, setHeaderTitle } = props;
  const[max, setMax] = useState(0);

  const returnContentStyle = (param) => {
    
    const vali = step == 'first' ? codVal1.indexOf(param) : codVal2.indexOf(param);
    
    if(vali != -1) return modalStyles().areaContentPicked;
    else return modalStyles().areaContent;
  }

  const returnContentStyle2 = (param) => {

    const vali = step == 'first' ? codVal1.indexOf(param) : codVal2.indexOf(param);

    if(vali != -1) return commonStyles(1.6).Font_fff;
    else return commonStyles(1.6).Font_999;
  }

  const contentClick = (itemCodCd, itemCodNm) => {
    
    if(step == 'first') {
      setCodVal1(itemCodCd);
      setHeaderTitle(itemCodNm);
      setCodNm1(itemCodNm);
    }

    if(step == 'second') {
      if(codVal2.indexOf(itemCodCd) == -1) {

        if(max == 3) {
          alert('최대 3개 까지만 선택가능합니다');
        } else {
          setCodVal2(codVal2 + itemCodCd + '/');
          setCodNm2(codNm2 + itemCodNm + '/')
          setMax((cnt) => cnt + 1);
        }
      } else {
        const tempCodVal = codVal2.replace(itemCodCd+'/', '');
        setCodVal2(tempCodVal);

        const tempCodNm = codNm2.replace(itemCodNm+'/', '');
        setCodNm2(tempCodNm);

        setMax((cnt) => cnt - 1);
      }
    }
  };

  return (    
    <ScrollView style={{height:200, width:'100%'}}>
      <View style={modalStyles().areaContentContainer}>
        {contentArr.map((item, index) => (            
          <TouchableOpacity
            key={index}
            style={returnContentStyle(item.codCd)}
            onPress={() => contentClick(item.codCd, item.codNm)}
          >
            <Text style={returnContentStyle2(item.codCd)}>{item.codNm}</Text>               
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );  
}

export default AreaModalContent; 