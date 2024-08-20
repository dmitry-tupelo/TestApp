import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREENS} from './screens';
import Login from '../screens/Login';
import LoginSuccess from '../screens/LoginSuccess';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.LOGIN}>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.LOGIN} component={Login} />
        <Stack.Screen name={SCREENS.LOGIN_SUCCESS} component={LoginSuccess} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
