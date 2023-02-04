import React, { useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';

const MainPicture = (props) => {
  
  const { imglist } = props;

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