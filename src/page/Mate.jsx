import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FindMate from '../component/mate/FindMate';
import ReceiveMateRequest from '../component/mate/ReceiveMateRequest';
import SendMateRequest from '../component/mate/SendMateRequest';
import MateList from '../component/mate/MateList';

const Mate = () => {

  const[display, setDisplay] = useState('친구찾기');

  const returnDisplay = () => {

    if(display == '친구찾기') { return(<FindMate/>); }
    if(display == '받은친구요청리스트') { return(<ReceiveMateRequest/>); }
    if(display == '보낸친구요청리스트') { return(<SendMateRequest/>); }
    if(display == '친구리스트') { return(<MateList/>); }

  };

  return (    
    <View style={{flex:1, backgroundColor:'#fff'}}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', width:'100%', borderColor:'black', borderWidth:1}}>
        <TouchableOpacity style={{borderColor:'red', borderWidth:1, marginHorizontal:5}} onPress={() => setDisplay('친구찾기')}><Text>친구찾기</Text></TouchableOpacity>
        <TouchableOpacity style={{borderColor:'red', borderWidth:1, marginHorizontal:5}} onPress={() => setDisplay('받은친구요청리스트')}><Text>받은친구요청리스트</Text></TouchableOpacity>
        <TouchableOpacity style={{borderColor:'red', borderWidth:1, marginHorizontal:5}} onPress={() => setDisplay('보낸친구요청리스트')}><Text>보낸친구요청리스트</Text></TouchableOpacity>
        <TouchableOpacity style={{borderColor:'red', borderWidth:1, marginHorizontal:5}} onPress={() => setDisplay('친구리스트')}><Text>친구리스트</Text></TouchableOpacity>
      </View>
      <View style={{width:'100%', height:'95%', marginTop:10}}>
        {returnDisplay()}
      </View>
    </View>
  );  
};

export default Mate;