import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Regist1 = ({route}) => {

  const navigation = useNavigation();
  const[openYn, setOpenYn] = useState('Y');       // 공개 비공개여부
  const[oriFile, setOriFile] = useState([]);      // 오리지널 파일명
  const[svrFile, setSvrFile] = useState([]);      // 서버 파일명
  const[disFile, setDisFile] = useState([]);      // 화면에 보여지는 파일명
  const[isUpdate, setIsUpdate] = useState(false); // 수정하기 여부

  useEffect(() => {
    init();
  }, []);

  const init = () => {
      
    /*
     * 게시글작성 접근이
     * 내 게시글 수정이 아닌 게시글 작성으로 접근하였을경우
     * 매개변수 postMstData 를 읽을 수 없어 에러 발생하여 try catch 처리
     * 내 게시글 수정으로 접근하였을 경우에는 해당 값들을 초기 값으로 입력함
     */
    try {

      const postMstData = route.params.postMstData;
      const postInfo = postMstData.postInfo;              // 게시글 정보
      const selPostImgList = postMstData.selPostImgList;  // 게시글 사진정보
    
      // 내 게시글 정보로 초기화
      setOpenYn(postInfo.openYn);
    
      const oriFileArr = [];
      const svrFileArr = [];
      const disFileArr = [];

      for(let i=0; i<selPostImgList.length; i++) {

        oriFileArr.push(selPostImgList[i].oriFile);
        svrFileArr.push(selPostImgList[i].svrFile);

        if(selPostImgList[i].oriFile == 'buni1.jpeg') disFileArr.push(require('../assets/test/buni1.jpeg'));
        if(selPostImgList[i].oriFile == 'buni3.jpeg') disFileArr.push(require('../assets/test/buni3.jpeg'));
        if(selPostImgList[i].oriFile == 'buni4.jpeg') disFileArr.push(require('../assets/test/buni4.jpeg'));
        if(selPostImgList[i].oriFile == 'buni5.jpeg') disFileArr.push(require('../assets/test/buni5.jpeg'));
      }
    
      setOriFile(oriFileArr);
      setSvrFile(svrFileArr);
      setDisFile(disFileArr); 

      setIsUpdate(true);
    } catch (e) {
      return;
    }    
  };

  // 사진추가
  const addFile = (name, index) => {
    
    const tempOriFile = oriFile.slice(); 
    const tempSvrFile = svrFile.slice();
    const tempDisFile = disFile.slice();

    tempOriFile.push(name);
    tempSvrFile.push(name);
    
    if(index == 1) tempDisFile.push(require('../assets/test/buni1.jpeg'));
    if(index == 3) tempDisFile.push(require('../assets/test/buni3.jpeg'));
    if(index == 4) tempDisFile.push(require('../assets/test/buni4.jpeg'));
    if(index == 5) tempDisFile.push(require('../assets/test/buni5.jpeg'));
    
    setOriFile(tempOriFile);
    setSvrFile(tempSvrFile);
    setDisFile(tempDisFile);
  };

  // 사진삭제
  const removeFile = (index) => {

    const tempOriFile = oriFile.slice(); 
    const tempSvrFile = svrFile.slice();
    const tempDisFile = disFile.slice();

    tempOriFile.splice(index, 1);
    tempSvrFile.splice(index, 1);
    tempDisFile.splice(index, 1);
    
    setOriFile(tempOriFile);
    setSvrFile(tempSvrFile);
    setDisFile(tempDisFile);
  };

  const goNextRegist = () => { 
    
    // 이미지 추가 안했으면 배열이 아닌 빈값으로 넘김
    if(oriFile.length == 0) {
      navigation.navigate('게시글작성2', {'openYn':openYn, 'oriFile':'', 'svrFile':''});   
    } else {

      let paramOriFile = '';
      let paramSvrFile = '';

      for(let i=0; i<oriFile.length; i++) {
        paramOriFile = paramOriFile + oriFile[i] + '`';
        paramSvrFile = paramSvrFile + svrFile[i] + '`';
      }

      paramOriFile = paramOriFile.substring(0, paramOriFile.length-1);
      paramSvrFile = paramSvrFile.substring(0, paramSvrFile.length-1);

      const naviData = {'openYn':openYn, 'oriFile':paramOriFile, 'svrFile':paramSvrFile};
      if(isUpdate) naviData.postMstData = route.params.postMstData;
      
      navigation.navigate('게시글작성2', naviData); 
    }
  };

  return (    
    <View style={{backgroundColor:'#fff'}}>
      <View style={styles().row}>
        <TouchableOpacity
          style={styles().btn}
          onPress={() => setOpenYn('Y')}
        >
          <Text>공개</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles().btn}
          onPress={() => setOpenYn('N')}
        >
          <Text>비공개</Text>
        </TouchableOpacity>
        <Text>현재상태 : {openYn} {openYn == 'Y' ? '공개' : '비공개'}</Text>
      </View>
      <View style={styles().row}>
        <TouchableOpacity style={styles().btn} onPress={() => addFile('buni1.jpeg', 1)}><Text>buni1 추가</Text></TouchableOpacity>
        <TouchableOpacity style={styles().btn} onPress={() => addFile('buni3.jpeg', 3)}><Text>buni3 추가</Text></TouchableOpacity>
        <TouchableOpacity style={styles().btn} onPress={() => addFile('buni4.jpeg', 4)}><Text>buni4 추가</Text></TouchableOpacity>
        <TouchableOpacity style={styles().btn} onPress={() => addFile('buni5.jpeg', 5)}><Text>buni5 추가</Text></TouchableOpacity>
      </View>
      <View style={styles().row}>
        {disFile.map((item, index) => (       
          <View key={index}>
            <Image
              source={item}
              style={{width:50, height:50}}
            />
            <TouchableOpacity
              onPress={() => removeFile(index)}
              style={styles().btn}
            >
              <Text>삭제</Text>
            </TouchableOpacity>
          </View>             
        ))}
      </View>
      <Text>현재 oriFile : {oriFile}</Text>
      <Text>현재 svrFile : {svrFile}</Text>
      <TouchableOpacity
        onPress={() => goNextRegist()}
        style={styles().btn}
      >
        <Text>다음</Text>
      </TouchableOpacity>
    </View>
  );  
}

const styles = () => StyleSheet.create({

  row:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:15
  },  
  btn:{
    alignItems:'center',
    justifyContent:'center',
    borderColor:'red',
    borderWidth:1,
    marginHorizontal:5,
    width:80,
    height:30
  }

});

export default Regist1;