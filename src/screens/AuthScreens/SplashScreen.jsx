//      ---  React & Core Hooks ---
import React, {useEffect} from 'react';

//     --- React Native UI Components ---
import {ImageBackground, StyleSheet, View} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login'); // Move to Login after 3 seconds
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/Images/splash.png')} // Update the path to match your image location
      style={styles.background}
      resizeMode="cover" // Ensures the image covers the full screen
    >
      <View style={styles.overlay} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
});
