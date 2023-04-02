import React, { useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../../style/commonStyles';
import registStyles from '../../style/registStyles';

const RegistPicture = () => {

  const addPicture = () => {
    console.log('사진추가');
  };

  return (
    <View style={registStyles(0.01).marginTops}>
      <View style={{flexDirection:'row'}}>     
        <View style={registStyles().registBtnContainer}>
          <TouchableOpacity
            style={registStyles().registBtn}
            onPress={() => addPicture()}
          >
            <Image
              source={require('../../assets/icon/camera.png')}
              style={registStyles().registBtnImg}  
            />
            <Text style={commonStyles(1.4).Font_000}>사진추가</Text>
          </TouchableOpacity>    
        </View>
        <ScrollView horizontal={true}>        
          <Image 
            source={require('../../assets/icon/buni3.jpeg')}
            style={registStyles().addedImg2}
          />        
        </ScrollView>
      </View>
      <View style={registStyles().imgContainer}>
        <Image 
          source={require('../../assets/icon/buni1.jpeg')}
          style={registStyles().addedImg1}
        />
      </View>
    </View>
  );  
}

export default RegistPicture;