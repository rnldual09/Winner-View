import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import Util from '../../util/Util';

const FindMate = () => {

  const[searchText, setSearchText] = useState('');      // 검색어
  const[searchData, setSearchData] = useState([]);      // 검색내역

  const searchUserInfo = async (text) => {

    if(text == '') {
      setSearchData([]);
      return;
    }

    const sessionInfo = await Util.getUsrInfo();
    const sessionId = sessionInfo.usrId;

    const data = {'searchText':text, 'sessionId':sessionId};
    const url = '/user/getUserList.do';
    const response = await Util.fetchWithNotToken(url, data);

    setSearchData(response);
  };

  const mateType = (mateYn, delYn, insDt, mateId) => {

    if(mateYn == 'Y') { // 친구인 상태
      return (
        <Text>친구</Text>
      );
    } 
    if(insDt == '') { // 친구요청 보낸적 없는 상태
      return (
        <TouchableOpacity
          style={{borderColor:'red', borderWidth:1}}
          onPress={() => sendMateRequest(mateId)}
        >
          <Text>친구요청보내기</Text>
        </TouchableOpacity>
      );
    }
    if(insDt != '' && delYn == 'N') { // 친구요청 보냈으나 상대방이 거절하지 않은 상태
      return (
        <Text>친구요청보낸상태</Text>
      );
    }
    if(insDt != '' && delYn == 'Y') { // 친구요청 보냈으나 상대방이 거절한 상태
      return (
        <TouchableOpacity
          style={{borderColor:'red', borderWidth:1}}
          onPress={() => updateDelYn(mateId)}
        >
          <Text>재요청보내기</Text>
        </TouchableOpacity>
      );
    }
  };

  // 친구요청 보내기
  const sendMateRequest = async (mateId) => {

    const sessionInfo = await Util.getUsrInfo();
    const usrId = sessionInfo.usrId;

    const data = {'usrId':usrId, 'mateId':mateId, 'acceptYn':'N'};
    const url = '/user/insertMate.do';
    const response = await Util.fetchWithNotToken(url, data);

    // 요청전송 성공시 상태 다시 업데이트
    if(response.result == 1) {
      searchUserInfo(searchText);
    } else {
      alert('친구요청실패');
      searchUserInfo(searchText);
    }
  };

  // 친구 재요청 보내기
  const updateDelYn = async (mateId) => {

    const sessionInfo = await Util.getUsrInfo();
    const usrId = sessionInfo.usrId;

    const data = {'usrId':usrId, 'mateId':mateId, 'delYn':'N'};
    const url = '/user/updateDelYn.do';
    const response = await Util.fetchWithNotToken(url, data);

    if(response.result == 1) {
      searchUserInfo(searchText);
    }
  };

  return (    
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <TextInput
        value={searchText}
        onChangeText={(text) => {searchUserInfo(text); setSearchText(text);}}
        placeholder='검색어를 입력해주세요'
        style={styles().textInp}
      />     
      {searchData.length != 0 ? (
        <>
          {searchData.map((item, index) => (            
            <View key={index} style={styles().dataList}> 
              <Image
                style={{resizeMode:'cover',width:40,height:40,borderRadius:50}}
                source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=' + item.profile}}
              />
              <Text>아이디 : {item.usrId}   </Text>
              <Text>이름 : {item.usrNm}     </Text>
              {mateType(item.mateYn, item.delYn, item.insDt, item.usrId)}             
            </View>
          ))}
        </>
      ) : null}       
    </View>
  );  
}

const styles = () => StyleSheet.create({
  
  btnContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  btn:{
    borderColor:'blue',
    borderWidth:1,
    marginHorizontal:5
  },
  textInp:{
    borderColor:'red',
    borderWidth:1,
    marginTop:10
  },
  dataList:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    borderColor:'red',
    borderWidth:1,
    height:50
  }
});

export default FindMate;