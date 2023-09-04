import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import Util from '../util/Util';
import applyManageStyles from '../style/applyManageStyles';
import ApplyManageHeader from '../component/applyManage/ApplyManageHeader';
import ApplyTeamManage from '../component/applyManage/ApplyTeamManage';
import ApplyManageTou from '../component/applyManage/ApplyManageTou';

const ApplyManage = ({ route }) => {

  const postList = route.params.postList;
  const[applyTeamList, setApplyTeamList] = useState([]);      // 신청인원 리스트
  const[applyTeamListCnt, setApplyTeamListCnt] = useState();  // 신청인원 갯수
  const[strRownum, setStrRownum] = useState(1);               // 가져올 게시글 갯수
  const[endRownum, setEndRownum] = useState(10);              // 가져올 게시글 갯수
  const[manageType, setManageType] = useState('team');        // 관리타입
  const[cnfYn, setCnfYn] = useState('');
 
  useEffect(() => {
    getApplyTeamList();
  },[cnfYn]);

  const getApplyTeamList = async () => {
    const url = '/app/getApplyTeamList.do';
    const data = {'postSeq':postList.postSeq, 'strRownum':strRownum, 'endRownum':endRownum, 'cnfYn':cnfYn};

    const response = await Util.fetchWithNotToken(url, data);
    setApplyTeamList(response.applyTeamList);
    setApplyTeamListCnt(response.applyTeamCnt);
  };

  return (
    <View style={applyManageStyles().managerContainer}>
      <ApplyManageHeader
        postList={postList}
        manageType={manageType}
        setManageType={setManageType}
      />
      {manageType == 'team' ? (
        <ApplyTeamManage
          applyTeamList={applyTeamList}
          applyTeamListCnt={applyTeamListCnt}
          cnfYn={cnfYn}
          setCnfYn={setCnfYn}
          getApplyTeamList={getApplyTeamList}
        />
      ) : (
        <ApplyManageTou

        />
      )}      
      <View style={{borderColor:'red',borderWidth:1,height:100}}>
        <Text>하단메뉴 들어갈곳</Text>
      </View>
    </View>
  );  
}

export default ApplyManage;
