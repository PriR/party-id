import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';

const BackButtonIcon = () => {
  const navigation = useNavigation();
  return (
    <Icon
      name="chevron-back"
      size={30}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
};

const PartyIcon = () => {
  return <IconMaterial name="party-popper" size={30} color="#513e6f" />;
};

export {BackButtonIcon, PartyIcon};
