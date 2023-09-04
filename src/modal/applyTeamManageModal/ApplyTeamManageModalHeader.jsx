import React from 'react';
import { View, Text } from 'react-native';
import applyTeamManageModalStyles from './applyTeamManageModalStyles'; 

const ApplyTeamManageModalHeader = (props) => {

  const { postGrdList } = props;

  return (
    <View style={applyTeamManageModalStyles().headerContainer}>
      <Text style={applyTeamManageModalStyles().headerText}>{postGrdList[0].teamNm}</Text>
    </View>
  );  
}

export default ApplyTeamManageModalHeader; 