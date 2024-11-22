import React, { useState } from 'react';
import { preventAutoHideAsync } from 'expo-splash-screen';
import Navigation from './src/navigation/Navigation';
import { Splash } from './src/screens/Intro';
import Header from './src/components/Header';
import { AuthProvider } from './src/contexts/Auth';



import { Router } from './src/routes/Router';
import { ClimaProvider } from './src/components/ClimaContext';
import { View } from 'react-native';


//preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(true);

  return (
    <>
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
      <AuthProvider>
      </AuthProvider>
    </>
  );
}
