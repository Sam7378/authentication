import {
  View,
  Text,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const LoginPhone = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        Alert.alert('Success', 'You are logged in!');
        setConfirm(null);
      }
    });
    return subscriber;
  }, []);

  const handleSigninPhoneNumber = async () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter a phone number');
      return;
    }
    if (!/^\+91\d{10}$/.test(phoneNumber)) {
      Alert.alert('Error', 'Invalid phone number.');
      return;
    }
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      Alert.alert('Success', 'OTP sent successfully');
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to send OTP');
    }
  };

  const confirmCode = async () => {
    if (!code) {
      Alert.alert('Error', 'Please enter OTP code');
      return;
    }
    try {
      await confirm.confirm(code);
      Alert.alert('Success', 'Phone number varified');
    } catch (error) {
      Alert.alert('Error', 'Invalid varification code.');
    }
  };
  return (
    <View style={styles.container}>
      {!confirm ? (
        <>
          <Text style={styles.textHeader}>OTP Verification</Text>
          <Text style={styles.textOTP}>
            We will send you a{' '}
            <Text style={styles.highlight}>One Time Password</Text> on this
            mobile number.
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter phone number"
            placeholderTextColor="white"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <TouchableOpacity
            onPress={handleSigninPhoneNumber}
            style={styles.button}>
            <Text style={styles.textButton}>GET OTP</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>Enter OTP Code</Text>
          <TextInput
            placeholder="Enter OTP Code"
            value={code}
            onChangeText={setCode}
            keyboardType="number-pad"
            style={styles.textInput}
          />

          <Button title="Confirm OTP" onPress={confirmCode} />
        </>
      )}

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>←</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111827',
  },
  textHeader: {
    textAlign: 'center',
    color: 'white',
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '400',
    marginBottom: 32,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 13,

    color: '#fff',
    backgroundColor: '#1f2937',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 60,
    paddingRight: 25,
    paddingLeft: 16,
    marginBottom: 16,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 18,
    width: '85%',
    height: '5%',
    backgroundColor: '#6366f1',
    textAlign: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  loginButton: {
    textAlign: 'center',
    marginTop: 8,
  },

  loginText: {
    color: '#a5b4fc',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 50,
  },

  textOTP: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 15,
    paddingHorizontal: 10,
    lineHeight: 22,
  },
  highlight: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default LoginPhone;
