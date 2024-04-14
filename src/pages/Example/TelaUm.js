import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function TelaUm({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>TelaUm</Text>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('TelaDois')}
            >
                <Text style={styles.text}>Ir para tela dois</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderColor: 'blue',
        borderWidth: 2,
        elevation: 3,
        backgroundColor: 'white',
    },
    text: {
        color: 'black'
    }
})
