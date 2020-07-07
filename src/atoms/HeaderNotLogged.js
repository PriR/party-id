import React from 'react';
import styled from 'styled-components/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const HeaderNotLogged = () => {
  return (
    <HeaderView>
      {/* <Icon name="rocket" size={30} color="#900" /> */}
      <Title>Aqui a sua festa começa -- icone festa</Title>
    </HeaderView>
  );
};

const HeaderView = styled.View`
  flex: 1;
  height: 50px;
  justify-content: center;
  background-color: #5fcfe0;
`;

const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
  font-family: 'Helvetica Neue';
`;

export default HeaderNotLogged;
