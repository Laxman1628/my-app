import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TrainingScreen() {
  return (
    <View style={styles.container}>
      <Text>TrainingScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
