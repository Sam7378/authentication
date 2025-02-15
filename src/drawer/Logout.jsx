import {Alert} from 'react-native';
import React, {useCallback} from 'react';
import {userLogout} from '../services/auth';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import LogoutButton from '../components/LogoutButton';

const Logout = props => {
  const {navigation} = props;
  const handleLogout = useCallback(async () => {
    try {
      await userLogout();
      console.log('Sucess', 'Logout successful');
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Error', 'Failed to sign out');
    }
  }, [navigation]);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <LogoutButton onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

export default Logout;
