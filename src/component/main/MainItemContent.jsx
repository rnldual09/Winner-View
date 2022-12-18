import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../style/styles';

const MainItemContent = (props) => {
  
  const [more, setMore] = useState(false);
  const text = '가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사';

  return (    
    <View style={styles().MainItemContentContainer}>
      {text.length <= 60 ? (
        <Text style={styles(0.031).Font_000}>
          {text}
        </Text>
      ):(
        <Text style={styles(0.031).Font_000}>          
          {more ? (
            <>{text}</>
          ) : (
            <>{text.substring(0, 60)} ...<Text onPress={() => setMore(true)} style={{fontSize:11}}>더보기</Text></>
          )}
        </Text>
      )}      
    </View>    
  );  
}

export default MainItemContent;