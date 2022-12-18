import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import MainItemHeader from './MainItemHeader';
import MainItemContent from './MainItemContent';
import HashTag from './HashTag';
import MainFooter from './MainFooter';
import MainPicture from './MainPicture';
import styles from '../../style/styles';

const MainItem = (props) => {
  
  const {item} = props;

  return (    
    <View style={styles().CommonContainer}>
      <View style={styles().CommonSubContainer}>
       <MainItemHeader /> 
       <MainPicture />
       <MainItemContent />
       <HashTag />
       <MainFooter />
      </View>
    </View>    
  );  
}

export default MainItem;
