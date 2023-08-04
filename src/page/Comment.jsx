import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import CommentList from '../component/comment/CommentList';
import commentStyles from '../style/commentStyles';
import CommentWriting from '../component/comment/CommentWriting';
import CommentTextInput from '../component/comment/CommentTextInput';
import Util from '../util/Util';

const Comment = ({ route }) => {

  const postSeq = route.params.postSeq;               // 넘겨받은 게시글 번호
  const[commentList, setCommentList] = useState([]);  // 댓글 및 답글 리스트
  const[comment, setComment] = useState('');          // 작성한 댓글 및 답글
  const[cmntSeq, setCmntSeq] = useState('');          // 댓글번호
  const[writingText, setWritingText] = useState('');  // ~님께 답글 남기는 중
  const textInpRef = useRef();

  // 댓글 가져오기
  useEffect(() => {
    getCommentList();
  },[]);

  const getCommentList = async () => {

    const url = '/post/commentList.do';
    const data = {'postSeq':postSeq};
    const response = await Util.fetchWithNotToken(url, data);

    setCommentList(response);
  };

  return (
    <View style={commentStyles().commentContainer}>
      <View style={{maxHeight:'85%'}}>
        <CommentList
          commentList={commentList}
          setCmntSeq={setCmntSeq}
          setComment={setComment}
          setWritingText={setWritingText}
          textInpRef={textInpRef}
        />
      </View>
      <View>
        {cmntSeq != '' ? (
          <CommentWriting 
            setCmntSeq={setCmntSeq}
            writingText={writingText}
            setWritingText={setWritingText}
            setComment={setComment}
          />
        ) : null}  
        <CommentTextInput
          postSeq={postSeq}
          textInpRef={textInpRef}
          comment={comment}
          setComment={setComment}
          cmntSeq={cmntSeq}
          setCmntSeq={setCmntSeq}
          setWritingText={setWritingText}
          getCommentList={getCommentList}
        />
      </View>
    </View>
  );  
}



export default Comment;