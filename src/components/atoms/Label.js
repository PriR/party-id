import React from 'react';
import styled from 'styled-components/native';

const InputLabelBold = props => {
  return <Label style={props.styles}>{props.text}</Label>;
};

const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: black;
  font-family: 'Helvetica Neue';
  padding-bottom: 10px;
`;

export default InputLabelBold;
