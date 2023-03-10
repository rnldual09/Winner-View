import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import MainItemHeader from './MainItemHeader';
import MainItemContent from './MainItemContent';
import HashTag from './HashTag';
import MainFooter from './MainFooter';
import MainPicture from './MainPicture';
import commonStyles from '../../style/commonStyles';

const MainItem = (props) => {
  
  const { item } = props;

  return (    
    <View style={commonStyles().CommonContainer}>
      <View style={commonStyles().CommonSubContainer}>
       <MainItemHeader item={item} /> 
       <MainPicture imglist={item.imglist} />
       <MainItemContent item={item}/>
       <HashTag item={item} />
       <MainFooter item={item}/>
      </View>
    </View>    
  );  
}

export default MainItem;
