import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {loginUser} from '../services/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    try {
      await loginUser(email, password);
      // Alert.alert('Success', 'Login sucessful');
      navigation.replace('MainScreen');
      setEmail('');
      setPassword('');
      console.log(loginUser);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor={'#ccc'}
        style={styles.text}
      />

      <TextInput
        placeholder="Enter Your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={'#ccc'}
        style={styles.text}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('ForgotPassword')}
        style={styles.fogotButton}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Or sign in using{' '}
        <Text
          onPress={() => navigation.navigate('LoginPhone')}
          style={styles.textsignup}>
          Mobile Number
        </Text>
      </Text>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={styles.textsignup}>
            Sign Up
          </Text>
        </Text>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signupButton}>
          <Text style={styles.textsignup}>SignUp</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => navigation.navigate('MainScreen')}
          style={styles.signupButton}>
          <Text style={styles.signupText}>Main Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111827',
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '700',
    marginBottom: 32,
    // marginTop: 2,
  },

  text: {
    color: '#fff',
    backgroundColor: '#1f2937',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: 60,
    paddingRight: 25,
    paddingLeft: 16,
    marginBottom: 20,
  },
  button: {
    width: '85%',
    backgroundColor: '#6366f1',
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
  },
  signupContainer: {
    marginTop: 24,
    flex: 'row',
    justifyContent: 'center',
  },
  fogotButton: {
    marginTop: 4,
    marginBottom: 20,
  },

  forgotText: {
    marginTop: 2,
    flex: 'row',
    justifyContent: 'center',
    color: '#007bff',
    fontWeight: '500',
  },
  signupText: {
    color: '#a5b4fc',
    textAlign: 'center',
    fontWeight: '500',
  },
  textsignup: {
    color: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  signupButton: {
    alignItems: 'center',
    marginTop: 8,
  },
});
export default Login;
