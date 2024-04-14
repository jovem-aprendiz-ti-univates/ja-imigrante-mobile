import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
           
            <Button title="Ir para TelaUm" onPress={() => navigation.navigate('TelaUm')} />
            <Button title="Ir para TelaDois" onPress={() => navigation.navigate('TelaDois')} />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
            <Button
                title="Voltar para a primeira tela da pilha"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}