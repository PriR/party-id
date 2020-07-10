import React from 'react';
import styled from 'styled-components/native';
import {useEffect} from 'react-native';
import PropTypes from 'prop-types';

const InputText = ({username, onInputChange}) => {
  // useEffect(() => {
  //   onInputChange(username);
  // }, []);

  return <StyledInput value={username} onChangeText={onInputChange} />;
};

const StyledInput = styled.TextInput`
  font-size: 16px;
  background: #fff;
  padding-left: 5px;
  color: black;
  border-radius: 10px;
  font-family: 'Helvetica Neue';
  border-color: black;
  height: 40px;
`;

StyledInput.propTypes = {
  // username: PropTypes.string.isRequired,
};

export default InputText;
