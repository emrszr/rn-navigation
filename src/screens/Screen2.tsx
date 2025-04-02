import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types';

type SScreenRouteProp = RouteProp<RootStackParamList, 'SScreen'>;


const SScreen = () => {
  const route = useRoute<SScreenRouteProp>();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text>{user.email} wellcome </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SScreen;
