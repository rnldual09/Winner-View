import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import Util from '../../util/Util';

const MateList = () => {

  const[mateList, setMateList] = useState([]);

  useEffect(() => {
    selectMateList();
  }, []);

  // 보낸 친구요청 리스트 조회
  const selectMateList = async () => {

    const sessionInfo = await Util.getUsrInfo();
    const usrId = sessionInfo.usrId;

    const data = {'usrId':usrId};
    const url = '/user/mateList.do';
    const response = await Util.fetchWithNotToken(url, data);

    setMateList(response);
  };

  const deleteMate = async (mateId) => {

    const sessionInfo = await Util.getUsrInfo();
    const usrId = sessionInfo.usrId;

    const data = {'usrId':usrId, 'mateId':mateId};
    const url = '/user/deleteMate.do';
    const response = await Util.fetchWithNotToken(url, data);

    if(response == 1) {
      selectMateList();
    } else {
      alert('친구삭제실패');
      selectMateList();
    }
  };

  return (    
    <View style={{flex:1, backgroundColor:'#fff'}}>      
      {mateList.map((item, index) => (            
        <View key={index} style={styles().dataList}> 
          <Image
            style={{resizeMode:'cover',width:40,height:40,borderRadius:50}}
            source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=' + item.profile}}
          />
          <Text>아이디 : {item.usrId}   </Text>
          <Text>이름 : {item.usrNm}     </Text>             
          <Text>{item.insDt}일부터친구</Text>
          <TouchableOpacity
            style={{borderColor:'black', borderWidth:1}}
            onPress={() => deleteMate(item.usrId)}
          >
            <Text>친구삭제</Text>
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

export default MateList;