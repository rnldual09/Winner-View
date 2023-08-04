import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import commentStyles from '../../style/commentStyles';
import { useNavigation } from '@react-navigation/native';

const CommentComponent = (props) => {
  
  const navigation = useNavigation();
  const { cmntSeq, usrId, cmntCont, insDt, profile, setCmntSeq, setComment, setWritingText, textInpRef } = props;

  // 답글달기
  const writingReply = () => {
    textInpRef.current.focus(); // 키보드 포커싱
    setCmntSeq(cmntSeq);        // 댓글번호
    setComment('@' + usrId + ' ');    // 댓글
    setWritingText(usrId + '님께 답글 남기는 중');
  };

  return (
    <View style={commentStyles().componentContainer}>
      <View style={commentStyles().componentImgContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('마이페이지', {'usrId':usrId})}
        >
          <Image
            source={{uri:'http://localhost:8080/common/usrProfile.do?imgFileName=' + profile}}
            style={commentStyles().componentImg}
          />
        </TouchableOpacity>
      </View>
      <View style={commentStyles().componentTextContainer}>
        <Text style={commentStyles().componentText1}>{usrId} {insDt}</Text>
        <Text style={commentStyles().componentText1}>{cmntCont}</Text>
        <TouchableOpacity
          onPress={() => writingReply()}
        >
          <Text style={commentStyles().componentText2}>답글달기</Text>
        </TouchableOpacity>
      </View>
    </View>  
  );  
};

export default CommentComponent;