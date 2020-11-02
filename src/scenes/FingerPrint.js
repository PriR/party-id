'use strict';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableHighlight, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import TouchID from 'react-native-touch-id';

const FingerPrint = () => {
  const [biometryType, setBiometryType] = useState(null);
  const {navigate} = useNavigation();

  useEffect(() => {
    TouchID.isSupported().then(biometryTyp => {
      setBiometryType(biometryTyp);
    });
  }, []);

  const clickHandler = () => {
    TouchID.isSupported()
      .then(authenticate)
      .catch(error => {
        console.log('error: ', error);
        Alert.alert('TouchID not supported');
      });
  };

  const authenticate = () => {
    return TouchID.authenticate()
      .then(success => {
        console.log('Authenticated Successfully');
        Alert.alert('Authenticated Successfully');
        navigate('PaymentRegister');
      })
      .catch(error => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.btn}
        onPress={clickHandler}
        underlayColor="#0380BE"
        activeOpacity={1}>
        <Text
          style={{
            color: '#fff',
            fontWeight: '600',
          }}>
          {`Authenticate with ${biometryType}`}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    borderRadius: 3,
    marginTop: 200,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0391D7',
  },
});

export default FingerPrint;
