import React, { useEffect, useState } from 'react';
import { View, Pressable, Modal, Text, TouchableOpacity } from 'react-native';
import modalStyles from '../../style/modalStyles';
import ModalCloseBtn from '../commonModal/ModalCloseBtn';
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
      setParentCod('');
      setChildCod('');
      setParentCodNm('');
      setChildCodNm('');
      setStep('first');
    }
  }, [visible]);

  // step 바뀔때마다 지역리스트 가져오기
  useEffect(() => {    
    if(step == 'first')  selectAreaList('');
    if(step == 'second') selectAreaList(parentCod);
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

    // 대분류 지역 화면로드시 기본값 서울로 지정
    if(step == 'first') { 
      setParentCod(tempContentArr[0].codCd);
      setParentCodNm('서울');
    }
  };

  // 다음 이전 클릭 시
  const settingStep = (type) => { setStep(type); };
  // 지역 선택 종료시
  const areaFinish = () => {

    if(childCodNm == '') {
      alert('지역을 선택해주세요');
      return;
    }

    setArea1(parentCod);
    setArea2(childCod.substring(0, childCod.length - 1));
    setAreaNm1(parentCodNm);
    setAreaNm2(childCodNm.substring(0, childCodNm.length - 1));
    onRequestClose((state) => !state);
  };

  const touchScreen = (event) => {
    // 부모 pressable 클릭시에만
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
        style={modalStyles().modalContainer}
        onPress={(event) => touchScreen(event)}
      >
        <View style={modalStyles().modalSubContainer}>          
          <View style={modalStyles().modalCloseBtnContainer}>
            <ModalCloseBtn onRequestClose={onRequestClose}/>
          </View>          
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
              settingStep={settingStep}
              areaFinish={areaFinish}
            />
        </View>
      </Pressable>
    </Modal>
  );  
}

export default AreaModal; 