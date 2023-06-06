import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import Util from '../util/Util';
import Swiper from 'react-native-swiper';

const MyPost = () => {

  const[postData, setPostData] = useState([]);

  useFocusEffect(  
    useCallback(() => {
      
      getPostList();

    }, []),
  );

  const getPostList = async () => {

    const usrInfo = await Util.getUsrInfo();    
    const url = '/post/postList.do';
    const data = {'sessionId':usrInfo.usrId, 'usrId':usrInfo.usrId};

    const response = await Util.fetchWithNotToken(url, data);    
    setPostData(response); 
  };

  const renderItem = ({data}) => {
    return (
      <View style={styles().container}>
        <View style={{alignItems:'center'}}>
          <View style={{width:200, height:200}}>
            <Swiper
              showsButtons={false} /** < > 버튼 */
              index={0}
              dotStyle={{borderColor:'red', borderWidth:1}}
              dotColor='red'
              activeDotColor='black'
              activeDotStyle={{borderColor:'blue', borderWidth:1}}
              loop={false}
            >
              {data.imglist.map((item, index) => (            
                <Image
                  key={index}
                  style={{width:'100%', height:'100%'}}
                  source={{ uri: 'http://localhost:8080/post/postImageView.do?imgFileName=' + item.svrFile}}
                />
              ))}
            </Swiper>
          </View> 
        </View>
        <View style={{alignItems:'center'}}><Text>게시글 제목 : </Text></View>
      </View>
    ); 
  };

  const test2 = (data) => {
    console.log(data)
  };

  const test = ({data}) => {
    return (
      <View><Text>ddd {test2(data)}</Text></View>
    );
  };

  return (
    <View>
      <FlatList
        data={postData}
        renderItem={test}
        keyExtractor={item => item.postSeq}
      />
    </View>
  );  
};

export default MyPost;

const styles = () => StyleSheet.create({
  container:{
    borderColor:'red',
    borderWidth:1,
    marginVertical:20
  },
});