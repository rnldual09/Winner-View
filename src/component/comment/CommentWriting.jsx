import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import commentStyles from '../../style/commentStyles';

const CommentWriting = (props) => {

  const { setCmntSeq, writingText, setWritingText, setComment } = props;

  // 답글남기기 취소 시
  const cancelWritingReply = () => {
    setCmntSeq('');     // 댓글번호 초기화
    setWritingText(''); // ~답글 남기는중 초기화
    setComment('');     // 댓글 초기화
  };

  return (
    <View style={commentStyles().writngContainer}>
      <Text style={commentStyles().writingText}>{writingText}</Text>
      <TouchableOpacity
        onPress={() => cancelWritingReply()}
      >
        <Image 
          source={require('../../assets/icon/xIcon.png')}
          style={commentStyles().writingImage}
        />
      </TouchableOpacity>
    </View>    
  );  
};

export default CommentWriting;