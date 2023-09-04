import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import mypageStyles from '../../style/mypageStyles';

const MyPageMoveBtn = (props) => {

  const { title, moveFunc } = props;

  return (
    <TouchableOpacity
      style={mypageStyles().moveBtnContainer}
      onPress={() => moveFunc()}
    >
      <Text style={mypageStyles().moveBtnText}>{title}</Text>
      <Image
        style={mypageStyles().moveBtnImg}
        source={require('../../assets/icon/right.png')}
      />
    </TouchableOpacity>          
  );  
};

export default MyPageMoveBtn;
