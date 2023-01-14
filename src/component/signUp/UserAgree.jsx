import React, { useState } from 'react';
import { Text,TouchableOpacity, View, Image } from 'react-native';
import WebView from 'react-native-webview';
import CommonCheckBox from '../common/CommonCheckBox';

const UserAgree = (props) => {

  const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
  const { OnPress, title, checked, setChecked } = props;
  const [clicked, setClicked] = useState(false);
  const [imgSrc, setImgSrc] = useState(require('../../assets/icon/down.png'));

  const agreeClick = () => {
    
    if(clicked) setImgSrc(require('../../assets/icon/down.png'));
    else setImgSrc(require('../../assets/icon/up.png'));

    setClicked((state) => !state);
  }

  return (
    <View
      style={{        
        marginVertical:10,
        width:'95%'
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          borderBottomColor:'#1a8cff',
          borderBottomWidth:1,
          height:30,
          paddingHorizontal:5
        }}
        onPress={() => agreeClick()}
      >
        <Text>(필수)이용약관 동의</Text>
        <Image 
          source={imgSrc}
          style={{
            width:15,
            height:15,
            resizeMode:'contain',
          }}  
        />
      </TouchableOpacity>
      {clicked ? (
        <>  
          <View
            style={{
              borderLeftColor:'#1a8cff',
              borderLeftWidth:1,
              borderRightColor:'#1a8cff',
              borderRightWidth:1,
              borderBottomColor:'#1a8cff',
              borderBottomWidth:1,
              height:250,
              width:'100%'
            }}
          >
            <WebView
              source={{uri: 'https://www.taxicard.co.kr/AppTaxi/webview/policyService'}}
              injectedJavaScript={INJECTEDJAVASCRIPT} 
              style={{
                backgroundColor:'#fff'
              }}
            />          
          </View>
          <CommonCheckBox
            title="상기내용에 동의합니다."
            checked={checked}
            setChecked={setChecked}
          />
        </>
      ) : (
        null
      )}
      
    </View>
  );  
}

export default UserAgree;
