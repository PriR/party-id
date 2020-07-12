import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import card from '../../assets/lottie/card.json';
// 22
const Register = () => {
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
            <Numbers>2222 2222 2222 2222</Numbers>
          </CardNumberView>

          <ContainerRow>
            <CardNameView>
              <Name>Priscila Rodrigues da Silva</Name>
            </CardNameView>
            <ExpirationDateView>
              <Date>12/27</Date>
            </ExpirationDateView>
            <CVVView>
              <CVV>123</CVV>
            </CVVView>
          </ContainerRow>
        </CardDataView>
      </CardView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerLottie: {
    height: '60%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
`;

const CardNumberView = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 10px;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CardNameView = styled.View`
  flex: 1;
  flex-direction: row;
  flex-grow: 3;
  margin-bottom: 10px;
  justify-content: flex-start;
`;

const ExpirationDateView = styled.View`
  flex: 1;
  margin-bottom: 10px;
  align-items: flex-start;
`;

const CVVView = styled.View`
  flex: 1;
  margin-bottom: 10px;
  margin-right: 10px;
  align-items: center;
`;

const Numbers = styled.Text`
  color: white;
  font-weight: bold;
  opacity: 0.5;
  font-size: 25px;
`;

const Name = styled.Text`
  color: white;
  font-weight: bold;
  opacity: 0.5;
  font-size: 15px;
`;

const Date = styled.Text`
  color: white;
  font-weight: bold;
  opacity: 0.5;
  font-size: 15px;
`;

const CVV = styled.Text`
  color: white;
  font-weight: bold;
  opacity: 0.5;
  font-size: 15px;
`;

export default Register;
