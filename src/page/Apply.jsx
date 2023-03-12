import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../style/commonStyles';
import Util from '../util/Util';
import ApplyGubun from '../component/apply/ApplyGubun';
import ApplyContent from '../component/apply/ApplyContent';

const Apply = ({ route }) => {

  useEffect(() => {
    getPostInfo();
  }, [])

  const postSeq = route.params.postSeq;

  let postInfo;

  const getPostInfo = async () => {
    const url = '/post/getPostInfo.do';
    const data = {'postSeq':postSeq};
      
    postInfo = await Util.fetchWithNotToken(url, data);
    console.log('postInfo: ',postInfo)
  }
  

  const [open, setOpen] = useState(true);   // 공개여부
  const [priv, setPriv] = useState(false);  // 비공개여부

  return (
    <View style={commonStyles().CommonContainer}>
      <View style={commonStyles().CommonSubContainer}>
        <View style={commonStyles(0.04).onlyMargin}>
            <ApplyGubun
              open={open}
              priv={priv}
              setOpen={setOpen}
              setPriv={setPriv}
            />
            <ApplyContent />  
        </View>
      </View>
    </View>
  );  
}

export default Apply;
