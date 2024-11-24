import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/screens/Login/login';
import Cadastro from './src/screens/Cadastro';
import Navigation from './src/components/navigation/Navigation';
import { ClimaProvider } from './src/components/ClimaContext';
import Header from './src/components/Header';
import { preventAutoHideAsync } from 'expo-splash-screen';
import { Splash } from './src/screens/Intro';
import Sobre from './src/screens/Sobre';
import Contato from './src/screens/Contato';

const Drawer = createDrawerNavigator();
preventAutoHideAsync();

const App = () => {
  const [splashComplete, setSplashComplete] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem('@user');
      setIsLoggedIn(!!user);
      setIsLoading(false);
    };
    checkLoginStatus();
  }, []);

  const handleLoginSuccess = () => setIsLoggedIn(true);
  const handleLogout = async () => {
    await AsyncStorage.removeItem('@user');
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ClimaProvider>
      <NavigationContainer>
        {!splashComplete ? (
          <Splash onComplete={() => setSplashComplete(true)} />
        ) : (
          <Drawer.Navigator initialRouteName={isLoggedIn ? 'Main' : 'Login'}>
            {/* Telas de autenticação */}
            {!isLoggedIn && (
              <>
                <Drawer.Screen name="Login">
                  {(props) => <Login {...props} onLoginSuccess={handleLoginSuccess} />}
                </Drawer.Screen>
                <Drawer.Screen name="Cadastro" component={Cadastro} />
                <Drawer.Screen name="Sobre" component={Sobre} />
                <Drawer.Screen name="Contato" component={Contato} />
              </>
            )}

            {/* Fluxo principal */}
            {isLoggedIn && (
              <Drawer.Screen name="Main" options={{ headerShown: false }}>
                {() => (
                  <View style={{ flex: 1 }}>
                    <Header />
                    <Navigation onLogout={handleLogout} />
                  </View>
                )}
              </Drawer.Screen>
            )}
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </ClimaProvider>
  );
};

export default App;
