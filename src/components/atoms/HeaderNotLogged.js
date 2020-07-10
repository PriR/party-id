import React from 'react';
import styled from 'styled-components/native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderNotLogged = () => {
  return (
    <HeaderView>
      <Title>Aqui a sua festa começa</Title>
      <IconMaterial
        style={{paddingLeft: 10}}
        name="party-popper"
        size={30}
        color="#513e6f"
      />
    </HeaderView>
  );
};

const HeaderView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
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
