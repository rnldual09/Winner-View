import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import applyManageStyles from '../../style/applyManageStyles';
import ApplyManageCnf from './ApplyManageCnf';
import Util from '../../util/Util';
import ApplyTeamManageModal from '../../modal/applyTeamManageModal/ApplyTeamManageModal';

const ApplyTeamManage = (props) => {

  const { applyTeamList, applyTeamListCnt, cnfYn, setCnfYn, getApplyTeamList } = props;
  const[teamSeqArr, setTeamSeqArr] = useState([]);
  const[visible, setVisible] = useState(false);
  const[modalData, setModalData] = useState({});

  const pushSelTeamSeq = (teamSeq) => {
    
    const tempTeamSeqArr = teamSeqArr.slice();

    if(teamSeqArr.indexOf(teamSeq) == -1) {
      tempTeamSeqArr.push(teamSeq);
    } else {
      tempTeamSeqArr.splice(teamSeqArr.indexOf(teamSeq), 1);
    }

    setTeamSeqArr(tempTeamSeqArr);
  };

  // 확정 또는 확정취소
  const saveConfirmYn = async () => {

    const paramCnfYn = cnfYn == 'N' ? 'Y' : 'N';

    const url = '/app/saveConfirmYn.do';
    const data = {'postSeq':applyTeamList[0].postSeq, 'teamSeqArr':teamSeqArr, 'cnfYn':paramCnfYn};
    
    const response = await Util.fetchWithNotToken(url, data);    
    
    if(response.result) {
      setTeamSeqArr([]);
      getApplyTeamList();
    }
  };

  const onRequestOpen = (paramApplyTeamData) => {
    setModalData(paramApplyTeamData);
    setVisible(true);
  };

  const onRequestClose = () => {
    setVisible(false);
  };

  const renderItem = (data) => {
    
    const applyTeamList = data.item;
    
    return (
      <View style={applyManageStyles().managerTeamContainer}>
        {cnfYn != '' ? (
          <TouchableOpacity
            style={teamSeqArr.indexOf(applyTeamList.teamSeq) == -1 ? applyManageStyles().radioBtn1 : applyManageStyles().radioBtn2}
            onPress={() => pushSelTeamSeq(applyTeamList.teamSeq)}
          />
        ) : null}        
        <Image
          style={applyManageStyles().ceoProfile}
          source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=' + applyTeamList.profile}}
        />
        <View>
          <Text style={applyManageStyles().ceoInfo}>대표자명 : {applyTeamList.usrNm}</Text>
          <Text style={applyManageStyles().ceoInfo}>대표자 번호 : {applyTeamList.usrPh}</Text>
          <Text style={applyManageStyles().ceoInfo}>대표자 성별 : {applyTeamList.usrSex}</Text>
        </View>
        <TouchableOpacity
          style={applyManageStyles().moreBtn}
          onPress={() => onRequestOpen(applyTeamList)}
        >
          <Text style={applyManageStyles().moreBtnText}>자세히</Text>
        </TouchableOpacity>
      </View>
    ); 
  };

  return (
    <>
      <ApplyManageCnf
        applyTeamListCnt={applyTeamListCnt}
        cnfYn={cnfYn}
        setCnfYn={setCnfYn}
        saveConfirmYn={saveConfirmYn}
      />
      <FlatList
        data={applyTeamList}
        renderItem={renderItem}
        keyExtractor={item => item.teamSeq}
      />      
      <ApplyTeamManageModal
        visible={visible}
        onRequestClose={onRequestClose}
        applyTeamData={modalData}
      />
    </>
  );  
}

export default ApplyTeamManage;
