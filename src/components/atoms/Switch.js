import React, {useState} from 'react';
import {Switch} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

const StyledSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Container>
      <Switch
        trackColor={{true: colors.lightPurple}}
        thumbColor={colors.darkPurple}
        ios_backgroundColor={colors.white}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </Container>
  );
};

const Container = styled.View`
  margin-left: 5%;
`;

export default StyledSwitch;
