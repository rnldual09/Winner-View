import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import applyTeamManageModalStyles from './applyTeamManageModalStyles'; 

const ApplyTeamManageModalFooter = (props) => {

  const { onRequestClose } = props;

  return (
    <View style={applyTeamManageModalStyles().footerContainer}>
      <TouchableOpacity
        onPress={() => onRequestClose()}
        style={applyTeamManageModalStyles().endBtn}
      >
        <Text style={applyTeamManageModalStyles().endBtnText}>확인</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default ApplyTeamManageModalFooter; 