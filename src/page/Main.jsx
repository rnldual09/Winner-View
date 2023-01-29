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
      
      getBoardList();

    }, []),
  );

  // 공지사항
  const getBoardList = async () => {

    const url = '/post/postList.do';
    const data = {'sessionId':'sqa923'}
    const token = '';

    const response = await Util.fetchWithToken(url, data, token);
    setBoardData(response);
  };
  
  const RENDERITEM = ({item}) => {    
    return (
      <MainItem item={item} />
    );
  };

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
