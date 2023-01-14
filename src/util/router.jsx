import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabBarScreenOptions } from "./screenOptions";

import Main from '../page/Main';
import Regist from '../page/Regist';
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

const RootStack = createStackNavigator();
const BottomStack = createBottomTabNavigator();

const Router = () => {
  return (
    <RootStack.Navigator>
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
        component={Regist}
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
        options={{headerShown:true}}
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
    </RootStack.Navigator>
  );  
}

export default Router;