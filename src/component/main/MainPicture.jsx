import React, { useEffect, useCallback } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';
import { useFocusEffect } from "@react-navigation/native";
import Swiper from 'react-native-swiper';

const MainPicture = (props) => {
  
  const { imglist } = props;

  useFocusEffect(  
    useCallback(() => {
      

    }, []),
  );  

  return (    
    <>
      {imglist == [] ? (
        null
      ) : (
        <View style={mainStyles().MainPictureContainer}>
          <Swiper
            showsButtons={false} /** < > 버튼 */
            index={0}
            dotStyle={{borderColor:'red', borderWidth:1}}
            dotColor='red'
            activeDotColor='black'
            activeDotStyle={{borderColor:'blue', borderWidth:1}}
          >
            {imglist.map((item, index) => (            
              <Image
                key={index}
                style={{width:'100%', height:'100%'}}
                source={{ uri: 'http://localhost:8080/post/postImageView.do?imgFileName=' + item.svrFile}}
              />
            ))}
          </Swiper>
        </View>
      )}    
    </>
  );  
}

export default MainPicture;

/*
 
*/