import React from 'react';
import { Text, View, Image } from 'react-native';
import loginStyles from '../../style/loginStyles';
import commonStyles from '../../style/commonStyles';
import { CheckBox } from 'react-native-elements';

const CheckBoxs = (props) => {
  
  const { checked, onPress, text } = props;

  return (
    <View style={{marginTop:10}}>
      <CheckBox
        checked={checked}
        onPress={onPress}        
        title={text}
        checkedIcon={ <Image style={commonStyles(2.2).CommonImage} source={require("../../assets/icon/check.png")} /> }
        uncheckedIcon={ <Image style={commonStyles(2.2).CommonImage}  source={require("../../assets/icon/unCheck.png")} /> }
        textStyle={checked ? loginStyles().checkText : loginStyles().unCheckText}
        containerStyle={loginStyles().checkBox}
      />
    </View>
  );  
}

export default CheckBoxs;
