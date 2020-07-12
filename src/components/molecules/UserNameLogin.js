import React from 'react';
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';
import {OrangeTextNav, ButtonCenter, Label, InputText} from '../atoms';
import HeaderNotLogged from './HeaderNotLogged';
import Switch from './Switch';

const UserNameLogin = props => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={100}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ContainerOutter>
            <HeaderNotLogged text={props.highlightedText} />
            <Container>
              <Label text={props.inputLabelBoldName} />
              <InputText
                value={props.username}
                onInputChange={props.onInputChange}
              />
              <Switch text={props.textSwitch} />
              <BottomContainter>
                <ButtonCenter
                  name={props.primaryButtonName}
                  onPress={() => props.onPress}
                />
                <OrangeTextNav text={props.orangeTextLink} />
              </BottomContainter>
            </Container>
          </ContainerOutter>
        </TouchableWithoutFeedback>
        <SafeAreaView />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const ContainerOutter = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const BottomContainter = styled.View`
  padding-bottom: 10px;
`;

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export default UserNameLogin;
