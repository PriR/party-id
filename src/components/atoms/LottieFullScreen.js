import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';

const LottieFullScreen = props => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie
        source={props.source}
        autoSize
        resizeMode="contain"
        autoPlay
        loop
      />
    </SafeAreaView>
  );
};

export default LottieFullScreen;
