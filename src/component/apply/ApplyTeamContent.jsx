import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import commonStyles from '../../style/commonStyles';
import applyStyles from '../../style/applyStyles';
import MemberModal from '../../modal/memberModal/MemberModal';
import { SelectList } from 'react-native-dropdown-select-list';
import Util from '../../util/Util';
import { useNavigation } from '@react-navigation/native';

const ApplyTeamContent = (props) => {
  const navigation = useNavigation();
  const { postSeq, usrId, usrNm, teamMinCnt, teamMaxCnt, possibleCnt, setPossibleCnt, grdList, grdCombo, teamMembers, setTeamMembers, teamNm, setTeamNm } = props;

  const[memberModalVisible, setMemberModalVisible] = useState(false);  // 모달활성화
  

  /** 신청하기 버튼 클릭 */
  const applyBtnClick = async () => {
    if(teamMinCnt > teamMembers.length){
      alert("해당 게시글 최소 인원보다 적습니다.");
      return;
    }

    let failBool = false;
    let grdNotExist = false;
    grdList.forEach((item1) => {
      const grdCnt = item1.grdCnt
      const grdSeq = item1.grdSeq
      const grdNm = item1.grdNm
      const selGrdSeqList = teamMembers.filter((item2) => {
        if(!item2.memGrd){
          grdNotExist = true;
        }
        return item2.memGrd == grdSeq;
      });
      
      if(grdCnt < selGrdSeqList.length){
        alert("등급(포지션)의 "+grdNm+"은(는) "+grdCnt+"명까지 가능합니다.");
        failBool = true;
        return;
      }
    });

    if(!failBool && grdNotExist){
      alert("팀원 중 등급(포지션)을 선택하지 않은 인원이 있습니다.");
      return;
    }

    if(!failBool){
      const url = '/app/insTeamApp.do';
      const data = {
        'postSeq':postSeq,
        'ceoId':usrId,
        'teamNm':teamNm,
        'teamMembers':teamMembers
      };
      await Util.fetchWithNotToken(url, data);
      alert('신청이 완료되었습니다.');
      navigation.navigate('메인');
    }
  };

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

  /** 팀 회원별 등급 select 박스 설정 */
  const selectView = (memberId,index) => {
    let value = '';
    const memberGrd = teamMembers[index]['memGrd'];
    grdCombo.forEach((item, index) => {
      if(item.key == memberGrd) {
        value = item.value;
      };
    });
    
    if(!value){
      return (
        <SelectList 
        setSelected={(val) => setMemGrd(val,index)} 
        data={grdCombo}
        save="key"
        />
        );
    }else{
      return (
        <SelectList 
        setSelected={(val) => setMemGrd(val,index)} 
        data={grdCombo}
        save="key"
        defaultOption={{key:teamMembers[index].memGrd, value:value}}
        />
        );
    }
  }

  /** 등급 넣어주는 함수 */
  const setMemGrd = (val,index) => {
    teamMembers[index].memGrd = val;
    setTeamMembers(teamMembers);
  }

  return (
    <View
      style={{
        marginBottom:8, justifyContent:'space-between', height:'100%'
      }}
    >
      <ScrollView>
        <Text>팀원 최소 인원: {teamMinCnt}명</Text>
        <Text>팀원 최대 인원: {teamMaxCnt}명</Text>

        
        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center', width:'90%'}}>
        <Text>팀명 </Text>
          <TextInput
            style={{
              borderWidth: 1,
              margin: 10,
              width: "90%"
            }}
            value={teamNm}
            onChangeText={(text) => setTeamNm(text)}
            placeholder="팀명을 입력해 주세요"
          />
        </View>

        {teamMembers.map((item, index) => (                    
          <View key={index} style={{flexDirection:'row', marginTop:15}}>
            <View style={applyStyles().teamMember}>
              <Text style={{color:'#1a8cff'}}>팀원 {index+1}</Text>
              <Text>ID: {item.memId}</Text>
              <Text>성명: {item.memNm}</Text>
              <Text>등급(포지션)</Text>
              {selectView(item.memId,index)}
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
