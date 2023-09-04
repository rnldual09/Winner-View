import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import areaModalStyles from './areaModalStyles';

const AreaModalContent = (props) => {
       
  const { contentArr, setParentCod, setChildCod, parentCod, childCod, childCodNm, setParentCodNm, setChildCodNm, step, setHeaderTitle } = props;

  // 선택한 버튼 디자인 변경 param : 클릭한 버튼의 코드
  const returnButtonStyle = (param) => {
    
    let idx = -1;

    if(step == '1') {
      idx = parentCod.indexOf(param);
    } else {
      idx = childCod.indexOf(param);
    }
    
    if(idx != -1) {
      return areaModalStyles().areaButtonPicked;
    } else {
      return areaModalStyles().areaButtonNotPicked;
    } 
  }

  // 선택한 버튼의 텍스트 디자인 변경 param : 클릭한 버튼의 코드
  const returnTextStyle = (param) => {

    let idx = -1;

    if(step == '1') {
      idx = parentCod.indexOf(param);
    } else {
      idx = childCod.indexOf(param);
    }
    
    if(idx != -1) {
      return areaModalStyles().areaTextPicked;
    } else {
      return areaModalStyles().areaTextNotPicked;
    } 
  }

  const contentClick = (itemCodCd, itemCodNm) => {
    
    if(step == '1') {
      setParentCod(itemCodCd);
      setParentCodNm(itemCodNm);
      setHeaderTitle(itemCodNm);
    } else {

      // 선택내역이 있다면 추가
      if(childCod.indexOf(itemCodCd) == -1) {

        const length = childCod.split("/").length;
        
        if(length == 4) {
          alert('최대 3개 까지만 선택가능합니다');
        } else {
          setChildCod(childCod + itemCodCd + '/');
          setChildCodNm(childCodNm + itemCodNm + '/')
        }
      // 선택내역이 없다면 제거
      } else {
        const tempCodVal = childCod.replace(itemCodCd+'/', '');
        setChildCod(tempCodVal);

        const tempCodNm = childCodNm.replace(itemCodNm+'/', '');
        setChildCodNm(tempCodNm);
      }
    } 
  };

  return (    
    <ScrollView style={{height:200, width:'100%'}}>
      <View style={areaModalStyles().areaContentContainer}>
        {contentArr.map((item, index) => (            
          <TouchableOpacity
            key={index}
            style={returnButtonStyle(item.codCd)}
            onPress={() => contentClick(item.codCd, item.codNm)}
          >
            <Text style={returnTextStyle(item.codCd)}>{item.codNm} {item.cnt}건</Text>               
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );  
}

export default AreaModalContent; 