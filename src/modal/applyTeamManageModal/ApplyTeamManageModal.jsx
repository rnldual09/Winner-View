import React, { useEffect, useState } from 'react';
import { View, Pressable, Modal } from 'react-native';
import ModalCloseBtn from './ModalCloseBtn';
import applyTeamManageModalStyles from './applyTeamManageModalStyles';
import Util from '../../util/Util';       
import ApplyTeamManageModalHeader from './ApplyTeamManageModalHeader';
import ApplyTeamManageModalBody from './ApplyTeamManageModalBody';
import ApplyTeamManageModalFooter from './ApplyTeamManageModalFooter';

const ApplyTeamManageModal = (props) => {

  const { visible, onRequestClose, applyTeamData } = props;

  const[postGrdList, setPosstGrdList] = useState([{}]);

  useEffect(() => {
    if(visible) {
      getPostGradeList();
    } 
  },[visible]);

  const getPostGradeList = async () => {
    
    const postSeq = applyTeamData.postSeq;
    const teamSeq = applyTeamData.teamSeq;
    const url = '/app/getPostGradeList.do';
    const data = {'postSeq':postSeq, 'teamSeq':teamSeq};    
    const response = await Util.fetchWithNotToken(url, data);   
    setPosstGrdList(response);
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
        style={applyTeamManageModalStyles().modalContainer}
        onPress={(event) => touchScreen(event)}
      >
        <View style={applyTeamManageModalStyles().modalSubContainer}>          
          <ModalCloseBtn onRequestClose={onRequestClose}/>     
          <ApplyTeamManageModalHeader postGrdList={postGrdList} />            
          <ApplyTeamManageModalBody postGrdList={postGrdList} />
          <ApplyTeamManageModalFooter onRequestClose={onRequestClose} />
        </View>
      </Pressable>
    </Modal>
  );  
}

export default ApplyTeamManageModal; 