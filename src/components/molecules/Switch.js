import React from 'react';
import styled from 'styled-components/native';
import Label from '../atoms/Label';
import Switch from '../atoms/Switch';

const molecules = props => {
  return (
    <StyledSwitch>
      <Label text={props.text} styles={styles} />
      <Switch />
    </StyledSwitch>
  );
};

const styles = {
  fontWeight: 'normal',
};

const StyledSwitch = styled.View`
  padding: 10px;
  align-items: baseline;
  justify-content: flex-end;
  flex-direction: row;
`;

export default molecules;
