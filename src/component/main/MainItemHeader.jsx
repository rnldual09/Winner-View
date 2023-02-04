import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';
import Util from '../../util/Util';

const MainItemHeader = (props) => {

  const {item} = props;

  // 프로필파일명 AsyncStorage 에서 가져오기

  return (    
    <View style={mainStyles().MainItemHeaderContainer}>
      <TouchableOpacity>
        <Image
          style={mainStyles(5).MainItemHeaderPicture}
          source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=profile.png'}}
        />
      </TouchableOpacity>
      <View style={mainStyles().MainItemHeaderSubContainer}>
        <Text style={mainStyles().MainItemHeaderText}>{item.postTit}</Text> 
        <Text style={commonStyles(1.5).Font_000}>기간 : {item.endDt}</Text>
        <Text style={commonStyles(1.5).Font_000}>위치 : 부천종합운동장</Text> 
      </View>
    </View>    
  );  
}

export default MainItemHeader;