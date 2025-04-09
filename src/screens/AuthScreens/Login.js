//    --- React & Core Hooks ---
import React, {useState, useCallback} from 'react';
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
import Fonts, { fontSize } from '../../utils/Constants/Fonts';
import Colors from '../../utils/Constants/Colors';
import { hp , wp } from '../../common/Functions/Dimensions';
import CustomButton from '../../Components/buttons/CustomButton';

const LoginScreen = ({navigation, setIsLoggedIn, ...props}) => {
  const [email, setEmail] = useState('');

  // Optimize function using useCallback (prevents re-creation on re-renders)
  const handleLogin = useCallback(() => {
    console.log('Logging in with:', email);
    setIsLoggedIn(true);
  }, [email]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Email Input */}
          <CustomTextInput
            name={'userId'}
            inputStyle={{...styles.textInputStyle}}
            // onChangeText={props?.handleChange}
            inputProps={{
              // flex: 1,
              // value: props.userId,
              placeholder: 'Email or Mobile',
            }}
          />

          {/* Login Button */}
          <CustomButton
                            title={'Login using OTP'}
                            name={'getOtp'}
                            // onPress={props?.handleSubmit}
                            // isLoading={store.getState().settings.isLoading}
                            btnStyles={styles.btnStyles}
                            btnTitleStyles={{
                                ...styles.textStyle,
                                ...styles.btnTextStyle
                            }}
                        />

          {/* OR Section */}
          <Text style={styles.orText}>{STRINGS.orText}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(Strings.NAVIGATION.signup)}>
            <Text style={styles.signupText}>
              {STRINGS.newUser}{' '}
              <Text style={styles.signupLink}>{STRINGS.signUp}</Text>
            </Text>
          </TouchableOpacity>

          {/* Help Videos */}
          <TouchableOpacity style={styles.helpContainer}>
            <Text style={styles.helpText}>{STRINGS.helpVideos}</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    color: '#fff'
},
btnStyles: {
  width: wp('90'),
  marginVertical: hp(2)
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
