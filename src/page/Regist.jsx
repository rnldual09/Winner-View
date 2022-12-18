import React from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../style/commonStyles';
import RegistGubun from '../component/regist/RegistGubun';
import RegistPicture from '../component/regist/RegistPicture';
import RegistContent from '../component/regist/RegistContent';

const Regist = () => {

  return (
    <View style={commonStyles().CommonContainer}>
      <View style={commonStyles().CommonSubContainer}>
        <View style={commonStyles(0.04).onlyMargin}>
          <ScrollView>
            <RegistGubun />            
            <RegistContent
              placeholder="제목을 입력해주세요"
            />
            <RegistContent
              placeholder="내용을 입력해주세요"
            />
            <RegistPicture />            
          </ScrollView>
        </View>
      </View>
    </View>
  );  
}

export default Regist;
