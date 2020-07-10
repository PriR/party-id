import React from 'react';
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';
import OrangeTextNav from '../atoms/OrangeTextNav';
import ButtonCenter from '../atoms/ButtonCenter';
import InputLabelBold from '../atoms/Label';
import HeaderNotLogged from '../../components/atoms/HeaderNotLogged';
import InputText from '../atoms/InputText';
import Switch from '../molecules/Switch';

const UserNameLogin = props => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={100}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ContainerOutter>
            <HeaderNotLogged text={props.highlightedText} />
            <Container>
              <InputLabelBold text={props.inputLabelBoldName} />
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

              <InputLabelBold text={props.inputLabelBoldName} />
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

              <InputLabelBold text={props.inputLabelBoldName} />
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

              <InputLabelBold text={props.inputLabelBoldName} />
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
      </ScrollView>
      <SafeAreaView />
    </KeyboardAvoidingView>
  );
};

const ContainerOutter = styled.View``;

const BottomContainter = styled.View`
  padding-bottom: 10px;
`;

const Container = styled.View`
  justify-content: flex-end;
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export default UserNameLogin;
