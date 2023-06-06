import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Util from '../util/Util';

const FindMate = () => {

  const navigation = useNavigation();
  const[userInfo, setUserInfo] = useState('');  // 입력한 검색어
  const[userInfoData, setUserInfoData] = useState([]);
  const[limit, setLimit] = useState(0);
  const[more, setMore] = useState(false);

  useEffect(() => {

    if(userInfo != '') {      
      searchUserInfo('');
    }
  }, [userInfo]);

  const searchUserInfo = async (type) => {

    const dataLimit = type == 'add' ? limit + 3 : limit;
    const data = {'userInfo':userInfo, 'limit':dataLimit};
    const url = '/user/searchUserInfo.do';

    const response = await Util.fetchWithNotToken(url, data);
    response.length < 3 ? setMore(false) : setMore(true);
      
    if(type == 'add') {

      const tempArr = userInfoData.slice();

      for(let i=0; i<response.length; i++) {
        tempArr.push(response[i]);
      }

      setUserInfoData(tempArr);
      setLimit((cnt) => cnt + 3);
    } else {
      setUserInfoData(response);
    }
  };

  // 유저 페이지 이동
  const moveUserPage = (usrId) => {
    navigation.navigate('마이페이지', {'usrId':usrId});
  };

  return (    
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <Text>친구찾기</Text>
      <TextInput
        placeholder='검색어입력'
        value={userInfo}
        onChangeText={(txt) => setUserInfo(txt)}
        style={{borderColor:'red', borderWidth:1}}
      />
      {userInfoData.length != 0 ? (
        <>
          {userInfoData.map((item, index) => (            
            <View
              key={index}
              style={{
                borderColor:'red',
                borderWidth:1,
                marginVertical:5,             
              }}
            >
              <TouchableOpacity
                style={{flexDirection:'row'}}
                onPress={() => moveUserPage(item.usrId)}
              >
                <Image
                  style={{resizeMode:'cover',width:30,height:30,borderRadius:50,}}
                  source={{ uri: 'http://localhost:8080/common/usrProfile.do?imgFileName=' + item.profile}}
                />
                <Text>      아이디 : {item.usrId}</Text>
                <Text>      이름 : {item.usrNm}</Text>                
              </TouchableOpacity>
            </View>
          ))}
          {more ? (
            <TouchableOpacity
              onPress={() => searchUserInfo('add')}
              style={{borderColor:'blue', borderWidth:1, marginTop:10}}
            >
              <Text>더보기</Text>
            </TouchableOpacity>
          ):null}          
        </>
      ):(
        <View
          style={{
            marginTop:20,
          }}
        >
          <Text>!!!!!!!유저없음!!!!!!!!</Text>
        </View>
      )}
    </View>
  );  
}

export default FindMate;