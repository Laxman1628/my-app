import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {

  return (
    <View style={styles.container}>
    <Text>Welcome To ND APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5F5DC', // Coffee Beige Background
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E342E', // Dark Brown
    marginTop: 20,
  },
  subHeader: {
    fontSize: 16,
    color: '#6D4C41', // Light Brown
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  coffeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4E342E',
  },
  coffeePrice: {
    fontSize: 16,
    color: '#6D4C41',
  },
});
