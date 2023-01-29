import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../../style/commonStyles';

const CommonErrMsg = (props) => {
  
  const { errMsg, errState } = props;

  return (
    <>
      {errState ? (
        <View style={commonStyles().commonErrMsgContainer}>
          <Text style={commonStyles().commonErrMsgText}>
            {errMsg}
          </Text>
        </View>
      ) : (
        null
      )}
    </>    
  );  
}

export default CommonErrMsg;
