import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {signupUser} from '../services/auth';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'passwords do not match');
      return;
    }
    try {
      await signupUser(email, password);
      Alert.alert('sucessfull', 'your account has been created');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      Alert.alert(`${error.message}`);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor={'#ccc'}
        style={styles.inputText}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={'#ccc'}
        style={styles.inputText}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor={'#ccc'}
        style={styles.inputText}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Back to Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: 600,
    color: 'white',
    marginBottom: 32,
  },
  inputText: {
    width: '85%',
    height: 60,
    backgroundColor: '#1f2937',
    borderRadius: 18,
    color: 'white',
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 16,
  },
  button: {
    width: '85%',
    backgroundColor: '#6366f1',
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 18,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 600,
  },
  loginButton: {
    textAlign: 'center',
    marginTop: 8,
  },

  loginText: {
    color: '#a5b4fc',
    textAlign: 'center',
    fontWeight: '600',
  },
});
