import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../drawer/Profile';
import Logout from '../drawer/Logout';
import Setting from '../drawer/Setting';

const Drawer = createDrawerNavigator();

const Account = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <Logout {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f8f9fa',
          width: 250,
        },
        drawerActiveTintColor: '#007bff',
        drawerInactiveTintColor: 'gray',
        // headerShown: false,
      }}>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Setting} />
      {/* <Drawer.Screen name="Logout" component={Account} /> */}
    </Drawer.Navigator>
  );
};

export default Account;
