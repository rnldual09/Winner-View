import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../style/commonStyles';
import RegistGubun from '../component/regist/RegistGubun';
import RegistPicture from '../component/regist/RegistPicture';
import RegistContent from '../component/regist/RegistContent';

const Regist = () => {

  const [open, setOpen] = useState(true);   // 공개여부
  const [priv, setPriv] = useState(false);  // 비공개여부

  return (
    <View style={commonStyles().CommonContainer}>
      <View style={commonStyles().CommonSubContainer}>
        <View style={commonStyles(0.04).onlyMargin}>
            <RegistPicture />
            <RegistGubun
              open={open}
              priv={priv}
              setOpen={setOpen}
              setPriv={setPriv}
            />            
            
            <RegistContent
              placeholder="제목을 입력해주세요"
            />
            <RegistContent
              placeholder="내용을 입력해주세요"
            />
                        
        </View>
      </View>
    </View>
  );  
}

export default Regist;
