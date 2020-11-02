import React from 'react';
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import styled from 'styled-components/native';
import {
  OrangeTextNav,
  ButtonCenter,
  Label,
  InputText,
} from '../../components/atoms';

const CreateAccount = () => {
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
            <Container>
              <Label text={props.inputLabelBoldName} />
              <InputText
                value={props.username}
                onInputChange={props.onInputChange}
              />
              <BottomContainter>
                <ButtonCenter
                  name={props.primaryButtonName}
                  onPress={() => props.onPressForward}
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

export default CreateAccount;
