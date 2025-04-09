import { StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Images } from '../../utils/Constants/Images'
// import Loader from '../loader/Loader'

const CustomImageBackground = props => {
  return (
    <ImageBackground
      source={props.source || Images.bg_img}
      style={{ ...styles.bgImage, ...props.style }}
      resizeMode="cover"
      imageStyle={{
        opacity: 0.7,
      }}
      {...props.ImageBackgroundProps}>
      {/* <Loader /> */}
      {props.children}
    </ImageBackground>
  )
}

export default CustomImageBackground

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  }
})
