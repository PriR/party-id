import React from 'react';
import styled from 'styled-components/native';

const OrangeTextNav = props => {
  return <Text onPress={() => props.onPress}>{props.text}</Text>;
};

const Text = styled.Text`
  height: 25px;
  align-self: center;
  font-size: 15px;
  color: #ff5c2b;
  font-family: 'Helvetica Neue';
`;

export default OrangeTextNav;
