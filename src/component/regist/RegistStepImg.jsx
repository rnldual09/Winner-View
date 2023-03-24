import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import registStyles from '../../style/registStyles';

const RegistStepImg = (props) => {

  const { nowStep } = props;

  const [src1, setSrc1] = useState(''); // 첫번쩨 동그라미 source
  const [src2, setSrc2] = useState(''); // 두번쩨 동그라미 source
  const [src3, setSrc3] = useState(''); // 세번쩨 동그라미 source

  useEffect(() => { setNowStep(); }, [nowStep]);

  // 현재 보고있는 화면에 따라 이미지 바꾸기
  const setNowStep = () => {

    if(nowStep == "1") {
      setSrc1(require("../../assets/icon/now.png"));
      setSrc2(require("../../assets/icon/prevNext.png"));
      setSrc3(require("../../assets/icon/prevNext.png"));
    } else if(nowStep == "2") {
      setSrc1(require("../../assets/icon/prevNext.png"));
      setSrc2(require("../../assets/icon/now.png"));
      setSrc3(require("../../assets/icon/prevNext.png"));
    } else {
      setSrc1(require("../../assets/icon/prevNext.png"));
      setSrc2(require("../../assets/icon/prevNext.png"));
      setSrc3(require("../../assets/icon/now.png"));
    }
  };

  return (          
    <View style={registStyles().RegistStepImgContainer}>
      <Image 
        source={src1}
        style={registStyles().RegistStepImg}
      />
      <Image 
        source={src2}
        style={registStyles().RegistStepImg}
      />
      <Image 
        source={src3}
        style={registStyles().RegistStepImg}
      />
    </View>                    
  );  
}

export default RegistStepImg;