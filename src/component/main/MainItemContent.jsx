import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';

const MainItemContent = (props) => {
  
  const [more, setMore] = useState(false);
  const { item } = props;

  return (    
    <View style={mainStyles().MainItemContentContainer}>
      {(item.postCont).length <= 60 ? (
        <Text style={commonStyles(0.031).Font_000}>
          {item.postCont}
        </Text>
      ):(
        <Text style={commonStyles(0.031).Font_000}>          
          {more ? (
            <>{item.postCont}</>
          ) : (
            <>
              {item.postCont.substring(0, 60)} 
              ...<Text onPress={() => setMore(true)} style={{fontSize:11}}>더보기</Text>
            </>
          )}
        </Text>
      )}      
    </View>    
  );  
}

export default MainItemContent;