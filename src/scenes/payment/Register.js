import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Lottie from 'lottie-react-native';

import card from '../../assets/lottie/card.json';

import remoteConfig from '@react-native-firebase/remote-config';

const Register = () => {
  const handleOnChangeText = event => {
    console.log('event: ', event);
    // const length = value.length;
    // setCardNumber(value);
    // console.log(length);
    // console.log('cardNumber: ', cardNumber);
    // if (length === 4 || length === 9 || length === 14) {
    //   setCardNumber(value + ' ');
    // }
  };

  

  remoteConfig()
  .setDefaults({
    awesome_new_feature: 'disabled',
  })
  .then(() => remoteConfig().fetchAndActivate())
  .then(activated => {
    if (activated) {
      console.log('Defaults set, fetched & activated!');
    } else {
      console.log('Defaults set, however activation failed.');
    }
  });

  const handleKeyPress = ({nativeEvent}) => {
    // console.log('keyValue: ', nativeEvent.key);
    console.log(inputCardNumber.current.value);
    if (nativeEvent.key === 'Backspace') {
      // this.refs.refOfPreviousInput.focus();
      doSomething(inputCardNumber)
    }
  };

  const inputCardNumber = React.useRef();

  useEffect(() => {
    inputCardNumber.current.click();
  }, [])
  
  return (
    <TextInput ref={inputCardNumber} />
  );

  const [cardNumber, setCardNumber] = useState();

  return (
    <SafeAreaView style={{flex: 1}}>
      <CardView>
        <Lottie
          source={card}
          autoSize
          resizeMode="contain"
          autoPlay
          loop
          style={styles.containerLottie}
        />
        <CardDataView>
          <CardNumberView>
            <Label>Número do cartão</Label>
            <Row>
              <TextInput
                ref={inputCardNumber}
                style={styles.inputNumbersCard}
                placeholder="1234 1234 1234 1234"
                placeholderTextColor="#B3B6B7"
                maxLength={19}
                keyboardType="number-pad"
                value={cardNumber}
                onKeyPress={handleKeyPress}
              />
            </Row>
          </CardNumberView>

          <ContainerRow>
            <CardNameView>
              <Label>Nome</Label>
              <TextInput
                style={styles.inputText}
                maxLength={26}
                placeholder="Priscila Rodrigues da Silva"
                placeholderTextColor="#B3B6B7"
                underlineColorAndroid="rgba(0,0,0,0)"
              />
            </CardNameView>
            <ExpirationDateView>
              <Label>Data de expiração</Label>
              <TextInput
                style={styles.inputText}
                maxLength={5}
                placeholder="12/27"
                placeholderTextColor="#B3B6B7"
              />
            </ExpirationDateView>
            <CVVView>
              <Label>CVV</Label>
              <TextInput
                style={styles.inputText}
                maxLength={3}
                placeholder="123"
                placeholderTextColor="#B3B6B7"
              />
            </CVVView>
          </ContainerRow>
        </CardDataView>
      </CardView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerLottie: {
    height: 90,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  inputText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputNumbersCard: {
    color: 'white',
    fontSize: 25,
  },
});

const CardView = styled.View`
  height: 200px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: #513e6f;
  border-radius: 15px;
`;

const CardDataView = styled.View`
  flex: 1;
  margin-left: 10px;
  margin-top: 10px;
`;

const CardNumberView = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 5px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CardNameView = styled.View`
  flex: 1;
  flex-direction: column;
  flex-grow: 4;
  margin-bottom: 10px;
  justify-content: flex-start;
`;

const ExpirationDateView = styled.View`
  flex: 1;
  flex-grow: 2;
  margin-bottom: 10px;
  align-items: flex-start;
`;

const CVVView = styled.View`
  flex: 1;
  flex-direction: column;
  margin-bottom: 10px;
  margin-right: 10px;
  align-items: center;
`;

const Label = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 10px;
`;

export default Register;
