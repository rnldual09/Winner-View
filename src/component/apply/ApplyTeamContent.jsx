import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../../style/commonStyles';
import applyStyles from '../../style/applyStyles';
import MemberBottomSheet from './MemberBottomSheet';

const ApplyTeamContent = (props) => {

  const { usrId, usrNm, teamMinCnt, teamMaxCnt } = props;

  const [teamMembers, setTeamMembers] = useState([{memId:usrId, memNm:usrNm}]);

  /** 팀원 추가 버튼 */
  const teamAddBtnClick = () => {
    let membersArr = [...teamMembers]; //객체 복사
    membersArr.push({memId:'aaa', memNm:'금길영'});
    setTeamMembers(membersArr);
  };
  
  /** 팀원 삭제 버튼 */
  const teamDelBtnClick = (deletedIndex) => {
    let membersArr = [...teamMembers]; //객체 복사
    membersArr.splice(deletedIndex, 1);
    setTeamMembers(membersArr);
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
              onPress={() => teamDelBtnClick(index)}
            >
              <Text style={commonStyles(1.5).Font_fff}>삭제</Text>
            </TouchableOpacity>
          </View>
        ))}  

        
        <View style={{ alignItems:'center', width:'100%' }}
        >
          <TouchableOpacity
            style={applyStyles().teamAddBtn}
            onPress={() => teamAddBtnClick()}
          >
            <Text style={commonStyles(1.5).Font_fff}>팀원 추가</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={applyStyles().applyBtn}
        onPress={() => applyBtnClick()}
      >
        <Text style={commonStyles(1.5).Font_fff}>신청하기</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default ApplyTeamContent;
