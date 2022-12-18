import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import MainItem from '../component/main/MainItem'
import MainHeader from '../component/main/MainHeader';

const Main = () => {

  const RENDERITEM = ({item}) => {    
    return (
      <MainItem item={item} />
    );
  };

  // 서버에서 받아올 값
  const DATA = [
    {'boardSeq':'1'},{'boardSeq':'2'},{'boardSeq':'3'},{'boardSeq':'4'},{'boardSeq':'5'},{'boardSeq':'6'},    
  ];
  
  return (
    <>
      <MainHeader />      
      <FlatList
        data={DATA}
        renderItem={RENDERITEM}
        keyExtractor={item => item.boardSeq}
      />
    </>
  );  
}

export default Main;
