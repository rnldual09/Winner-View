import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import commentStyles from '../../style/commentStyles';
import Util from '../../util/Util';

const CommentTextInput = (props) => {

  const { postSeq, textInpRef, comment, setComment, cmntSeq, setCmntSeq, setWritingText, getCommentList } = props;
  
  const funcOnChangeText = (txt) => {
    setComment(txt);

    // 텍스트가 없으면 댓글번호 초기화
    if(txt == '') {
      setCmntSeq('');
    }
  };

  // 댓글달기
  const insertComment = async () => {

    if(comment == '') {
      return;
    }

    const usrInfo = await Util.getUsrInfo();
    const usrId = usrInfo.usrId;

    const url = '/post/insertComment.do';
    const data = {'postSeq':postSeq, 'usrId':usrId, 'cmntCont':comment, 'cmntSeq':cmntSeq};
    const response = await Util.fetchWithNotToken(url, data);

    if(response.cnt == '1') {
      setCmntSeq('');
      setComment('');
      setWritingText('');
      getCommentList();
    }
  };

  // 키보드 포커스시
  const funcOnFocus = () => {
    console.log('ddd');
  };

  return (
    <View style={commentStyles().textInpContainer}>
      <TextInput
        style={commentStyles().textInp}
        placeholder='답글 달기'
        ref={textInpRef}
        value={comment}
        onChangeText={(txt) => funcOnChangeText(txt)}
        onFocus={() => funcOnFocus()}
      />
      <TouchableOpacity
        style={commentStyles().textInpBtn}
        onPress={() => insertComment()}
      >
        <Text style={commentStyles().textInpText}>게시</Text>
      </TouchableOpacity>
    </View>
  );  
};

export default CommentTextInput;