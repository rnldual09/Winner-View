import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tournamentStyles from '../style/tournamentStyles';
import { useNavigation } from '@react-navigation/native';

const Tournament = () => {

  const navigation = useNavigation();

  return (
    <View style={tournamentStyles().tournamentContainer}>
      <View style={tournamentStyles().toutitleContainer}>
        <Text style={tournamentStyles().touTitle}>
          경기제목명
          <Text style={tournamentStyles().touTitle2}> (진행중)</Text>
        </Text>
        <Text style={tournamentStyles().touTitle3}>64강</Text>
      </View>
      <View style={tournamentStyles().touMatchContainer}>
        <TouchableOpacity
          style={tournamentStyles().touMatchBtn}
          onPress={() => goTouMatch()}
        >
          <Text style={tournamentStyles().touMatchBtnTitle}>1조</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tournamentStyles().touMatchBtn}
          onPress={() => goTouMatch()}
        >
          <Text style={tournamentStyles().touMatchBtnTitle}>2조</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tournamentStyles().touMatchBtn}
          onPress={() => goTouMatch()}
        >
          <Text style={tournamentStyles().touMatchBtnTitle}>3조</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tournamentStyles().touMatchBtn}
          onPress={() => goTouMatch()}
        >
          <Text style={tournamentStyles().touMatchBtnTitle}>4조</Text>
        </TouchableOpacity>
      </View>
    </View>
  );  
}

export default Tournament;
