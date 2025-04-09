import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { hp, wp } from '../../common/Functions/Dimensions';
import CustomTextInput from '../../Components/textInput/CustomTextInput';
import CustomButton from '../../Components/buttons/CustomButton';
import Fonts, { fontSize } from '../../utils/Constants/Fonts';
import Colors from '../../utils/Constants/Colors';
import Strings from '../../utils/Constants/Strings';

export default function SignUpUI(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.TitleText}>Welcome User</Text>
        <Text style={styles.SubText}>Sign up to join</Text>
      </View>

      <View style={styles.inputContainer}>
        <CustomTextInput
          name="userId"
          inputStyle={styles.textInputStyle}
          onChangeText={props?.handleChange}
          inputProps={{
            editable: !props.showOtp,
            value: props.userId,
            placeholder: 'Email or Mobile',
          }}
        />
        <CustomTextInput
          name="username"
          inputStyle={styles.textInputStyle}
          onChangeText={props?.handleChange}
          inputProps={{
            editable: !props.showOtp,
            value: props.username,
            placeholder: 'Enter username',
          }}
        />
        <CustomTextInput
          name="password"
          inputStyle={styles.textInputStyle}
          onChangeText={props?.handleChange}
          inputProps={{
            editable: !props.showOtp,
            value: props.password,
            placeholder: 'Enter password',
          }}
        />
      </View>

      <CustomButton
        title="Sign Up"
        name="signup"
        onPress={props?.handleSubmit}
        btnStyles={styles.btnStyles}
        btnTitleStyles={[styles.textStyle, styles.btnTextStyle]}
      />

      {/* Already have an account? */}
      <TouchableOpacity
        style={styles.loginRedirectContainer}
        onPress={() => props.navigation.navigate(Strings.NAVIGATION.login)}>
        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.loginLink}>Login</Text>
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
  loginRedirectContainer: {
    marginTop: hp(2),
  },
  loginText: {
    fontSize: fontSize.normal,
    fontFamily: Fonts.medium,
    color: Colors.form_text,
  },
  loginLink: {
    color: Colors.primary, // or any highlight color you prefer
    textDecorationLine: 'underline',
  },
});
