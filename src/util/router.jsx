import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabBarScreenOptions } from "./screenOptions";

import Main from '../page/Main';
import Regist1 from '../page/Regist1';
import Regist2 from '../page/Regist2';
import Regist3 from '../page/Regist3';
import Apply from '../page/Apply';
import Login from '../page/Login';
import SignUp1 from '../page/SignUp1';
import SignUp2 from '../page/SignUp2';
import SignUp3 from '../page/SignUp3';
import SignUp4 from '../page/SignUp4';
import FindID1 from '../page/FindID1';
import FindID2 from '../page/FindID2';
import FindPW1 from "../page/FindPW1";
import FindPW2 from "../page/FindPW2";
import FindPW3 from "../page/FindPW3";
import FindPW4 from "../page/FindPW4";
import MyPage from '../page/Mypage';
import PostManage from '../page/PostManage';
import PostFilter from '../page/PostFilter';
import Mate from '../page/Mate';
import Loading from '../page/Loading';
import Comment from '../page/Comment';
import ApplyManage from '../page/ApplyManage';

const RootStack = createStackNavigator();
const BottomStack = createBottomTabNavigator();

const Router = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen 
        name="로딩"
        component={Loading}
        options={{headerShown:false}}
      />
      <RootStack.Screen 
        name="로그인"
        component={Login}
        options={{headerShown:false}}
      />
      <RootStack.Screen 
        name="메인"
        component={Main}
        options={{headerShown:false}}
      />
      <RootStack.Screen 
        name="게시글작성1"
        component={Regist1}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="게시글작성2"
        component={Regist2}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="게시글작성3"
        component={Regist3}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="회원가입1"
        component={SignUp1}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="회원가입2"
        component={SignUp2}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="회원가입3"
        component={SignUp3}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="회원가입4"
        component={SignUp4}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="아이디찾기1"
        component={FindID1}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="아이디찾기2"
        component={FindID2}
        options={{headerShown:false}}
      />
      <RootStack.Screen 
        name="비밀번호찾기1"
        component={FindPW1}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="비밀번호찾기2"
        component={FindPW2}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="비밀번호찾기3"
        component={FindPW3}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="비밀번호찾기4"
        component={FindPW4}
        options={{headerShown:false}}
      />
      <RootStack.Screen 
        name="신청서작성"
        component={Apply}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="마이페이지"
        component={MyPage}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="게시글관리"
        component={PostManage}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="검색조건"
        component={PostFilter}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="친구찾기"
        component={Mate}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="댓글"
        component={Comment}
        options={{headerShown:true}}
      />
      <RootStack.Screen 
        name="신청인원관리"
        component={ApplyManage}
        options={{headerShown:true}}
      />
    </RootStack.Navigator>
  );  
}

export default Router;