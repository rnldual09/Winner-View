import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CommentComponent from './CommentComponent';
import ShowHideComment from './ShowHideComment';
import commentStyles from '../../style/commentStyles';

const CommentList = (props) => {

  const { commentList, setCmntSeq, setComment, setWritingText, textInpRef } = props;

  return (
    <ScrollView>
      {commentList.length != 0 ? (
        <>
          {commentList.map((item, index) => (        
            <>
              <CommentComponent
                key={index}
                cmntSeq={item.commentList.cmntSeq}
                usrId={item.commentList.usrId}
                cmntCont={item.commentList.cmntCont}
                insDt={item.commentList.insDt}
                profile={item.commentList.profile}
                setCmntSeq={setCmntSeq}
                setComment={setComment}
                setWritingText={setWritingText}
                textInpRef={textInpRef}
              />
              <View style={{width:'90%', alignSelf:'flex-end'}}>
                {item.commentDetailList.length < 3 ? (
                  <>
                    {item.commentDetailList.map((detailItem, detailIndex) => (                    
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
                  </>
                ) : (
                  <ShowHideComment 
                    commentDetailList={item.commentDetailList}
                    setCmntSeq={setCmntSeq}
                    setComment={setComment}
                    setWritingText={setWritingText}
                    textInpRef={textInpRef}
                  />
                )}
              </View>              
            </>  
          ))}            
        </>
      ) : (
        <View style={commentStyles().noCommentContainer}>
          <Text style={commentStyles().noCommentText}>아직 댓글이 없습니다</Text>
        </View>
      )}
    </ScrollView>
  );  
};

export default CommentList;