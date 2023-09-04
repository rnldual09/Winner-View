import React, { useEffect, useState } from 'react';
import { View, Pressable, Modal, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import modalStyles from '../../style/modalStyles';
import Util from '../../util/Util';
import commonStyles from '../../style/commonStyles';

const MemberModalContent = (props) => {

  const { usrId, searchMateId, possibleCnt, teamMembers, setTeamMembers, onRequestClose, setPossibleCnt } = props;
  
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
    if(possibleCnt < selMateArr.length+1){ //팀원 신청 가능 수 확인
      Alert.alert("신청 가능한 팀원 인원 수를 초과합니다.");
      return;
    }

    for(let i=0; i<teamMembers.length; i++){
      if(teamMembers[i].memId == mateId){
        Alert.alert("이미 선택완료된 인원입니다.");
        return;
      }
    }

    selMateArr.push({'mateId':mateId, 'mateNm':mateNm});
  }
  setSelMateList(selMateArr);
}

const checkImg = (mateId) => {
  let result = require("../../assets/icon/unCheck.png");
  
  selMateList.map((item,index) => {
    if(item.mateId == mateId){
      result = require("../../assets/icon/check.png");
    }
  });
  
  return (
    <View style={{width:'10%'}}>
      <Image
        source={result}
        style={commonStyles(2.2).CommonImage}
      />
    </View>
  );
};

const bringBtnClick = () => {
    let membersArr = [...teamMembers]; //객체 복사
    selMateList.map((item,index) => {
      membersArr.push({memId : item.mateId, memNm : item.mateNm, memGrd : ''});
    });
    setTeamMembers(membersArr);
    setPossibleCnt(possibleCnt-selMateList.length)
    onRequestClose((state) => !state);
};

  return (
    <View
      style={{
        justifyContent:'space-between', height:500, width:'100%'
      }}
    >
      <ScrollView style={{height:'80%', width:'100%'}}>
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
              <View style={{flexDirection:'row'}}>
                {checkImg(item.mateId)}
                <View style={{width:'90%'}}>
                  <Text>{item.mateId}</Text>
                  <Text>{item.mateNm}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={{height:'10%', width:'100%'}}>
        <TouchableOpacity
          style={modalStyles().bringBtn}
          onPress={() => bringBtnClick()}
        >
          <Text style={commonStyles(1.5).Font_fff}>선택완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default MemberModalContent; 