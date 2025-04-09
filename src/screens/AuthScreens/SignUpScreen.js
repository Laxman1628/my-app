import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SignUpUI from './SignUpUI';

export default function SignUp(props) {
  const [state, setState] = useState({
    userId: '',
    showOtp: false,
    username: '',
    password: '',
  });

  useEffect(() => {
    console.log('state -->', state);
  }, [state.showOtp]);

  const handleChange = (key, value) => {
    if (key === 'change') {
      setState(prev => ({ ...prev, showOtp: false }));
    } else {
      setState(prev => ({ ...prev, [key]: value }));
    }
  };

  const validate = () => {
    if (!state?.userId?.trim()?.length) {
      appsnackbar.showErrMsg('Please enter valid Email/Mobile Number');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      console.log('state', state);
      // Add API call or logic here
    } catch (error) {
      console.error('Submission error -->', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SignUpUI
        {...props}
        {...state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </View>
  );
}
