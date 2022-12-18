import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabBarScreenOptions } from "./screenOptions";

import Main from '../page/Main';
import Regist from '../page/Regist';

const RootStack = createStackNavigator();
const BottomStack = createBottomTabNavigator();

const Router = () => {
  return (
    <RootStack.Navigator>
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
        name="바텀"
        component={BottomStackRouter}
        options={{headerShown:true}}
      />
    </RootStack.Navigator>
  );  
}

const BottomStackRouter = () => {
  return (
    <BottomStack.Navigator screenOptions={tabBarScreenOptions}>
      <BottomStack.Screen
        name="Home1"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon/red_heart.png")}
            />
          ),
        }}
      />
      <BottomStack.Screen
        name="Home2"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon/red_heart.png")}
            />
          ),
        }}
      />
      <BottomStack.Screen
        name="Home3"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon/red_heart.png")}
            />
          ),
        }}
      />
      <BottomStack.Screen
        name="Home4"
        component={Main}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/icon/red_heart.png")}
            />
          ),
        }}
      />
    </BottomStack.Navigator>
  );  
}

export default Router;