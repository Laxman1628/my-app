import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../data/context/ThemeProvider';
import CustomButton from '../../common/Components/CustomButton';

const HomeScreens = () => {
  const {theme, toggleTheme, mode} = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.text, {color: theme.text}]}>
        Current Mode: {mode}
      </Text>
      <CustomButton
        title="Toggle Theme"
        onPress={toggleTheme}
        btnStyles={{backgroundColor: theme.buttonBackground}}
        btnTitleStyles={{color: theme.text}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreens;
