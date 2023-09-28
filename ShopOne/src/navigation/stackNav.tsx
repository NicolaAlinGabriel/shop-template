import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitialOnboarding, SignUp, SignIn } from '@screens';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={InitialOnboarding}
        options={{ title: 'initial', headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'signin', headerShown: false }}
      />
      <Stack.Screen
        name="SingUp"
        component={SignUp}
        options={{ title: 'signup', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
