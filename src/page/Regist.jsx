import React from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../style/styles';
import RegistGubun from '../component/regist/RegistGubun';
import RegistPicture from '../component/regist/RegistPicture';
import RegistContent from '../component/regist/RegistContent';

const Regist = () => {

  return (
    <View style={styles().CommonContainer}>
      <View style={styles().CommonSubContainer}>
        <View style={styles(0.04).onlyMargin}>
          <ScrollView>
            <RegistPicture />
            <RegistContent
              placeholder="제목을 입력해주세요"
            />
            <RegistContent
              placeholder="내용을 입력해주세요"
            />
            <RegistGubun
              left="공개"
              right="비공개"
            />
            <RegistGubun
              left="팀"
              right="개인"
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );  
}

export default Regist;
