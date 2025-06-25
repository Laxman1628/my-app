import React, {Component} from 'react';
import {View, StyleSheet, Image, DevSettings} from 'react-native';
// import { Images } from '../../../utils/constants/Images'
import {hp} from '../../common/Functions/Dimensions';
import {Images} from '../../utils/Constants/Images';
import CustomButton from '../../common/Components/CustomButton';
// import Fonts, { fontSize } from '../../../utils/constants/Fonts'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('ErrorBoundary caught an error:===>', error, errorInfo);
  }

  handleReload = () => {
    DevSettings.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Image
            source={Images.err_boundary}
            resizeMode="contain"
            style={styles.image}
          />
          <CustomButton
            title="Submit"
            onPress={() => console.log('Button Pressed')}
            btnStyles={{backgroundColor: 'green'}}
            btnTitleStyles={{fontSize: 18}}
            loading={false}
          />
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FAE6E5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    flex: 0.6,
    width: '100%',
  },
  button: {
    height: hp(6),
    borderRadius: 8,
    marginTop: 24,
    paddingHorizontal: 32,
    backgroundColor: '#CF352E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    // fontFamily: Fonts.Black,
    // fontSize: fontSize.normal,
    color: '#FFFFFF',
  },
});

export default ErrorBoundary;
