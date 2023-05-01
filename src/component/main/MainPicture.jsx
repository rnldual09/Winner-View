import React, { useEffect, useCallback } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';
import { SliderBox } from 'react-native-image-slider-box';
import { useFocusEffect } from "@react-navigation/native";

const MainPicture = (props) => {
  
  const { imglist } = props;

  useFocusEffect(  
    useCallback(() => {
      

    }, []),
  );

  [{"imgSeq": 1, "oriFile": "buni1.jpeg", "postSeq": 1, "svrFile": "buni1.jpeg"}, {"imgSeq": 2, "oriFile": "buni4.jpeg", "postSeq": 1, "svrFile": "buni4.jpeg"}]

  return (    
    <>
      {imglist == [] ? (
        null
      ) : (
        <View style={mainStyles().MainPictureContainer}>
          {imglist.map((item, index) => (            
            <Image
              key={index}
              style={commonStyles(42).CommonImage}
              source={{ uri: 'http://localhost:8080/post/postImageView.do?imgFileName=' + item.svrFile}}
            />
          ))}
        </View>
      )}    
    </>
  );  
}

export default MainPicture;

/*
 
*/