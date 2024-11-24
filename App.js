import React, { useState } from 'react';
//import NavigationContainer from './src/navigation/Navigation';
import { Splash } from './src/screens/Intro';
import Header from './src/components/Header';
import { ClimaProvider } from './src/components/ClimaContext';
import { View } from 'react-native';
import Navigation from './src/components/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/components/Drawer';
import RoutesDrawer from './routes';
import { preventAutoHideAsync } from 'expo-splash-screen';

//preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(true);

  return (
    <ClimaProvider>
      {/* PRIMEIRO LOAD DESTINADO A INTRO SPLASH E AO LOGIN/CADASTRO */}
      <NavigationContainer>

        {!splashComplete ? (
          <Splash onComplete={() => setSplashComplete(true)} />
        ) : (
          <View style={{ flex: 1 }}>
            <RoutesDrawer />
          </View>
        )}
      </NavigationContainer>

      {/* SEGUNDO LOAD CONDICIONADO A SOMENTE CARREGAR APÓS O LOGIN */}
      <Header />
      <Navigation />
    </ClimaProvider>
  );
}