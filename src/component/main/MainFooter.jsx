import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';
import Util from '../../util/Util';

const MainFooter = (props) => {
  
  const {item} = props;

  const fetchNotToken = async (  ) => {
  
    const url = '/post/postList.do';
    const data = {};

    const responseText = await Util.fetchWithNotToken(url, data);    
    console.log(responseText);
  };

  return (    
    <View style={mainStyles().MainFooterContainer}>
      <TouchableOpacity
        style={mainStyles().MainFooterButton}
      >
        <Image 
          source={require('../../assets/icon/newRegist.png')}
          style={mainStyles().MainFooterImage}
        />
        <Text style={commonStyles(0.03).Font_000}>신청하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={mainStyles().MainFooterButton}
      >
        <Image 
          source={require('../../assets/icon/message.png')}
          style={mainStyles().MainFooterImage}
        />
        <Text style={commonStyles(0.03).Font_000}>댓글달기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={mainStyles().MainFooterButton}
        onPress={() => fetchNotToken()}
      >
        <Image 
          source={require('../../assets/icon/white_heart.png')}
          style={mainStyles().MainFooterImage}
        />
        <Text style={commonStyles(0.03).Font_000}>좋아요</Text>
      </TouchableOpacity>
    </View>    
  );  
}

export default MainFooter;
