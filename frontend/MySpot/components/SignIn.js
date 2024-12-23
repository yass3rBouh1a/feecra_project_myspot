import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput placeholder="Enter your email" style={styles.input} />
      <TextInput placeholder="Enter your password" secureTextEntry style={styles.input} />
      <Button title="Sign In" onPress={() => alert('Signed In!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default SignIn;
