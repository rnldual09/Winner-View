import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import postManageStyles from '../../style/postManageStyles';

const PostManageFooter = (props) => {

  const { postList, moveAppTeam } = props;

  return (
    <View style={postManageStyles().footerContainer}>
      <TouchableOpacity
        style={postManageStyles().footerBtn}
        onPress={() => moveAppTeam(postList)}
      >
        <Text style={postManageStyles().footerText}>신청인원</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={postManageStyles().footerBtn}
      >
        <Text style={postManageStyles().footerText}>게시글 수정</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={postManageStyles().footerBtn}
      >
        <Text style={postManageStyles().footerText}>토너먼트 권한부여</Text>
      </TouchableOpacity>
    </View>
  );  
};

export default PostManageFooter;