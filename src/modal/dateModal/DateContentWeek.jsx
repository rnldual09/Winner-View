import React from 'react';
import { View, Text } from 'react-native';
import modalStyles from '../../style/modalStyles';
import commonStyles from '../../style/commonStyles';

const DateContentWeek = () => {

  return (
    <View style={modalStyles('12%').dateContentSubContainer}>
      <View style={modalStyles().week}>
        <Text style={commonStyles(1.7).Font_red}>일</Text>  
      </View>
      <View style={modalStyles().date}>
        <Text style={commonStyles(1.7).Font_000}>월</Text>  
      </View>
      <View style={modalStyles().date}>
        <Text style={commonStyles(1.7).Font_000}>화</Text>  
      </View>
      <View style={modalStyles().date}>
        <Text style={commonStyles(1.7).Font_000}>수</Text>  
      </View>
      <View style={modalStyles().date}>
        <Text style={commonStyles(1.7).Font_000}>목</Text>  
      </View>
      <View style={modalStyles().date}>
        <Text style={commonStyles(1.7).Font_000}>금</Text>  
      </View>
      <View style={modalStyles('#1a8cff').week}>
        <Text style={commonStyles(1.7).Font_1a8cff}>토</Text>  
      </View>
    </View>      
  );  
}

export default DateContentWeek; 