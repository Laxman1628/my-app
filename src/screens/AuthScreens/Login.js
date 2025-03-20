//    --- React & Core Hooks ---
import React, {useState, useCallback, useMemo} from 'react';
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
import PrimaryBtn from '../../Components/CustomButton/PrimaryBtn';

const LoginScreen = ({navigation, setIsLoggedIn}) => {
  const [email, setEmail] = useState('');

  // Optimize function using useCallback (prevents re-creation on re-renders)
  const handleLogin = useCallback(() => {
    console.log('Logging in with:', email);
    // setIsLoggedIn(true);
  }, [email]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Email Input */}
          <Text style={styles.label}>{STRINGS.emailLabel}</Text>
          <TextInput
            style={styles.input}
            placeholder={STRINGS.emailPlaceholder}
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="done"
          />

          {/* Login Button */}
          <PrimaryBtn
            title={STRINGS.loginButton}
            style={styles?.button}
            onPress={handleLogin}
          />

          {/* OR Section */}
          <Text style={styles.orText}>{STRINGS.orText}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
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
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 16,
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
