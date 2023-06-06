import React, { useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import MainItem from '../component/main/MainItem'
import MainHeader from '../component/main/MainHeader';
import Util from '../util/Util';
import { useFocusEffect } from "@react-navigation/native";

const Main = () => {

  const [boardData, setBoardData] = useState([]);

  useFocusEffect(  
    useCallback(() => {
      
      getMainList();

    }, []),
  );

  const getMainList = async () => {

    const usrInfo = await Util.getUsrInfo();
    const postFilter = await Util.getPostFilter();
    const url = '/post/postList.do';
    const data = {
      'sessionId':usrInfo.usrId,
      'onlyMate':postFilter.onlyMate,
      'postArea1':postFilter.postArea1,
      'postArea2':postFilter.postArea2,
      'perYn':postFilter.perYn,
      'teamYn':postFilter.teamYn,
      'teamMinCnt':postFilter.teamMinCnt,
      'teamMaxCnt':postFilter.teamMaxCnt,
      'endDt':postFilter.endDt
    };

    const response = await Util.fetchWithNotToken(url, data);
    setBoardData(response); 
  };
  
  // FlatList 로 반복할 컴포넌트
  const RENDERITEM = ({item}) => { return ( <MainItem item={item} /> ); };

  return (
    <>
      <MainHeader />      
      <FlatList
        data={boardData}
        renderItem={RENDERITEM}
        keyExtractor={item => item.postSeq}
      />
    </>
  );  
}

export default Main;
