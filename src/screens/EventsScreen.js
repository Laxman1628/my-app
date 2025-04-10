import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const EventsScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={{color:"#fff"}}>Event Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

      flex: 1,
      padding: 20,
      backgroundColor:"#212121"

  },
});

export default EventsScreen;
