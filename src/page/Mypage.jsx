import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Util from '../util/Util';

const MyPage = ({ route }) => {

  const navigation = useNavigation();
  const[myPage, setMyPage] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    
    const usrInfo = await Util.getUsrInfo();
    const usrId = usrInfo.usrId;

    if(usrId == route.params.usrId) {
      setMyPage(true);
    }
  };

  // 친구신청보내기
  const addMate = async () => {
    const usrInfo = await Util.getUsrInfo();
    
    const data = {'usrId':usrInfo.usrId, 'mateId':route.params.usrId};
    const url = '/user/addMate';

    //const response = await Util.fetchWithNotToken(url, data);

  };

  return (
    <View>
      {myPage ? (
        <>
          <Text>내페이지</Text>
          <TouchableOpacity
            style={{borderColor:'red', borderWidth:1, height:30}}
            onPress={() => navigation.navigate('게시글관리')}
          >
            <Text>게시글관리</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>다른사람페이지</Text>
          <TouchableOpacity
            style={{borderColor:'red', borderWidth:1, marginTop:10}}
            onPress={() => addMate()}
          >
            <Text>친구신청보내기</Text>
          </TouchableOpacity>
        </>
      )}    
    </View>
  );  
};

export default MyPage;
