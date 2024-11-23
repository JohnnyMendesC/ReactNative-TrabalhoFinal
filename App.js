import React, { useState } from 'react';
import NavigationContainer from './src/navigation/Navigation';
import { Splash } from './src/screens/Intro';
import Header from './src/components/Header';
import { ClimaProvider } from './src/components/ClimaContext';
import { View } from 'react-native';

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <ClimaProvider>
      <NavigationContainer>
        {!splashComplete ? (
          <Splash onComplete={() => setSplashComplete(true)} />
        ) : (
          <View style={{ flex: 1 }}>
            <Header />
            <Navigation />
          </View>
        )}
      </NavigationContainer>
    </ClimaProvider>
  );
}
