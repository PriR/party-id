import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Header = props => {
  let welcome = 'Bem-vindo';
  if (props.genero === 'F') {
    welcome = 'Bem-vinda';
  }
  if (props.genero === 'O') {
    welcome = 'Bem-vindx';
  }

  return (
    <HeaderView>
      <Title>
        {welcome}, {props.name}
      </Title>
    </HeaderView>
  );
};

Header.propTypes = {
  genero: PropTypes.oneOf(['M', 'F', 'O']).isRequired,
  name: PropTypes.string.isRequired,
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

export default Header;
