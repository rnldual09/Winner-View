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
  const[codVal1, setCodVal1] = useState('');          // 지역 대분류 코드
  const[codVal2, setCodVal2] = useState('');          // 지역 소분류 코
  const[codNm1, setCodNm1] = useState('');            // 지역 대분류 명
  const[codNm2, setCodNm2] = useState('');            // 지역 소분류 명

  const[contentArr, setContentArr] = useState([{}]);  // 지역리스트

  // 모달 활성화 시 값 초기화
  useEffect(() => { 
    if(visible) { 
      setStep('first');
      setCodNm1('');
      setCodNm2('');
      setCodVal2('');
      setHeaderTitle('');
    }
  }, [visible]);

  useEffect(() => {
    // step 바뀔때마다 지역리스트 가져오기
    if(step == 'first')  selectAreaList('');
    if(step == 'second') selectAreaList(codVal1);
  }, [step]);

  const selectAreaList = async (val) => {

    const url = '/common/getCodeList.do';
    const data = {'codId':'AREA_CD', 'codVal1':val};
    const response = await Util.fetchWithNotToken(url, data);

    const tempContentArr = [];

    for(let i=0; i<response.length; i++) {
      const arr = {'codCd':response[i].codCd, 'codNm':response[i].codNm};
      tempContentArr.push(arr);
    }

    setContentArr(tempContentArr);

    // 대분류 지역 화면로드시 기본값 서울로 지정
    if(step == 'first') { 
      setCodVal1(tempContentArr[0].codCd);
      setCodNm1('서울');
    }
  };

  // 다음 이전 클릭 시
  const settingStep = (type) => { setStep(type); };
  // 지역 선택 종료시
  const areaFinish = () => {

    if(codVal2 == '') {
      alert('지역을 선택해주세요');
      return;
    }

    setArea1(codVal1);
    setArea2(codVal2.substring(0, codVal2.length - 1));
    setAreaNm1(codNm1);
    setAreaNm2(codNm2.substring(0, codNm2.length - 1));
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
              codVal1={codVal1}
              codVal2={codVal2}
              setCodVal1={setCodVal1}
              setCodVal2={setCodVal2}
              codNm2={codNm2}
              setCodNm1={setCodNm1}
              setCodNm2={setCodNm2}              
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