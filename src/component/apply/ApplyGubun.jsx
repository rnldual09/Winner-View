import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../../style/commonStyles';
import applyStyles from '../../style/applyStyles';

const ApplyGubun = (props) => {
  
  const { open, priv, setOpen, setPriv } = props;

  // 개인 클릭
  const checkOpen = () => {
    setOpen(true);
    setPriv(false);
  };

  // 팀 클릭
  const checkPrivate = () => {
    setOpen(false);
    setPriv(true);
  };

  return (
  
    <View style={applyStyles().applyGubunContainer}>
      <TouchableOpacity
        style={open ? applyStyles().applyGubunCheck : applyStyles().applyGubunUnCheck}
        onPress={() => checkOpen()}
      >
        <Text style={open ? commonStyles(1.5).Font_fff : commonStyles(1.5).Font_1a8cff}>개인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={priv ? applyStyles().applyGubunCheck : applyStyles().applyGubunUnCheck}
        onPress={() => checkPrivate()}
      >
        <Text style={priv ? commonStyles(1.5).Font_fff : commonStyles(1.5).Font_1a8cff}>팀</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default ApplyGubun;
