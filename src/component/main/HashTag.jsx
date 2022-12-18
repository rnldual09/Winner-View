import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../style/styles';

const HashTag = (props) => {
  
  const {item} = props;

  return (    
    <View style={styles().HashTagContainer}>      
      <TouchableOpacity style={{marginRight:5}}>
        <Text style={styles(0.031).Font_1a8cff}># 축구</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight:5}}>
        <Text style={styles(0.031).Font_1a8cff}># 풋살</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight:5}}>
        <Text style={styles(0.031).Font_1a8cff}># 좋은사람</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight:5}}>
        <Text style={styles(0.031).Font_1a8cff}># 좋은자리</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight:5}}>
        <Text style={styles(0.031).Font_1a8cff}># 좋은시간</Text>
      </TouchableOpacity>
    </View>    
  );  
}

export default HashTag;
