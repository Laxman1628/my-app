import { StyleSheet, Text, TextInput, View } from 'react-native'
// import ViewPropTypes from 'deprecated-react-native-prop-types';
import React, { useState } from 'react'
import Colors from '../../utils/Constants/Colors'
import { hp, wp } from '../../common/Functions/Dimensions'


const CustomTextInput = (props) => {
  const [focused, setfocused] = useState(false)
  return (
    <>
      {props.label &&
        <Text style={{ ...style.label, ...props?.labelStyle }}>
          {props?.label}
          {props?.mandatory && <Text style={{ color: 'red' }}> *</Text>}
        </Text>
      }
      <TextInput
        onFocus={() => setfocused(true)}
        onBlur={() => setfocused(false)}
        onChangeText={text => props?.onChangeText(props.name, text)}
        placeholderTextColor={Colors.gray}
        style={[
          style.textInputStyle,
          focused && {
            borderWidth: 2,
            borderColor: Colors.color3,
          },
          { ...props?.inputStyle }
        ]}
        {...props?.inputProps}
      />
    </>
  )
}

export default CustomTextInput

const style = StyleSheet.create({
  label: {},
  textInputStyle: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderWidth: 0.7,
    // elevation: 9,
    borderColor: 'grey',
    borderRadius: 10,
    backgroundColor: 'white'
  }
})
