import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';

const MainHeader = () => {

  const navigation = useNavigation();

  return (    
    <View style={mainStyles(0.053).MainHeaderContainer}>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text>로고들어갈곳</Text>
      </View>
      <View style={mainStyles().MainHeaderIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('게시글작성1')}>
          <Image
            source={require("../../assets/icon/newRegist.png")}
            style={commonStyles(2.5).CommonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon/where.png")}
            style={commonStyles(2.5).CommonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon/newNotice.png")}
            style={commonStyles(2.5).CommonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{borderColor:'red', borderWidth:1,marginHorizontal:5}}
          onPress={() => navigation.navigate('마이페이지')}
        >
          <Text>마이페이지</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{borderColor:'red', borderWidth:1,marginHorizontal:5}}
          onPress={() => navigation.navigate('검색조건')}
        >
          <Text>검색필터</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{borderColor:'red', borderWidth:1,marginHorizontal:5}}
          onPress={() => navigation.navigate('친구찾기')}
        >
          <Text>친구찾기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default MainHeader;