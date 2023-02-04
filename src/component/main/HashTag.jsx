import React, { useEffect, useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../style/mainStyles';
import commonStyles from '../../style/commonStyles';

const HashTag = (props) => {

  useEffect(() => {
    checkNull();
  }, []);

  const {item} = props;
  const [hashTag, setHashTag] = useState([]);

  const checkNull = () => {
    if((item.hashTag)){
      setHashTag((item.hashTag).split(','));
    }
  };

  return (    
    <>
      {hashTag == [] ? (
        null
      ) : (
        <View style={mainStyles().HashTagContainer}>
          {hashTag.map((item, index) => (            
            <TouchableOpacity
              key={index}
              style={{marginRight:5}}
            >
              <Text style={commonStyles(1.5).Font_1a8cff}>#{item}</Text>
            </TouchableOpacity>            
          ))}   
        </View> 
      )}    
    </>
  );  
}

export default HashTag;
