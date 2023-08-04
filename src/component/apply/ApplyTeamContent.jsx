import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import commonStyles from '../../style/commonStyles';
import applyStyles from '../../style/applyStyles';
import MemberModal from '../../modal/memberModal/MemberModal';

const ApplyTeamContent = (props) => {

  const { usrId, usrNm, teamMinCnt, teamMaxCnt } = props;

  const [teamMembers, setTeamMembers] = useState([{memId:usrId, memNm:usrNm}]);
  const[memberModalVisible, setMemberModalVisible] = useState(false);  // 모달활성화
  const[possibleCnt, setPossibleCnt] = useState(teamMaxCnt-1);  // 가능한 팀맴버 수

  /** 팀원 추가 버튼 */
  const teamAddBtnClick = () => {
    setPossibleCnt(teamMaxCnt - teamMembers.length); //추가할 수 있는 팀 맴버 수
    setMemberModalVisible(true);
  };
  
  /** 팀원 삭제 버튼 */
  const teamDelBtnClick = (deletedIndex, memId) => {
    if(memId == usrId){
      Alert.alert("자신은 삭제할 수 없습니다.");
      return;
    }
    let membersArr = [...teamMembers]; //객체 복사
    membersArr.splice(deletedIndex, 1);
    setTeamMembers(membersArr);
    setPossibleCnt(possibleCnt+1)
  };

const applyBtnClick = () => {
    
};

  return (
    <View
      style={{
        marginBottom:8, justifyContent:'space-between', height:'100%'
      }}
    >
      <ScrollView>
        <Text>팀원 최소 인원: {teamMinCnt}명</Text>
        <Text>팀원 최대 인원: {teamMaxCnt}명</Text>

        {teamMembers.map((item, index) => (                    
          <View key={index} style={{flexDirection:'row', marginTop:15}}>
            <View style={applyStyles().teamMember}>
              <Text style={{color:'#1a8cff'}}>팀원 {index+1}</Text>
              <Text>ID: {item.memId}</Text>
              <Text>성명: {item.memNm}</Text>
            </View>
            <TouchableOpacity
              style={applyStyles().memDelBtn}
              onPress={() => teamDelBtnClick(index,item.memId)}
            >
              <Text style={commonStyles(1.5).Font_fff}>삭제</Text>
            </TouchableOpacity>
          </View>
        ))}  

        {possibleCnt != 0 ?
          <View style={{ alignItems:'center', width:'100%' }}>
            <TouchableOpacity
              style={applyStyles().teamAddBtn}
              onPress={() => teamAddBtnClick()}
            >
              <Text style={commonStyles(1.5).Font_fff}>팀원 추가</Text>
            </TouchableOpacity>
          </View>
          : null
        }
      </ScrollView>
      <TouchableOpacity
        style={applyStyles().applyBtn}
        onPress={() => applyBtnClick()}
      >
      <MemberModal
        visible={memberModalVisible}
        onRequestClose={setMemberModalVisible}
        usrId={usrId}
        possibleCnt={possibleCnt}
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
        setPossibleCnt={setPossibleCnt}
      />
      <Text style={commonStyles(1.5).Font_fff}>신청하기</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default ApplyTeamContent;
