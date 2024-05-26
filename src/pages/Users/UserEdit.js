import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '@env';

export default function UserEdit({ route }) {
    const { userId } = route.params;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://${API_URL}/usuarios/${userId}`);
                const userData = await response.json();

                setName(userData.nome);
                setEmail(userData.email);
            } catch (error) {
                console.error('Error fetching user data:', error);
                Alert.alert('Error', 'Failed to load user data');
            }
        };

        fetchUser();
    }, [userId]); // Chama apenas ao carregar a tela ou se userId mudar

    const handleSave = async () => {
        try {
            const response = await fetch(`http://${API_URL}/usuarios/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome: name, email }),
            });

            if (response.ok) {
                Alert.alert('Success', 'User updated successfully!');
                navigation.goBack();
            } else {
                throw new Error('Error updating user');
            }
        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', `Failed to update the user: ${error.message}`);
        }
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

            <Button title="Save" onPress={handleSave} />
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
