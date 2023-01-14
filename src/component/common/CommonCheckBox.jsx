import React from 'react';
import { Image, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const CommonCheckBox = (props) => {

  const { OnPress, title, checked, setChecked } = props;
  
  return (
    <View
      style={{
        borderColor:'red',
        borderWidth:1,
        width:10
      }}
    >
      <CheckBox
        title={title}
        onPress={() => {setChecked((state) => !state);}}
        checked={checked}
        containerStyle={{
          backgroundColor: "#fff",
          borderColor: "#fff",
          padding: 0,
          margin: 0,
        }}
        textStyle={{
          fontWeight: "700",
          color: "#000",
          fontSize: 13,
        }}
        checkedColor="#3c4dae"
        checkedIcon={
          <Image source={require("../../assets/icon/check.png")} />
        }
        uncheckedIcon={
          <Image åsource={require("../../assets/icon/unCheck.png")} />
        }
      />
    </View> 
  );  
}

export default CommonCheckBox;
