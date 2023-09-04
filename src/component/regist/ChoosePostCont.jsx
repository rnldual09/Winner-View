import React from 'react';
import { Text, View, TextInput } from 'react-native';
import registStyles from '../../style/registStyles';

const ChoosePostCont = (props) => {

  const { postCont, setPostCont } = props;

  return (    
    <View style={registStyles().postContContainer}>
      <Text style={registStyles().postContText}>내용</Text>
      <TextInput
        style={registStyles().postContTextInp}
        placeholder='내용을 입력해주세요'
        maxLength={200}
        multiline={true}
        value={postCont}
        onChangeText={(text) => setPostCont(text)}
      />
    </View>
  );  
}

export default ChoosePostCont;