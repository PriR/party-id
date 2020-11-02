import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BackButtonIcon} from '../components/atoms/Icons';
import {LoginUser, PaymentRegister, LoginPassword, FingerPrint, CreateAccount} from '../scenes';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginUser">
        <Stack.Screen
          name="FingerPrint"
          component={FingerPrint}
          options={{
            headerTitle: null,
            headerStyle: {
              backgroundColor: '#5fcfe0',
              shadowColor: 'transparent',
            },
          }}
        />
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
          name="CreateAccount"
          component={CreateAccount}
          options={{
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
