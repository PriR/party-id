import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import UserNameLogin from '../../components/molecules/UserNameLogin';
import {loginTextConstants} from '../../utils/textConstants';

import {setStringValue, getStringValue} from '../../storage/asyncStorage';

const LoginUser = () => {
  const {navigate} = useNavigation();

  const [username, setUsername] = useState('');

  const handleForward = () => {
    // setStringValue('username', username).then(itemValue =>
    //   Alert.alert(itemValue),
    // );
    navigate('LoginPassword');
  };

  const handleChangeInput = value => {
    setUsername(value);
    console.log('console: ', value);
  };

  return (
    <UserNameLogin
      username={username}
      onInputChange={handleChangeInput.bind(this, username)}
      highlightedText={loginTextConstants.greetings}
      inputLabelBoldName={loginTextConstants.user}
      primaryButtonName={loginTextConstants.forward}
      textSwitch={loginTextConstants.rememberMe}
      orangeTextLink={loginTextConstants.forgotMyUser}
      onPress={handleForward}
    />
  );
};

export default LoginUser;
