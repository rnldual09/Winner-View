import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';
import Util from '../../util/Util';
import { useNavigation } from '@react-navigation/native';

const MainItemHeader = (props) => {

  const {item} = props;
  const navigation = useNavigation();

  const[myId, setMyId] = useState('');

  useEffect(() => { getUsrInfo(); }, []);

  const getUsrInfo = async () => {
    const usrInfo = await Util.getUsrInfo();
    const usrId = usrInfo.usrId;

    setMyId(usrId);
  };

  const updateRegist = async () => {

    const url = '/post/getPostInfo.do';
    const data = {'postSeq':item.postSeq};
    const postMstData = await Util.fetchWithNotToken(url, data);

    navigation.navigate('게시글작성1', {'postMstData':postMstData});
  };

  return (    
    <View style={mainStyles().MainItemHeaderContainer}>
      <TouchableOpacity>
        <Image
          style={mainStyles(5).MainItemHeaderPicture}
          source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=' + item.profile}}
        />
      </TouchableOpacity>
      <View style={mainStyles().MainItemHeaderSubContainer}>
        <Text style={mainStyles().MainItemHeaderText}>{item.postTit}</Text> 
        <Text style={commonStyles(1.5).Font_000}>기간 : {item.endDt}</Text>
        <Text style={commonStyles(1.5).Font_000}>위치 : 부천종합운동장</Text> 
      </View>          
    </View>    
  );  
}

export default MainItemHeader;