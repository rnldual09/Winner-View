import React from 'react';
import { View, Text } from 'react-native';
import postManageStyles from '../../style/postManageStyles';

const PostManageContent = (props) => {

  const { postList } = props;

  // 전체, 개인, 팀 여부 판별
  const returnTeamType = () => {
    if(postList.perYn == 'Y' && postList.teamYn == 'Y') {
      return '전체'
    } else if(postList.perYn == 'Y' && postList.teamYn == 'N') {
      return '개인';
    } else {
      return '팀';
    }
  };

  const returnTeamCnt = () => {
    const teamType = returnTeamType();

    if(teamType == '개인') {
      return '경기인원 : ' + postList.teamMinCnt;
    } else {
      return '팀 최소인원 : ' + postList.teamMinCnt + ' / 팀 최대인원 : ' + postList.teamMaxCnt;
    }
  };

  return (
    <View style={postManageStyles().contentContainer}>
      <View style={postManageStyles().areaTextContainer}>
        <Text style={postManageStyles().areaText}>지역 : {postList.postArea1}</Text>
        <Text style={postManageStyles().areaText}>{postList.postArea2}</Text>     
      </View>
      <View style={postManageStyles().teamTypeContainer}>
        <Text style={postManageStyles().teamTypeText}>신청방법 : {returnTeamType()}</Text>
        <Text style={postManageStyles().teamTypeText}>{returnTeamCnt()}</Text>
      </View>
    </View>
  );  
};

export default PostManageContent;