import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React, { useMemo } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FScreen from '../screens/LoginScreen';
import SScreen from '../screens/Screen2';
import { RootStackParamList } from '../types';



const Stack = createStackNavigator();


const CustomHeaderLeft = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.horizontal}>
      <Icon name="arrow-back-outline" size={20} color="white" />
      <Button onPress={() => navigation.goBack()} title="Back" color="#fff" />
    </View>
  );
};

// const CustomHeaderRight: React.FC = () => {
//   return <Ionicons name="person-circle" size={24} color="black" />;
// };

const AppNavigator = () => {
  const headerLeft = useMemo(()=> (<CustomHeaderLeft  />), []);
  // const headerRight = useMemo(() => (<CustomHeaderRight />), []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={FScreen} />
        <Stack.Screen
          name="SScreen"
          component={SScreen}
          options={{
            title: 'Custom Header',
            headerLeft: () => headerLeft,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;


const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:15,

  },
});
