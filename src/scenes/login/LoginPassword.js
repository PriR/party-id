import React from 'react';
import {View} from 'react-native';
import OrangeText from '../../components/atoms/OrangeTextNav';
import ButtonCenter from '../../components/atoms/ButtonCenter';
const LoginPassword = props => {
  return (
    <View>
      <OrangeText text="123" />
      <ButtonCenter name="nome" onPress={() => console.log(23)} />
    </View>
  );
};

export default LoginPassword;
