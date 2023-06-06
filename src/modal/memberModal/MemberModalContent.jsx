import React, { useEffect, useState } from 'react';
import { View, Pressable, Modal, Text, TouchableOpacity, ScrollView } from 'react-native';
import modalStyles from '../../style/modalStyles';
import Util from '../../util/Util';
import commonStyles from '../../style/commonStyles';

const MemberModalContent = (props) => {

  const { usrId, searchMateId, possibleCnt, modalMateList, setModalMateList } = props;
  
  const[mateList, setMateList] = useState([]); // 친구리스트
  const[selMateList, setSelMateList] = useState([]); // 선택한 친구리스트

  useEffect(() => {
    selectMateList();
  }, [searchMateId]);

  // 친구 리스트 가져오기
  const selectMateList = async () => {
    const url = '/user/getMateList.do';
    const data = {'usrId':usrId, 'mateId':searchMateId};
    const response = await Util.fetchWithNotToken(url, data);
    setMateList(response);
  };

// 체크할 경우 실행될 이벤트
const onMateCheck = (mateId,mateNm) => {
  let chkBool = false; //배열에 있는지 확인 값
  let delIndex; //삭제할 인덱스
  selMateList.map((item,index) => {
    if(item.mateId == mateId){
      chkBool = true;
      delIndex = index;
    }
  });

  let selMateArr = [...selMateList]; //객체 복사
  if(chkBool){
    selMateArr.splice(delIndex, 1);
  }else{
    selMateArr.push({'mateId':mateId, 'mateNm':mateNm});
  }
  setSelMateList(selMateArr);
}

const test = (mateId) => {
  
  let result = '안누름';
  
  selMateList.map((item,index) => {
    if(item.mateId == mateId){
      result = '누름';
    }
  });
  
  return (<Text>{result}</Text>);
};

  return (    
    <ScrollView style={{height:200, width:'100%', borderColor:'black', borderWidth:1}}>
      <View style={{
        width:'90%',
        height:'90%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        alignSelf:'center',
      }}>
        {mateList.map((item, index) => (
          <TouchableOpacity key={index} style={{paddingVertical:15, width:'100%'}} onPress={() => onMateCheck(item.mateId, item.mateNm)}>
            <View>
              <Text>ID: {item.mateId}</Text>
              <Text>성명: {item.mateNm}</Text>
            </View>
            {test(item.mateId)}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );  
}

export default MemberModalContent; 