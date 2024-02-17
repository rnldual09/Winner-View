import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import applyManageStyles from '../../style/applyManageStyles';
import ApplyManageCnf from './ApplyManageCnf';
import Util from '../../util/Util';

const ApplyTeamManage = (props) => {

  const { postSeq } = props;
  
  useEffect(() => {
    getApplyInfoList();
  },[]);

  const[totPerCnt, setTotPerCnt] = useState();                // 개인신청 수
  const[totTeamCnt, setTotTeamCnt] = useState();              // 팀신청 수 
  const[totMemCnt, setTotMemCnt] = useState();                // 전체인원 수 
  const[applyTotUsrList, setApplyTotUsrList] = useState([]);  // 신청리스트
  const[strRownum, setStrRownum] = useState(1);               // 가져올 게시글 갯수
  const[endRownum, setEndRownum] = useState(10);              // 가져올 게시글 갯수
  const[cnfYn, setCnfYn] = useState('Y');                     // 확정 또는 신청
  const[teamSeqArr, setTeamSeqArr] = useState([]);            // 확정 또는 신청에 필요한 팀 seq
  const[moreSeqArr, setMoreSeqArr] = useState([]);            // 확정 또는 신청에 필요한 팀 seq

  const getApplyInfoList = async () => {
    const url = '/app/getApplyInfoList.do';
    const data = {'postSeq':postSeq, 'strRownum':strRownum, 'endRownum':endRownum, 'cnfYn':cnfYn};

    const response = await Util.fetchWithNotToken(url, data);

    setApplyTotUsrList(response.applyTotUsrList);

    const appTotUsrCnt = response.appTotUsrCnt;
    setTotPerCnt(appTotUsrCnt.totPerCnt);
    setTotTeamCnt(appTotUsrCnt.totTeamCnt);
    setTotMemCnt(appTotUsrCnt.totMemCnt);
  };

  // 확정 또는 확정취소
  const saveConfirmYn = async () => {

    const paramCnfYn = cnfYn == 'N' ? 'Y' : 'N';
    const url = '/app/saveConfirmYn.do';
    const data = {'postSeq':postSeq, 'teamSeqArr':teamSeqArr, 'cnfYn':paramCnfYn};
  
    const response = await Util.fetchWithNotToken(url, data);    
  
    if(response.result) {
      setTeamSeqArr([]);
      getApplyInfoList();
    }
  };

  const pushTeamSeq = (teamSeq) => {
    
    const tempTeamSeqArr = teamSeqArr.slice();

    if(teamSeqArr.indexOf(teamSeq) == -1) {
      tempTeamSeqArr.push(teamSeq);
    } else {
      tempTeamSeqArr.splice(teamSeqArr.indexOf(teamSeq), 1);
    }

    setTeamSeqArr(tempTeamSeqArr);
  };

  const pushMoreSeq = (teamSeq) => {
    
    const tempMoreSeqArr = moreSeqArr.slice();

    if(moreSeqArr.indexOf(teamSeq) == -1) {
      tempMoreSeqArr.push(teamSeq);
    } else {
      tempMoreSeqArr.splice(moreSeqArr.indexOf(teamSeq), 1);
    }

    setMoreSeqArr(tempMoreSeqArr);
  };
  
  const renderItem = (data) => {

    const ceoInfo = data.item.ceoInfo;
    const applyTeamList = data.item.applyTeamList;

    return (
      <View style={applyManageStyles().managerTeamContainer}>        
        <TouchableOpacity
          style={teamSeqArr.indexOf(ceoInfo.teamSeq) == -1 ? applyManageStyles().radioBtn1 : applyManageStyles().radioBtn2}
          onPress={() => pushTeamSeq(ceoInfo.teamSeq)}
        />
        {moreSeqArr.indexOf(ceoInfo.teamSeq) == -1 ? (
          <>
            <Image
              style={applyManageStyles().ceoProfile}
              source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=' + ceoInfo.profile}}
            />
            <View>
              <Text style={applyManageStyles().ceoInfo}>대표자명 : {ceoInfo.usrNm}</Text>
              <Text style={applyManageStyles().ceoInfo}>대표자 번호 : {ceoInfo.usrPh}</Text>
              <Text style={applyManageStyles().ceoInfo}>대표자 성별 : {ceoInfo.usrSex}</Text>
              <Text style={applyManageStyles().ceoInfo}>신청명 : {ceoInfo.appType == 'PER' ? '개인신청' : ceoInfo.teamNm}</Text>
              <Text style={applyManageStyles().ceoInfo}>신청 포지션 : {ceoInfo.grdNm}</Text>
            </View>
          </>
        ) : (          
          <>
            {applyTeamList.map((item, index) => (
              <View key={index}>
                <Image
                  style={applyManageStyles().ceoProfile}
                  source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=' + item.profile}}
                />
                <View>
                  <Text style={applyManageStyles().ceoInfo}>대표자명 : {item.usrNm}</Text>
                  <Text style={applyManageStyles().ceoInfo}>대표자 번호 : {item.usrPh}</Text>
                  <Text style={applyManageStyles().ceoInfo}>대표자 성별 : {item.usrSex}</Text>
                  <Text style={applyManageStyles().ceoInfo}>신청명 : {item.appType == 'PER' ? '개인신청' : item.teamNm}</Text>
                  <Text style={applyManageStyles().ceoInfo}>신청 포지션 : {item.grdNm}</Text>
                </View>
              </View>
            ))}   
          </>
        )}
        {ceoInfo.appType == 'TEAM' ? (
          <TouchableOpacity
            style={applyManageStyles().moreBtn}
            onPress={() => pushMoreSeq(ceoInfo.teamSeq)}
          >
            <Text style={applyManageStyles().moreBtnText}>자세히</Text>
          </TouchableOpacity>
        ) : null}        
      </View>
    ); 
  };

  return (
    <>
      <ApplyManageCnf
        totPerCnt={totPerCnt}
        totTeamCnt={totTeamCnt}
        totMemCnt={totMemCnt}
        cnfYn={cnfYn}
        setCnfYn={setCnfYn}
        getApplyInfoList={getApplyInfoList}
        saveConfirmYn={saveConfirmYn}
      />
      <FlatList
        data={applyTotUsrList}
        renderItem={renderItem}
        keyExtractor={item => item.ceoInfo.usrId}
      />     
    </>
  );  
}

export default ApplyTeamManage;