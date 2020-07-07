import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const ButtonCenter = () => {
  return (
    <Container>
      <Text>Entrar</Text>
    </Container>
  );
};

const Container = styled.View`
  margin: 10px;
  height: 70px;
  background-color: green;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  justify-content: center;
  color: white;
  font-family: 'Helvetica Neue';
`;

export default ButtonCenter;
