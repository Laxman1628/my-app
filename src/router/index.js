import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/AuthScreens/SplashScreen';
import LoginScreen from '../screens/AuthScreens/Login';
import TabNavigator from './TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/AuthScreens/SignUp';
import OtpScreen from '../screens/AuthScreens/OtpScreen';
import Strings from '../utils/Constants/Strings';

export default function index() {
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name={Strings.NAVIGATION.splash} component={SplashScreen} />
            <Stack.Screen name={Strings.NAVIGATION.login}>
              {props => (
                <LoginScreen {...props} component={LoginScreen}  setIsLoggedIn={setIsLoggedIn}  />
              )}
            </Stack.Screen>
            <Stack.Screen name={Strings.NAVIGATION.signup} component={SignUp}  />
            <Stack.Screen name={Strings.NAVIGATION.otp} component={OtpScreen}  />
            
          </>
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
