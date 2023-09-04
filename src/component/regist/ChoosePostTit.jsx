import React from 'react';
import { Text, View, TextInput } from 'react-native';
import registStyles from '../../style/registStyles';

const ChoosePostTit = (props) => {

  const { postTit, setPostTit } = props;

  return (    
    <View style={registStyles().postTitContainer}>
      <Text style={registStyles().postTitText}>제목</Text>
      <TextInput
        style={registStyles().postTitTextInp}
        placeholder='제목을 입력해주세요'
        maxLength={20}
        value={postTit}
        onChangeText={(text) => setPostTit(text)}
      />
    </View>
  );  
}

export default ChoosePostTit;