import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';

const MainItemHeader = (props) => {
  
  const {item} = props;

  return (    
    <View style={mainStyles().MainItemHeaderContainer}>
      <TouchableOpacity>
        <Image 
          source={require('../../assets/icon/buni.jpeg')}
          style={mainStyles().MainItemHeaderPicture}
        />
      </TouchableOpacity>
      <View style={mainStyles().MainItemHeaderSubContainer}>
        <Text style={mainStyles().MainItemHeaderText}>서울시민리그 공모전을 시작합니다</Text> 
        <Text style={commonStyles(0.03).Font_000}>기간 : 2022.12.31  (모집중)</Text>
        <Text style={commonStyles(0.029).Font_000}>위치 : 부천종합운동장</Text> 
      </View>
    </View>    
  );  
}

export default MainItemHeader;
