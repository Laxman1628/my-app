import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Or use any icon library you prefer
import Colors from '../utils/Constants/Colors';
import Icons, {iconType} from '../assets/icon/Icons';

const CustomHeader = ({username = 'Lakhan N', navigation}) => {
  return (
    <View style={styles.headerContainer}>
      {/* Greeting */}
      <Text style={styles.greetingText}>Hi, {username}</Text>

      {/* Icons */}
      <View style={styles.iconContainer}>
        {/* Search Icon */}
        <TouchableOpacity>
          <Icons
            type={iconType.ionicon}
            name="search-outline"
            size={24}
            color="#000"
          />
        </TouchableOpacity>

        {/* Notification Icon with Red Dot */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={styles.bellWrapper}>
          <Icons
            type={iconType.ionicon}
            name="notifications-outline"
            size={24}
            color="#000"
          />
          <View style={styles.redDot} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: Colors.background_transperant_dark, // Match the background from the image
  },
  greetingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  bellWrapper: {
    position: 'relative',
  },
  redDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
});

export default CustomHeader;
