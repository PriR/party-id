import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

import HeaderNotLogged from './atoms/HeaderNotLogged';

import Header from './atoms/Header';

import ButtonCenter from './atoms/ButtonCenter';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header genero="F" name="Priscila" />
      <ContentContainer>
        <Text>Teste</Text>
        <BottomContainter>
          <ButtonCenter />
        </BottomContainter>
      </ContentContainer>
      <SafeAreaView />
    </>
  );
};

const BottomContainter = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const ContentContainer = styled.View`
  flex: 2;
  background-color: #dadfe3;
`;

export default App;
