import React from 'react';
import { View, Text } from 'react-native';
import postManageStyles from '../../style/postManageStyles';

const PostManageHeader = (props) => {

  const { postList } = props;

  return (
    <View style={postManageStyles().headerContainer}>
      <Text style={postManageStyles().insDtText}>게시날짜 : {postList.insDt}</Text>
      <Text style={postManageStyles().postTitText}>{postList.postTit}</Text>      
    </View>
  );  
};

export default PostManageHeader;