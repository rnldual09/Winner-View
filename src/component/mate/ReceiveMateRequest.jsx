import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import Util from '../../util/Util';

const ReceiveMateRequest = () => {

  const[receiveMateRequestList, setReceiveMateRequestList] = useState([]);

  useEffect(() => {
    selectReceiveMateRequestList();
  }, []);

  // 받은 친구요청 리스트 조회
  const selectReceiveMateRequestList = async () => {

    const sessionInfo = await Util.getUsrInfo();
    const mateId = sessionInfo.usrId;

    const data = {'mateId':mateId};
    const url = '/user/receiveMateRequestList.do';
    const response = await Util.fetchWithNotToken(url, data);

    setReceiveMateRequestList(response);
  };

  // 친구요청수락
  const acceptMateRequest = async (mateId) => {

    const sessionInfo = await Util.getUsrInfo();
    const usrId = sessionInfo.usrId;

    const data = {'usrId':usrId, 'mateId':mateId, 'acceptYn':'Y'};
    const url = '/user/insertMate.do';
    const response = await Util.fetchWithNotToken(url, data);

    if(response.result == 1) {
      selectReceiveMateRequestList();
    } else if(response.result == -1) {
      alert('상대방이 친구요청을 삭제했습니다');
      selectReceiveMateRequestList();
    } else {
      alert('친구요청을 실패했습니다');
      selectReceiveMateRequestList();
    }
  };

  // 친구요청삭제
  const updateDelYn = async (usrId) => {

    const sessionInfo = await Util.getUsrInfo();
    const mateId = sessionInfo.usrId;

    const data = {'usrId':usrId, 'mateId':mateId, 'delYn':'Y'};
    const url = '/user/updateDelYn.do';
    const response = await Util.fetchWithNotToken(url, data);

    if(response.result == 1) {
      selectReceiveMateRequestList();
    }
  };

  return (    
    <View style={{flex:1, backgroundColor:'#fff'}}>      
      {receiveMateRequestList.map((item, index) => (            
        <View key={index} style={styles().dataList}> 
          <Image
            style={{resizeMode:'cover',width:40,height:40,borderRadius:50}}
            source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=' + item.profile}}
          />
          <Text>아이디 : {item.usrId}   </Text>
          <Text>이름 : {item.usrNm}     </Text>             
          <TouchableOpacity
            style={{borderColor:'red', borderWidth:1, marginRight:5, width:50}}
            onPress={() => acceptMateRequest(item.usrId)}
          >
            <Text>수락</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{borderColor:'blue', borderWidth:1, marginRight:5, width:80}}
            onPress={() => updateDelYn(item.usrId)}
          >
            <Text>받은요청삭제</Text>
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
    height:50
  }
  
});

export default ReceiveMateRequest;