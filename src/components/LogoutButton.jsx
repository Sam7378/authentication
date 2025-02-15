import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LogoutButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={onPress}>
      <Icon name="logout" size={24} color="white" />
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff4d4d',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginBottom: 16,
    marginHorizontal: 16,
    margin: 8,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
export default LogoutButton;
