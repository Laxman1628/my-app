//    --- React & Core Hooks ---
import React, {useState, useCallback, useEffect} from 'react';
//    --- React Native UI Components ---
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

//    --- Constants & Localization ---
import {STRINGS} from '../../common/strings';
import Strings from '../../utils/Constants/Strings';
import CustomTextInput from '../../Components/textInput/CustomTextInput';
import Fonts, {fontSize} from '../../utils/Constants/Fonts';
import Colors from '../../utils/Constants/Colors';
import {hp, wp} from '../../common/Functions/Dimensions';
import CustomButton from '../../Components/buttons/CustomButton';
import LoginUI from './LoginUI';

const LoginScreen = ({navigation, setIsLoggedIn, ...props}) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    console.log('Login state -->', state);
  }, [state]);

  const handleChange = (field, value) => {
    setState(prev => ({...prev, [field]: value}));
  };

  const validate = () => {
    if (!state.username || !state.password) {
      appsnackbar.showErrMsg('Please fill all fields');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    // if (!validate()) return;
    try {
      console.log('Logging in with:', state);
      // Call your login API here
    } catch (error) {
      console.log('Login error -->', error);
    }
    setIsLoggedIn(true)
  };

  return (
    <View style={{flex: 1}}>
      <LoginUI
        {...state}
        navigation={navigation}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </View>
  );
};

// Use `useMemo` for styles to avoid unnecessary recalculations
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  textInputStyle: {
    fontSize: fontSize.normal,
    elevation: 5,
    height: hp('6'),
    width: wp('90'), // Matches the text input width with the remaining space
    color: Colors.text_black,
  },

  textStyle: {
    fontSize: fontSize.normal,
    fontFamily: Fonts.medium,
    color: '#fff',
  },
  btnStyles: {
    width: wp('90'),
    marginVertical: hp(2),
  },
  button: {
    backgroundColor: '#0A3875',
    paddingVertical: 14,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#666',
    marginVertical: 10,
  },
  signupText: {
    fontSize: 14,
    color: '#666',
  },
  signupLink: {
    color: '#FF6600',
    fontWeight: 'bold',
  },
  helpContainer: {
    marginTop: 15,
  },
  helpText: {
    color: 'red',
    fontSize: 14,
  },
});

export default LoginScreen;
