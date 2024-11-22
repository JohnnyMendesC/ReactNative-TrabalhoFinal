import React, { useState } from 'react';
import { preventAutoHideAsync } from 'expo-splash-screen';
import Navigation from './src/navigation/Navigation';
import { Splash } from './src/screens/Intro';
import Header from './src/components/Header';
import { ClimaProvider } from './src/components/ClimaContext';

preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <ClimaProvider>
      <Header />
      {!splashComplete ? (
        <Splash onComplete={() => setSplashComplete(true)} />
      ) : (
        <>
          <Navigation />
        </>
      )}
    </ClimaProvider>
  );
}
