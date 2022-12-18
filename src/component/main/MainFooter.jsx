import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../style/styles';
import axios from 'axios';

const MainFooter = (props) => {
  
  const {item} = props;

  const fetchNotToken = async (  ) => {
    
    const url = '223.38.42.206:8080/common/postList.do';
    const data = {'data1':'data_1','data2':'data_2','data3':'data_3'};
    
    fetch(url, 
    {
      method : 'GET',
     
    }).then(function(response) {
      return response.json();                    
    }).then(function (responseText) {      
      
      console.log(responseText);
  
    }).catch(function(err){
      console.log(err);
    });
  };

  const fetchNotToken2 = async (  ) => {
    
    const response = await axios.get('https://api.ipify.org?format=json');
    console.log(response);
  };

  const fetchNotToken3 = async (  ) => {
    
    const url = 'https://www.taxicard.co.kr/AppTaxi/check/bid';
    const data = {'bidNo':'3122322172'};

    fetch(url, 
    {
      method : 'POST',
      body : JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }).then(function(response) {
      return response.json();                    
    }).then(function (responseText) {      
      console.log(responseText);
    }).catch(function(err){
      console.log(err);
    });
  };


  return (    
    <View style={styles().MainFooterContainer}>
      <TouchableOpacity
        style={styles().MainFooterButton}
        onPress={() => fetchNotToken3()}
      >
        <Image 
          source={require('../../assets/icon/newRegist.png')}
          style={styles().MainFooterImage}
        />
        <Text style={styles(0.03).Font_000}>신청하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles().MainFooterButton}
        onPress={() => fetchNotToken2()}
      >
        <Image 
          source={require('../../assets/icon/message.png')}
          style={styles().MainFooterImage}
        />
        <Text style={styles(0.03).Font_000}>댓글달기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles().MainFooterButton}
        onPress={() => fetchNotToken()}
      >
        <Image 
          source={require('../../assets/icon/white_heart.png')}
          style={styles().MainFooterImage}
        />
        <Text style={styles(0.03).Font_000}>좋아요</Text>
      </TouchableOpacity>
    </View>    
  );  
}

export default MainFooter;
