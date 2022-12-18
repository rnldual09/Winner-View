import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from '../../style/styles';

const MainHeader = () => {

  const navigation = useNavigation();

  return (    
    <View style={styles(0.053).MainHeaderContainer}>
      <View style={{width:'65%', alignItems:'center', justifyContent:'center'}}>
        <Text>로고들어갈곳</Text>
      </View>
      <View style={styles().MainHeaderIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('게시글작성1')}>
          <Image
            source={require("../../assets/icon/newRegist.png")}
            style={styles(0.057).CommonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon/where.png")}
            style={styles(0.053).CommonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/icon/newNotice.png")}
            style={styles(0.057).CommonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default MainHeader;