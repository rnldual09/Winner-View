import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import mypageStyles from '../style/mypageStyles';
import MyPageMoveBtn from '../component/mypage/MyPageMoveBtn';

const MyPage = ({ route }) => {

  const navigation = useNavigation();

  const moveMyPost = () => {
    navigation.navigate('게시글관리');
  };

  const moveMyTou = () => {
    navigation.navigate('토너먼트');
  };


  return (
    <View style={mypageStyles().mypageContainer}>
      <View style={mypageStyles().mypageSubContainer}>
        <MyPageMoveBtn
          title='게시글관리'
          moveFunc={moveMyPost}
        />
        <MyPageMoveBtn
          title='임시토너먼트관리'
          moveFunc={moveMyTou}
        />
      </View>
    </View>
  );  
};

export default MyPage;
