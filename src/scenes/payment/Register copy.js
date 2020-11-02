import React, {useState} from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Lottie from 'lottie-react-native';

import card from '../../assets/lottie/card.json';

const Register = () => {

  

  const cardNumbersId = [
    'value1CardNumber',
    'value2CardNumber',
    'value3CardNumber',
    'value4CardNumber',
  ];

  const handleOnChangeText = (id, value) => {
    switch (id) {
      case cardNumbersId[0]: {
        setValue1CardNumber(value);
        if (value.length === 4) {
          refCardNumber2.current.focus();
        }
        break;
      }
      case cardNumbersId[1]: {
        setValue2CardNumber(value);
        if (value.length === 4) {
          refCardNumber3.current.focus();
        }
        break;
      }
      case cardNumbersId[2]: {
        setValue3CardNumber(value);
        if (value.length === 4) {
          refCardNumber4.current.focus();
        }
        break;
      }
      case cardNumbersId[3]: {
        setValue4CardNumber(value);
        break;
      }
    }
  };

  const handleOnSelectionChange = ({nativeEvent: {selection}}) => {
    setCursorPosition(selection.start, selection.end);
  };

  const [value1CardNumber, setValue1CardNumber] = useState();
  const [value2CardNumber, setValue2CardNumber] = useState();
  const [value3CardNumber, setValue3CardNumber] = useState();
  const [value4CardNumber, setValue4CardNumber] = useState();
  const [cursorPosition, setCursorPosition] = useState();

  const refCardNumber1 = React.useRef();
  const refCardNumber2 = React.useRef();
  const refCardNumber3 = React.useRef();
  const refCardNumber4 = React.useRef();

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
              {/* <TextInput
                ref={refCardNumber1}
                style={styles.inputNumbersCard}
                placeholder="1234"
                placeholderTextColor="#B3B6B7"
                maxLength={4}
                keyboardType="number-pad"
                onChangeText={value =>
                  handleOnChangeText(cardNumbersId[0], value)
                }
                value={value1CardNumber}
              />
              <Space />
              <TextInput
                ref={refCardNumber2}
                style={styles.inputNumbersCard}
                placeholder="1234"
                placeholderTextColor="#B3B6B7"
                maxLength={4}
                keyboardType="number-pad"
                onChangeText={value =>
                  handleOnChangeText(cardNumbersId[1], value)
                }
                value={value2CardNumber}
                onSelectionChange={handleOnSelectionChange}
                onKeyPress={({nativeEvent}) => {
                  console.log('native: ', nativeEvent);
                  if (nativeEvent.key === 'Backspace') {
                    if (cursorPosition === 0) {
                      refCardNumber1.current.focus();
                    }
                  }
                }}
              />
              <Space />
              <TextInput
                ref={refCardNumber3}
                style={styles.inputNumbersCard}
                placeholder="1234"
                placeholderTextColor="#B3B6B7"
                maxLength={4}
                keyboardType="number-pad"
                onChangeText={value =>
                  handleOnChangeText(cardNumbersId[2], value)
                }
                value={value3CardNumber}
                onSelectionChange={handleOnSelectionChange}
                onKeyPress={({nativeEvent}) => {
                  console.log('native: ', nativeEvent);
                  if (nativeEvent.key === 'Backspace') {
                    if (cursorPosition === 0) {
                      refCardNumber2.current.focus();
                    }
                  }
                }}
              />
              <Space />
              <TextInput
                ref={refCardNumber4}
                style={styles.inputNumbersCard}
                placeholder="1234"
                placeholderTextColor="#B3B6B7"
                maxLength={4}
                keyboardType="number-pad"
                onChangeText={value =>
                  handleOnChangeText(cardNumbersId[3], value)
                }
                value={value4CardNumber}
                onSelectionChange={handleOnSelectionChange}
                onKeyPress={({nativeEvent}) => {
                  console.log('native: ', nativeEvent);
                  if (nativeEvent.key === 'Backspace') {
                    if (cursorPosition === 0) {
                      refCardNumber3.current.focus();
                    }
                  }
                }}
              /> */}

              <TextInput
                ref={refCardNumber1}
                style={styles.inputNumbersCard}
                placeholder="1234 1234 1234 1234"
                placeholderTextColor="#B3B6B7"
                maxLength={19}
                keyboardType="number-pad"
                value={value1CardNumber}
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

const Space = styled.View`
  margin-left: 10px;
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
