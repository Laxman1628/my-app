import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

export default function ChallengesScreen({route}) {
  return (
    <ScrollView style={styles.container}>
      <Text>Detail Screen</Text>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5F5DC',
  },
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4E342E',
  },
  price: {
    fontSize: 18,
    color: '#6D4C41',
  },
  time: {
    fontSize: 16,
    color: '#6D4C41',
    marginTop: 5,
  },
  detailsContainer: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 10,
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#4E342E',
  },
  benefitItem: {
    fontSize: 16,
    color: '#6D4C41',
    marginTop: 5,
  },
  chartContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4E342E',
    textAlign: 'center',
    // marginBottom: 10,
  },
});
