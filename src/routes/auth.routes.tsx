import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export type AuthStackParamList = {
  SignIn: undefined;
  Home: undefined;
}

export function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' }
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};