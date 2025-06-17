import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/AuthScreens/SplashScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../screens/AuthScreens/SignUpScreen';
import Strings from '../utils/Constants/Strings';

export default function Index() {
  const Stack = createNativeStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <>
          <Stack.Screen
            name={Strings.NAVIGATION.splash}
            component={SplashScreen}
          />
          <Stack.Screen name={Strings.NAVIGATION.login}>
            {props => (
              <LoginScreen
                {...props}
                component={LoginScreen}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name={Strings.NAVIGATION.signup} component={SignUp} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
