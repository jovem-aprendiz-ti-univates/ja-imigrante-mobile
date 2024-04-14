import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importe o NavigationContainer
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TelaUm from './src/pages/Example/TelaUm';
import TelaDois from './src/pages/Example/TelaDois';
import Home from './src/pages/Home/Home';
import UsersList from './src/pages/Users/UserList';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false // Esconde o cabeçalho em todas as páginas
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="TelaUm"
          component={TelaUm}
          options={{
            tabBarLabel: 'Tela Um',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="TelaDois"
          component={TelaDois}
          options={{
            tabBarLabel: 'Tela Dois',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="UsersList"
          component={UsersList}
          options={{
            tabBarLabel: 'Users',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}