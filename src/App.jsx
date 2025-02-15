import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './navigation/Login';

import SignUp from './navigation/SignUp';
import MainScreen from './navigation/MainScreen';
import LoginPhone from './navigation/LoginPhone';
import ForgotPassword from './navigation/ForgotPassword';

const Stack = createNativeStackNavigator();
const defaultScreenOptions = {
  headerShown: true,
  gestureEnabled: true,
  headerStyle: {
    backgroundColor: '#6200EE',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  animation: 'slide_from_right',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOptions}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false, animation: 'fade_from_bottom'}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{title: 'Home', headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'Create an Account'}}
        />
        <Stack.Screen
          name="LoginPhone"
          component={LoginPhone}
          options={{title: 'Login with Phone'}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{title: 'Reset Password', animation: 'slide_from_left'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
