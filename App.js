import React, { useState } from 'react';
import Navigation from './src/navigation/Navigation';
import { Splash } from './src/screens/Intro';
import Header from './src/components/Header';
import { ClimaProvider } from './src/components/ClimaContext';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login/login';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [splashComplete, setSplashComplete] = useState(true);
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
      
      <ClimaProvider >
        {!splashComplete ? (
          <Splash onComplete={() => setSplashComplete(true)} />
        ) : (
          <View style={{ flex: 1 }}>
            <Header />
            <Navigation />
          </View>
        )}
      </ClimaProvider>
    </>
  );
}