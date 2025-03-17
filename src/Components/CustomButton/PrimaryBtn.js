import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const PrimaryBtn = ({
  title,
  onPress,
  icon,
  style,
  disabled = false,
  iconPosition = 'left',
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabledButton : {}, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...props} // Pass down additional props
    >
      <>
        <>
          {icon && iconPosition === 'left' && icon}
          <Text style={[styles.text]}>{title}</Text>
          {icon && iconPosition === 'right' && icon}
        </>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003366', // Dark blue theme
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5, // Space for the icon
  },
  disabledButton: {
    backgroundColor: '#A0A0A0', // Gray when disabled
  },
});

export default PrimaryBtn;
