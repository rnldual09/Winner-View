import React from 'react';
import { View, Text, Image } from 'react-native';
import applyTeamManageModalStyles from './applyTeamManageModalStyles'; 

const ApplyTeamManageModalBody = (props) => {

  const { postGrdList } = props;

  return (
    <>
      {postGrdList.map((item, index) => (                    
        <View
          style={applyTeamManageModalStyles().bodyContainer}
          key={index}
        >
          <Text style={applyTeamManageModalStyles().postion}>{item.grdNm}</Text>
          <Image
            style={applyTeamManageModalStyles().profile}
            source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=' + item.profile}}
          />
          <View style={applyTeamManageModalStyles().textContainer}>
            <Text style={applyTeamManageModalStyles().profileText}>{item.ceoId == '' ? '팀원명 : ' : '대표자명 : '}{item.usrNm}</Text>
            <Text style={applyTeamManageModalStyles().profileText}>전화번호 : {item.usrPh}</Text>
            <Text style={applyTeamManageModalStyles().profileText}>성별 : {item.usrSex}</Text>
          </View>          
        </View>
      ))}     
    </>
  );  
}

export default ApplyTeamManageModalBody;