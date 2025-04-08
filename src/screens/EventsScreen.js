import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const EventsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Event Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

      flex: 1,
      padding: 20,

  },
});

export default EventsScreen;
