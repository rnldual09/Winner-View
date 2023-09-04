import React, { useEffect, useState } from 'react';
import { View, Pressable, Modal } from 'react-native';
import areaModalStyles from './areaModalStyles';
import ModalCloseBtn from './ModalCloseBtn';
import AreaModalHeader from './AreaModalHeader';
import AreaModalContent from './AreaModalContent';
import AreaModalFooter from './AreaModalFooter';
import Util from '../../util/Util';

const AreaModal = (props) => {

  const { visible, onRequestClose, setArea1, setArea2, setAreaNm1, setAreaNm2 } = props;

  const[step, setStep] = useState('');                // 날짜 선택 순서
  const[headerTitle, setHeaderTitle] = useState('');  // 헤더 타이들
  const[parentCod, setParentCod] = useState('');      // 지역 대분류 코드
  const[childCod, setChildCod] = useState('');        // 지역 소분류 코
  const[parentCodNm, setParentCodNm] = useState('');  // 지역 대분류 명
  const[childCodNm, setChildCodNm] = useState('');    // 지역 소분류 명
  const[contentArr, setContentArr] = useState([{}]);  // 지역리스트

  // 모달 활성화 시 값 초기화
  useEffect(() => { 
    if(visible) {       
      setStep('1');
      setParentCod('');
      setChildCod('');
      setParentCodNm('');
      setChildCodNm('');      
    }
  }, [visible]);

  // step 바뀔때마다 지역리스트 가져오기
  useEffect(() => {    
    if(step == '1') {
      selectAreaList('');
      setChildCod('');
    } else {
      selectAreaList(parentCod);
    }    
  }, [step]);

  const selectAreaList = async (codVal1) => {

    const url = '/common/getAreaList.do';
    const data = {'codVal1':codVal1};
    const response = await Util.fetchWithNotToken(url, data);

    const tempContentArr = [];

    for(let i=0; i<response.length; i++) {
      const arr = {'codCd':response[i].codCd, 'codNm':response[i].codNm, 'cnt':response[i].cnt};
      tempContentArr.push(arr);
    }

    setContentArr(tempContentArr);
  };

  // 지역 선택 종료시
  const areaFinish = () => {
    setArea1(parentCod);
    setArea2(childCod.substring(0, childCod.length - 1));
    setAreaNm1(parentCodNm);
    setAreaNm2(childCodNm.substring(0, childCodNm.length - 1));
    onRequestClose((state) => !state);
  };

  // 모달화면 밖 클릭시에만 화면 종료되게함
  const touchScreen = (event) => {
    if(event.target == event.currentTarget) {
      onRequestClose((state) => !state);
    }
  };

  return (
    <Modal
      animationType={"none"}
      transparent={true}
      visible={visible}
      onRequestClose={() => onRequestClose((state) => !state)}
    >
      <Pressable 
        style={areaModalStyles().modalContainer}
        onPress={(event) => touchScreen(event)}
      >
        <View style={areaModalStyles().modalSubContainer}>          
          <ModalCloseBtn onRequestClose={onRequestClose}/>       
          <AreaModalHeader
            headerTitle={headerTitle}
            step={step}  
          />
          <AreaModalContent
            contentArr={contentArr}
            parentCod={parentCod}
            childCod={childCod}
            setParentCod={setParentCod}
            setChildCod={setChildCod}
            childCodNm={childCodNm}
            setParentCodNm={setParentCodNm}
            setChildCodNm={setChildCodNm}              
            step={step}
            setHeaderTitle={setHeaderTitle}              
          />
          <AreaModalFooter
            step={step}
            setStep={setStep}
            areaFinish={areaFinish}
            parentCod={parentCod}
            childCod={childCod}
          />
        </View>
      </Pressable>
    </Modal>
  );  
}

export default AreaModal; 