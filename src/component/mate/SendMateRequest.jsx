import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import Util from '../../util/Util';

const SendMateRequest = () => {

  const[sendMateRequestList, setSendMateRequestList] = useState([]);

  useEffect(() => {
    selectSendMateRequestList();
  }, []);

  // 보낸 친구요청 리스트 조회
  const selectSendMateRequestList = async () => {

    const sessionInfo = await Util.getUsrInfo();
    const usrId = sessionInfo.usrId;

    const data = {'usrId':usrId};
    const url = '/user/sendMateRequestList.do';
    const response = await Util.fetchWithNotToken(url, data);

    setSendMateRequestList(response);
  };

  // 보낸요청삭제
  const deleteMateRequest = async (mateId) => {

    const sessionInfo = await Util.getUsrInfo();
    const usrId = sessionInfo.usrId;

    const data = {'usrId':usrId, 'mateId':mateId};
    const url = '/user/deleteMateRequest.do';
    const response = await Util.fetchWithNotToken(url, data);

    if(response.result == 1) {
      selectSendMateRequestList();
    } else if(response.result == -1) {
      alert('상대방이 친구요청을 수락했습니다');
      selectSendMateRequestList();
    } else {
      alert('친구요청삭제를 실패했습니다');
      selectSendMateRequestList();
    }
  };

  return (    
    <View style={{flex:1, backgroundColor:'#fff'}}>      
      {sendMateRequestList.map((item, index) => (            
        <View key={index} style={styles().dataList}> 
          <Image
            style={{resizeMode:'cover',width:40,height:40,borderRadius:50}}
            source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=' + item.profile}}
          />
          <Text>아이디 : {item.usrId}   </Text>
          <Text>이름 : {item.usrNm}     </Text>             
          <Text>{item.delYn == 'Y' ? '친구요청거절됨' : item.insDt + '일에 전송됨'}</Text>
          <TouchableOpacity
            style={{borderColor:'black', borderWidth:1}}
            onPress={() => deleteMateRequest(item.usrId)}
          >
            <Text>보낸요청삭제</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );  
}

const styles = () => StyleSheet.create({
  
  dataList:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    borderColor:'red',
    borderWidth:1,
    height:70,
    flexWrap:'wrap'
  }
  
});

export default SendMateRequest;