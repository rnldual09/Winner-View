import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import applyManageStyles from '../../style/applyManageStyles';

const ApplyManageCnf = (props) => {

  const { totPerCnt, totTeamCnt, totMemCnt, cnfYn, setCnfYn, saveConfirmYn, getApplyInfoList } = props;

  useEffect(() => {
    getApplyInfoList();
  },[cnfYn]);

  return (
    <>
      <View style={applyManageStyles().cnfYnContainer}>
        <View style={applyManageStyles().cnfYnBtnContainer}>
          <TouchableOpacity
            style={cnfYn == 'Y' ? applyManageStyles().cnfYnBtn1 : applyManageStyles().cnfYnBtn2}
            onPress={() => setCnfYn('Y')}
          >
            <Text style={cnfYn == 'Y' ? applyManageStyles().cnfYnBtnText1 : applyManageStyles().cnfYnBtnText2}>확정인원</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={cnfYn == 'N' ? applyManageStyles().cnfYnBtn1 : applyManageStyles().cnfYnBtn2}
            onPress={() => setCnfYn('N')}
          >
            <Text style={cnfYn == 'N' ? applyManageStyles().cnfYnBtnText1 : applyManageStyles().cnfYnBtnText2}>신청인원</Text>
          </TouchableOpacity>
        </View>   
        {cnfYn != '' ? (
          <TouchableOpacity
            style={applyManageStyles().cnfYnBtn1}
            onPress={() => saveConfirmYn()}
          >
            <Text style={applyManageStyles().cnfYnBtnText1}>{cnfYn == 'N' ? '확정하기' : '확정취소'}</Text>
          </TouchableOpacity>
        ) : null}               
      </View>
      <View style={applyManageStyles().cnfYnSubContainer}>
        <Text style={applyManageStyles().cnfYnText}>
          개인신청 : {totPerCnt}명 / 팀신청 : {totTeamCnt}팀 / 신청인원 : {totMemCnt}명
        </Text>
      </View>
    </>
  );  
}

export default ApplyManageCnf;
