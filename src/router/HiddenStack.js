import React from 'react';
import Hidden1 from '../screens/app/Hidden1';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HiddenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hidden1" component={Hidden1} />
    </Stack.Navigator>
  );
}
