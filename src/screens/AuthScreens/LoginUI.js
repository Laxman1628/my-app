import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../../common/Functions/Dimensions';
import CustomTextInput from '../../Components/textInput/CustomTextInput';
import CustomButton from '../../Components/buttons/CustomButton';
import Fonts, { fontSize } from '../../utils/Constants/Fonts';
import Colors from '../../utils/Constants/Colors';
import Strings from '../../utils/Constants/Strings';

export default function LoginUI(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.TitleText}>Welcome Back</Text>
        <Text style={styles.SubText}>Login to continue</Text>
      </View>

      <View style={styles.inputContainer}>
        <CustomTextInput
          name="username"
          inputStyle={styles.textInputStyle}
          onChangeText={props?.handleChange}
          inputProps={{
            value: props.username,
            placeholder: 'Enter username',
          }}
        />
        <CustomTextInput
          name="password"
          inputStyle={styles.textInputStyle}
          onChangeText={props?.handleChange}
          inputProps={{
            value: props.password,
            placeholder: 'Enter password',
            secureTextEntry: true,
          }}
        />
      </View>

      <CustomButton
        title="Login"
        name="login"
        onPress={props?.handleSubmit}
        btnStyles={styles.btnStyles}
        btnTitleStyles={[styles.textStyle, styles.btnTextStyle]}
      />

      {/* Navigation to SignUp */}
      <TouchableOpacity
        style={styles.signUpRedirectContainer}
        onPress={() => props.navigation.navigate(Strings.NAVIGATION.signup)}>
        <Text style={styles.signUpText}>
          Don’t have an account?{' '}
          <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    marginVertical: hp(2),
    width: wp(90),
    marginBottom: hp(2),
  },
  inputContainer: {
    marginBottom: hp(2),
  },
  textInputStyle: {
    fontSize: fontSize.normal,
    elevation: 5,
    height: hp(6),
    width: wp(90),
    marginBottom: hp(2),
    color: Colors.text_black,
  },
  textStyle: {
    fontSize: fontSize.normal,
    fontFamily: Fonts.medium,
    color: 'black',
  },
  TitleText: {
    fontSize: fontSize.xl,
    fontFamily: Fonts.medium,
    fontWeight: '700',
  },
  SubText: {
    fontSize: fontSize.medium,
    fontFamily: Fonts.medium,
    color: Colors.form_text,
  },
  btnStyles: {
    width: wp(90),
  },
  btnTextStyle: {
    color: 'white',
  },
  signUpRedirectContainer: {
    marginTop: hp(2),
  },
  signUpText: {
    fontSize: fontSize.normal,
    fontFamily: Fonts.medium,
    color: Colors.form_text,
  },
  signUpLink: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
});
