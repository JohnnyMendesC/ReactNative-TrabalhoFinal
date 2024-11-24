import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login/login'; // Tela de Login
import Cadastro from '../screens/Cadastro'; // Tela de Cadastro
import Sobre from '../screens/Sobre'; // Tela Sobre
import Contato from '../screens/Contato'; // Tela Contato

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ onLoginSuccess }) {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#f4f4f4',
            width: 240,
          },
          drawerActiveTintColor: '#6200ee',
          drawerInactiveTintColor: 'gray',
        }}
      >
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Contato" component={Contato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
