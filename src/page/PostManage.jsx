import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Util from '../util/Util';
import postManageStyles from '../style/postManageStyles';
import PostManageHeader from '../component/postManage/PostManageHeader';
import PostManageContent from '../component/postManage/PostManageContent';
import PostManageFooter from '../component/postManage/PostManageFooter';

const PostManage = () => {

  const navigation = useNavigation();
  const[postList, setPostList] = useState([]);      // 게시글
  const[postListCnt, setPostListCnt] = useState();  // 전체게시글 갯수
  const[endYn, setEndYn] = useState('N');           // 삭제여부
  const[strRownum, setStrRownum] = useState(1);     // 가져올 게시글 갯수
  const[endRownum, setEndRownum] = useState(10);    // 가져올 게시글 갯수

  useEffect(() => {
    getPostMstList();
  },[]);

  // 내 게시글 리스트 가져오기
  const getPostMstList = async () => {

    const usrInfo =  await Util.getUsrInfo();
    const url = '/app/getMyPostList.do';
    const data = {'usrId':usrInfo.usrId, 'endYn':endYn, 'strRownum':strRownum, 'endRownum':endRownum};

    const response = await Util.fetchWithNotToken(url, data);
    setPostList(response.myPostList);
    setPostListCnt(response.myPostListCnt);
  };

  const renderItem = (data) => {
    
    const postList = data.item;

    return (
      <View style={postManageStyles().managerSubContainer}>
        <PostManageHeader postList={postList} />
        <PostManageContent postList={postList} />
        <PostManageFooter
          moveAppTeam={moveAppTeam}
          postList={postList}
        />
      </View>
    ); 
  };

  const moveAppTeam = (postList) => {
    navigation.navigate('신청인원관리', {'postList':postList});
  };

  const onEndReached = () => {
    console.log('scroll');
  };

  return (
    <View style={postManageStyles().managerContainer}>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item.postSeq}
        onEndReached={onEndReached}
      />
    </View>
  );  
};

export default PostManage;