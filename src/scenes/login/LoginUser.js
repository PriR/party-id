import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import UserNameLogin from '../../components/molecules/UserNameLogin';
import {loginTextConstants} from '../../utils/textConstants';

import {setStringValue, getStringValue} from '../../storage/asyncStorage';

const LoginUser = () => {
  const {navigate} = useNavigation();

  const [username, setUsername] = useState();

  // popular username com valor do async storage ao inicializar
  useEffect(() => {
    getStringValue('username').then(storedUsername =>
      // Alert.alert('storedUsername: ', storedUsername),
      setUsername(storedUsername),
    );
  }, []);

  const handleForward = () => {
    // Alert.alert('username: ', username);
    setStringValue('username', username).then(navigate('PaymentRegister'));
    // navigate('PaymentRegister');
  };

  const handleChangeInput = value => {
    setUsername(value);
  };

  return (
    <UserNameLogin
      username={username}
      onInputChange={handleChangeInput.bind(username)}
      highlightedText={loginTextConstants.greetings}
      inputLabelBoldName={loginTextConstants.user}
      primaryButtonName={loginTextConstants.forward}
      textSwitch={loginTextConstants.rememberMe}
      orangeTextLink={loginTextConstants.forgotMyUser}
      onPressForward={handleForward}
    />
  );
};

export default LoginUser;
