import React from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../style/styles';

const MainPicture = (props) => {
  
  const {item} = props;

  return (    
    <View style={styles().MainPictureContainer}>
      <Image 
        source={require('../../assets/icon/buni.jpeg')}
        style={styles(0.87).CommonImage}
      />
    </View>    
  );  
}

export default MainPicture;
