import React, { useState } from 'react';
//import NavigationContainer from './src/navigation/Navigation';
import { Splash } from './src/screens/Intro';
import Header from './src/components/Header';
import { ClimaProvider } from './src/components/ClimaContext';
import { View } from 'react-native';
import Navigation from './src/components/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/components/Drawer';

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <ClimaProvider>
        {!splashComplete ? (
          <Splash onComplete={() => setSplashComplete(true)} />
        ) : (
          // o flex não precisa ser .3, é só pro drawer não sumir pois ele fica pequeno
          <View style={{ flex: .3 }}>
            <Drawer /> 
          {/* Drawer só se exemplo, ele não precisa ficar aqui exatamente(os botoes dele estão quebrados) */}
          </View>
        )}
        <Header />
        <Navigation />
        {/* header e navigation podem estar em outro espaço também */}
      </ClimaProvider>
  );
}
