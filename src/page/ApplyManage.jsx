import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import applyManageStyles from '../style/applyManageStyles';
import ApplyManageHeader from '../component/applyManage/ApplyManageHeader';
import ApplyTeamManage from '../component/applyManage/ApplyTeamManage';
import ApplyManageTou from '../component/applyManage/ApplyManageTou';

const ApplyManage = ({ route }) => {

  const postList = route.params.postList;
  const[manageType, setManageType] = useState('team');        // 관리타입
 
  return (
    <View style={applyManageStyles().managerContainer}>
      <ApplyManageHeader
        postList={postList}
        manageType={manageType}
        setManageType={setManageType}
      />
      {manageType == 'team' ? (
        <ApplyTeamManage
          postSeq={postList.postSeq}  
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
