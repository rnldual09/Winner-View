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
    const token = await Util.getUsrtoekn();
    const url = '/post/postList.do';
    const data = {'sessionId':usrInfo.usrId};

    const response = await Util.fetchWithToken(url, data, token);
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
