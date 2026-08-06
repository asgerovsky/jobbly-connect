import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RoleScreen from '../screens/RoleScreen';
import CreateServiceScreen from '../screens/CreateServiceScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Role">

        <Stack.Screen
          name="Role"
          component={RoleScreen}
          options={{
            title: 'Seçim'
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Jobbly Connect'
          }}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Daxil ol'
          }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Qeydiyyat'
          }}
        />

        <Stack.Screen
          name="CreateService"
          component={CreateServiceScreen}
          options={{
            title: 'Yeni elan'
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
