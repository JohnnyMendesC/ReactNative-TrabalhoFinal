import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../screens/Login/login'; // Tela de Login
import Cadastro from '../screens/Cadastro'; // Tela de Cadastro
import Sobre from '../screens/Sobre'; // Tela Sobre
import Contato from '../screens/Contato'; // Tela Contato

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const user = await AsyncStorage.getItem('@user');
        if (user) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Erro ao verificar status de login:', error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@user');
      setIsLoggedIn(false);
      Alert.alert('Logout', 'Você saiu com sucesso.');
      // Redefine a navegação para a tela de Login
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
  };

  const LogoutButton = () => (
    <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
      <Text style={styles.logoutText}>Sair</Text>
    </TouchableOpacity>
  );

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
        {!isLoggedIn ? (
          <>
            <Drawer.Screen name="Login">
              {() => <Login onLoginSuccess={() => setIsLoggedIn(true)} />}
            </Drawer.Screen>
            <Drawer.Screen name="Cadastro" component={Cadastro} />
          </>
        ) : (
          <>
            <Drawer.Screen name="Sobre" component={Sobre} />
            <Drawer.Screen name="Contato" component={Contato} />
          </>
        )}
      </Drawer.Navigator>

      {isLoggedIn && <LogoutButton />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    padding: 15,
    backgroundColor: '#ff5c5c',
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
