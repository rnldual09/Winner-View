import React, { useEffect, useState } from 'react';
import { View, Pressable, Modal, Text, TextInput, TouchableOpacity } from 'react-native';
import modalStyles from '../../style/modalStyles';
import ModalCloseBtn from '../commonModal/ModalCloseBtn';
import MemberModalContent from './MemberModalContent';

const MemberModal = (props) => {

  const { visible, onRequestClose, usrId, possibleCnt, teamMembers, setTeamMembers, setPossibleCnt } = props;

  const[searchMateId, setSearchMateId] = useState(''); // 검색조건 친구ID/명

  const onChangeMateId = (mateId) => {
    setSearchMateId(mateId);
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
          <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'90%'}}>
            <Text>친구</Text>
            <TextInput
              style={{
                borderWidth: 1,
                margin: 10,
                width: 250
              }}
              value={searchMateId}
              onChangeText={(text) => onChangeMateId(text)}
              placeholder="친구 ID/이름"
            />
          </View>
            <MemberModalContent
              usrId={usrId}              
              searchMateId={searchMateId}            
              possibleCnt={possibleCnt}            
              teamMembers={teamMembers}
              setTeamMembers={setTeamMembers}
              onRequestClose={onRequestClose}
              setPossibleCnt={setPossibleCnt}
            />
        </View>
      </Pressable>
    </Modal>
  );  
}

export default MemberModal; 