import React from 'react';
import { View, Text } from 'react-native';
import dateModalStyles from './dateModalStyles';

const DateContentWeek = () => {

  return (
    <View style={dateModalStyles().dateContentSubContainer}>
      <View style={dateModalStyles().days}>
        <Text style={dateModalStyles('red').dayText}>일</Text>  
      </View>
      <View style={dateModalStyles().days}>
        <Text style={dateModalStyles('#000').dayText}>월</Text>  
      </View>
      <View style={dateModalStyles().days}>
        <Text style={dateModalStyles('#000').dayText}>화</Text>  
      </View>
      <View style={dateModalStyles().days}>
        <Text style={dateModalStyles('#000').dayText}>수</Text>  
      </View>
      <View style={dateModalStyles().days}>
        <Text style={dateModalStyles('#000').dayText}>목</Text>  
      </View>
      <View style={dateModalStyles().days}>
        <Text style={dateModalStyles('#000').dayText}>금</Text>  
      </View>
      <View style={dateModalStyles().days}>
        <Text style={dateModalStyles('#1a8cff').dayText}>토</Text>  
      </View>
    </View>      
  );  
}

export default DateContentWeek; 