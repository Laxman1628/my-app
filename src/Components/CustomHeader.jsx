import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Title: Static "ND" in Italic */}
      <Text style={styles.title}>ND</Text>

      {/* Avatar on Right (Touchable) */}
      <TouchableOpacity 
        style={styles.avatarContainer} 
        onPress={() => navigation.navigate('Login')}  // Navigate to Login Screen
      >
        <Text style={styles.avatarText}>L</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#2E67A0', // Blue background color
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic', // Italic font style
    color: '#fff',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc', // Light gray avatar background
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CustomHeader;
