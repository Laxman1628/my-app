import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../../data/context/ThemeProvider';
import CustomButton from '../../common/Components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const NotificationScreen = props => {
  const {theme, toggleTheme, mode} = useContext(ThemeContext);
  const navigation = useNavigation();
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

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>🏠 Home Screen</Text>
        <Button
          title="Go to Hidden1"
          onPress={() =>
            navigation.navigate('HiddenTab', {
              screen: 'Hidden1', // optional if it's already the default
            })
          }
        />
      </View>
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

export default NotificationScreen;
