import React from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';

const MainPicture = (props) => {
  
  const {item} = props;

  return (    
    <View style={mainStyles().MainPictureContainer}>
      <Image 
        source={require('../../assets/icon/buni.jpeg')}
        style={commonStyles(0.87).CommonImage}
      />
    </View>    
  );  
}

export default MainPicture;
