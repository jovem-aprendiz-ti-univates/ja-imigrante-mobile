import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

export default function UserRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegistration = () => {
    const user = {
      nome,
      email,
    };

    fetch('http://192.168.0.123:8000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          Alert.alert('Success', 'User registered successfully!');
          setName('');
          setEmail('');
        } else {
          throw new Error('Error during registration');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert('Error', 'Failed to register the user');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});
