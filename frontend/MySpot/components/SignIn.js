import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styled } from 'tailwindcss-react-native';

const SignIn = () => {
  return (
    <View className="flex-1 justify-center p-5 bg-white">
      <Text className="text-2xl font-bold mb-5 text-center">Sign In</Text>
      <TextInput
        placeholder="Enter your email"
        className="border border-gray-300 p-3 mb-4 rounded"
      />
      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        className="border border-gray-300 p-3 mb-4 rounded"
      />
      <Button title="Sign In" onPress={() => alert('Signed In!')} />
    </View>
  );
};

export default SignIn;
