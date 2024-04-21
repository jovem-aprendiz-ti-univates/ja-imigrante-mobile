import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TelaUm from './src/pages/Example/TelaUm';
import TelaDois from './src/pages/Example/TelaDois';
import Home from './src/pages/Home/Home';
// import UserList from './src/pages/Users/UserList';
import UserListModal from './src/pages/Users/UserListModal';
import UsersAula from './src/pages/Users/UsersAula';
import UsersRegistration from './src/pages/Users/UsersRegistration';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="lightblue" />
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
        {/* <Tab.Screen
          name="UsersList"
          component={UserList}
          options={{
            tabBarLabel: 'Users',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={size} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="UsersListModal"
          component={UserListModal}
          options={{
            tabBarLabel: 'Users Modal',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="UsersRegistration"
          component={UsersRegistration}
          options={{
            tabBarLabel: 'Users Register',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-plus" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}