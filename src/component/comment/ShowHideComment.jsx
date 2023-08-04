import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import CommentComponent from './CommentComponent';
import commentStyles from '../../style/commentStyles';

const ShowHideComment = (props) => {

  const { commentDetailList, setCmntSeq, setComment, setWritingText, textInpRef } = props;
  const[showState, setShowState] = useState(false);

  return (         
    <>
      {showState ? (
        <>
          {commentDetailList.map((detailItem, detailIndex) => (                    
            <CommentComponent                    
              key={detailIndex}
              cmntSeq={detailItem.cmntSeq}
              usrId={detailItem.usrId}
              cmntCont={detailItem.cmntCont}
              insDt={detailItem.insDt}
              profile={detailItem.profile}
              setCmntSeq={setCmntSeq}
              setComment={setComment}
              setWritingText={setWritingText}
              textInpRef={textInpRef}
            />
          ))}
          <TouchableOpacity
            style={commentStyles().showHideCommentBtn}
            onPress={() => setShowState((state) => !state)}
          >
            <Text style={commentStyles().showHideCommentText}>
              댓글 접기...
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={commentStyles().showHideCommentBtn}
          onPress={() => setShowState((state) => !state)}
        >
          <Text style={commentStyles().showHideCommentText}>
            {commentDetailList.length}개의 댓글 더 보기...
          </Text>
        </TouchableOpacity>
      )}       
    </>              
  );  
};

export default ShowHideComment;