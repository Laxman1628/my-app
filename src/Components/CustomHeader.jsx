import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../utils/Constants/Colors';
import Icons, {iconType} from '../assets/icon/Icons';

const CustomHeader = ({
  username = 'Lakhan N',
  navigation,
  showBack = false,
  onBackPress,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Icons
              type={iconType.ionicon}
              name="chevron-back"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        )}
        <Text style={styles.greetingText}>Hi, {username}</Text>
      </View>

      <View style={styles.iconContainer}>
        {/* Search */}
        <TouchableOpacity>
          <Icons
            type={iconType.ionicon}
            name="search-outline"
            size={24}
            color="#000"
          />
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity
          onPress={() => navigation?.navigate('Notifications')}
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
    backgroundColor: Colors.background_transperant_dark,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 8,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  bellWrapper: {
    position: 'relative',
  },
  redDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
});

export default CustomHeader;
