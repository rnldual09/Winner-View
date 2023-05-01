import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';

const MainHeader = () => {

  const navigation = useNavigation();

  return (    
    <View style={mainStyles(0.053).MainHeaderContainer}>
      <View style={{width:'65%', alignItems:'center', justifyContent:'center'}}>
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
          onPress={() => console.log('hi')}
        >
          <Text>마이페이지</Text>
        </TouchableOpacity>        
      </View>
    </View>
  );  
}

export default MainHeader;