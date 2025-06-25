import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const CustomButton = ({
  title,
  onPress,
  disabled,
  loading,
  btnStyles,
  btnTitleStyles,
  activeOpacity
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, btnStyles, disabled && styles.disabledButton]}
      onPress={onPress}
      activeOpacity={activeOpacity}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.buttonText, btnTitleStyles]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  btnStyles: PropTypes.object,
  btnTitleStyles: PropTypes.object,
  activeOpacity: PropTypes.number,
};

CustomButton.defaultProps = {
  disabled: false,
  loading: false,
  btnStyles: {},
  btnTitleStyles: {},
  activeOpacity: 0.7,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;
