import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';

const Login = () => {
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button pressed', SafeAreaView);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="john@example.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <Pressable
          style={styles.checkboxContainer}
          onPress={() => setKeepLoggedIn(prev => !prev)}>
          <View style={[styles.checkbox, keepLoggedIn && styles.checkedBox]} />
          <Text style={styles.checkboxLabel}>Keep me logged in</Text>
        </Pressable>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>Don't have an account? Sign up</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820FF',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#FEE715FF',
    textAlign: 'center',
    marginBottom: 40,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#1a1a1a',
    marginRight: 10,
    borderRadius: 4,
  },
  checkedBox: {
    backgroundColor: '#FEE715FF',
    borderColor: '#FEE715FF',
  },
  checkboxLabel: {
    color: '#ccc',
    fontSize: 14,
  },
  form: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    color: '#eee',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    height: 44,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#fff',
    backgroundColor: '#2a2a2a',
    textAlignVertical: 'center',
  },
  button: {
    backgroundColor: '#FEE715FF',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 20,
  },
  buttonText: {
    color: '#101820FF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Login;
