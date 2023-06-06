import React, { useState } from 'react';
import { View, Pressable, Modal, Text, TouchableOpacity, ScrollView } from 'react-native';
import modalStyles from '../../style/modalStyles';
import commonStyles from '../../style/commonStyles';

const AreaModalContent = (props) => {
       
  const { contentArr, setParentCod, setChildCod, parentCod, childCod, childCodNm, setParentCodNm, setChildCodNm, step, setHeaderTitle } = props;
  const[max, setMax] = useState(0);

  const returnContentStyle = (param) => {
    
    const vali = step == 'first' ? parentCod.indexOf(param) : childCod.indexOf(param);
    
    if(vali != -1) return modalStyles().areaContentPicked;
    else return modalStyles().areaContent;
  }

  const returnContentStyle2 = (param) => {

    const vali = step == 'first' ? parentCod.indexOf(param) : childCod.indexOf(param);

    if(vali != -1) return commonStyles(1.4).Font_fff;
    else return commonStyles(1.4).Font_999;
  }

  const contentClick = (itemCodCd, itemCodNm) => {
    
    if(step == 'first') {
      setParentCod(itemCodCd);
      setHeaderTitle(itemCodNm);
      setParentCodNm(itemCodNm);
    }

    if(step == 'second') {
      if(childCod.indexOf(itemCodCd) == -1) {

        if(max == 3) {
          alert('최대 3개 까지만 선택가능합니다');
        } else {
          setChildCod(childCod + itemCodCd + '/');
          setChildCodNm(childCodNm + itemCodNm + '/')
          setMax((cnt) => cnt + 1);
        }
      } else {
        const tempCodVal = childCod.replace(itemCodCd+'/', '');
        setChildCod(tempCodVal);

        const tempCodNm = childCodNm.replace(itemCodNm+'/', '');
        setChildCodNm(tempCodNm);

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
            <Text style={returnContentStyle2(item.codCd)}>{item.codNm} {item.cnt}건</Text>               
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );  
}

export default AreaModalContent; 