import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import registStyles from '../../style/registStyles';

const GradeList = (props) => {

  const { grdArr, setGrdArr } = props;  
  const[checkFlag, setCheckFlag] = useState(false); // 선택하기 클릭유무
  const[checkArr, setCheckArr] = useState([]);      // 선택한 컴포넌트 배열

  // 등급 인원 증가
  const minusGrdCnt = (index) => {    
    if(grdArr[index].grdCnt != 1) {      
      grdArr.splice(index, 1, {'grdNm':grdArr[index].grdNm, 'grdCnt':grdArr[index].grdCnt -1});           
      const copyGrdArr = grdArr.slice();
      setGrdArr(copyGrdArr);
    }
  };

  // 등급 인원 감소
  const plusGrdCnt = (index) => {    
    grdArr.splice(index, 1, {'grdNm':grdArr[index].grdNm, 'grdCnt':grdArr[index].grdCnt + 1});    
    const copyGrdArr = grdArr.slice();
    setGrdArr(copyGrdArr);
  };

  // 삭제할 컴포넌트 클릭
  const checkComponent = (index) => {
    if(checkArr.indexOf(index) == -1) {
      const tempCheckArr = checkArr.slice();
      tempCheckArr.push(index);
      setCheckArr(tempCheckArr);
    } else {
      checkArr.splice(checkArr.indexOf(index), 1);      
      const tempCheckArr = checkArr.slice();
      setCheckArr(tempCheckArr);
    }
  };

  // 선택한 등급 컨포넌트 삭제
  const deleteCheckComponent = () => {
    const resultArr = [];
    
    for(let i=0; i<grdArr.length; i++) {
      if(checkArr.indexOf(i) == -1) {
        resultArr.push(grdArr[i]);
      } else {
        continue;
      }
    }

    setGrdArr(resultArr);
    setCheckArr([]);
  };

  return (    
    <View style={registStyles().gradeListContainer}>
      <View style={registStyles().deleteContainer}>
        {checkFlag ? (
          <>
            <TouchableOpacity onPress={() => deleteCheckComponent()}>
              <Text style={registStyles().deleteText}>삭제하기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setCheckFlag(false); setCheckArr([]);}}>
              <Text style={registStyles().deleteText}>취소</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={() => setCheckFlag(true)}>
            <Text style={registStyles().deleteText}>선택하기</Text>
          </TouchableOpacity>
        )}        
      </View>
      <ScrollView style={registStyles().gradeListSubContainer}>        
        {grdArr != [] ? (
          <>
            {grdArr.map((item, index) => (            
              <View
                key={index}
                style={registStyles().gradeComponent}
              >
                <View style={registStyles().grdNmView}>
                  <Text style={registStyles().grdNmText}>{item.grdNm}</Text>
                </View>
                <View style={registStyles().grdCntView}>
                  {/* 삭제 시 체크할 체크박스 컴포넌트 */}
                  {checkFlag ? (
                    <View style={registStyles().deleteBtnContainer}>
                      <TouchableOpacity
                        style={checkArr.indexOf(index) == -1 ? registStyles().unCheckDeleteBtn : registStyles().checkDeleteBtn}
                        onPress={() => checkComponent(index)}
                      />
                    </View>
                  ) : (                    
                    <>
                      {/* 등급 컴포넌트 */}
                      <TouchableOpacity
                        style={registStyles().grdCntBtn}
                        onPress={() => minusGrdCnt(index)}
                      >
                        <Text style={registStyles().grdCntText}>-</Text>
                      </TouchableOpacity>
                      <View style={registStyles().grdCntView2}>
                        <Text style={registStyles().grdCntText}>{item.grdCnt}</Text>
                      </View>
                      <TouchableOpacity
                        style={registStyles().grdCntBtn}
                        onPress={() => plusGrdCnt(index)}
                      >
                        <Text style={registStyles().grdCntText}>+</Text>
                      </TouchableOpacity>
                    </>  
                  )}                  
                </View>              
              </View>
            ))}   
          </>
        ) : null}            
      </ScrollView>
    </View>
  );  
}

export default GradeList;