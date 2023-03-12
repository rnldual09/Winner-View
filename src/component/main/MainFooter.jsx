import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';
import Util from '../../util/Util';
import { useNavigation } from "@react-navigation/native";

const MainFooter = (props) => {

  const navigation = useNavigation();
  
  const {item} = props;

  return (    
    <View style={mainStyles().MainFooterContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('신청서작성', {'postSeq':item.postSeq})}
        style={mainStyles().MainFooterButton}
      >
        <Image 
          source={require('../../assets/icon/newRegist.png')}
          style={mainStyles().MainFooterImage}
        />
        <Text style={commonStyles(1.5).Font_000}>신청하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={mainStyles().MainFooterButton}
      >
        <Image 
          source={require('../../assets/icon/message.png')}
          style={mainStyles().MainFooterImage}
        />
        <Text style={commonStyles(1.5).Font_000}>댓글달기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={mainStyles().MainFooterButton}
        onPress={() => fetchNotToken()}
      >
        <Image 
          source={require('../../assets/icon/white_heart.png')}
          style={mainStyles().MainFooterImage}
        />
        <Text style={commonStyles(1.5).Font_000}>좋아요</Text>
      </TouchableOpacity>
    </View>    
  );  
}

export default MainFooter;
