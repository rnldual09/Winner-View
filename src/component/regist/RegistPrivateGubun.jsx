import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../../style/commonStyles';
import registStyles from '../../style/registStyles';

const RegistPrivateGubun = (props) => {
  
  const { open, priv, setOpen, setPriv } = props;
  
  // 공개 클릭
  const checkOpen = () => {
    setOpen(true);
    setPriv(false);
  };

  // 비공개 클릭
  const checkPrivate = () => {
    setOpen(false);
    setPriv(true);
  };

  return (
  
    <View style={registStyles().registGubunContainer}>
      <TouchableOpacity
        style={open ? registStyles().registGubunCheck : registStyles().registGubunUnCheck}
        onPress={() => checkOpen()}
      >
        <Text style={open ? commonStyles(1.5).Font_fff : commonStyles(1.5).Font_000}>공개</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={priv ? registStyles().registGubunCheck : registStyles().registGubunUnCheck}
        onPress={() => checkPrivate()}
      >
        <Text style={priv ? commonStyles(1.5).Font_fff : commonStyles(1.5).Font_000}>비공개</Text>
      </TouchableOpacity>
    </View>
  );  
}

export default RegistPrivateGubun;
