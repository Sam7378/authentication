import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Forgot Password</Text>
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
        placeholderTextColor="white"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Reset Password</Text>
      </TouchableOpacity>
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
});

export default ForgotPassword;
