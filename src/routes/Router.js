import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginUser from '../scenes/login/LoginUser';
import PaymentRegister from '../scenes/payment/Register';
import LoginPassword from '../scenes/login/LoginPassword';
import {BackButtonIcon} from '../components/atoms/Icons';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginUser"
          component={LoginUser}
          options={{
            headerTitle: null,
            headerStyle: {
              backgroundColor: '#5fcfe0',
              shadowColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="LoginPassword"
          component={LoginPassword}
          options={{
            headerLeft: props => <BackButtonIcon />,
            headerTitle: null,
            headerStyle: {
              backgroundColor: '#5fcfe0',
              shadowColor: 'transparent',
            },
          }}
        />
        <Stack.Screen
          name="PaymentRegister"
          component={PaymentRegister}
          options={{
            headerTitle: null,
            headerStyle: {
              backgroundColor: '#5fcfe0',
              shadowColor: 'transparent',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
