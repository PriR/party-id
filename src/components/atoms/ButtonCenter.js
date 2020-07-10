import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const ButtonCenter = props => {
  return (
    <Container onPress={props.onPress()}>
      <Text>{props.name}</Text>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  margin: 5px;
  height: 50px;
  background-color: #513e6f;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

const Text = styled.Text`
  justify-content: center;
  color: white;
  font-family: 'Helvetica Neue';
  font-size: 24px;
`;

ButtonCenter.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default ButtonCenter;
