import React, { useState } from 'react';
import { preventAutoHideAsync } from 'expo-splash-screen';
import Navigation from './src/navigation/Navigation';
import { Splash } from './src/screens/Intro';
import Header from './src/components/Header';

preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>

      <Header /> 

      {!splashComplete ? (
        <Splash onComplete={() => setSplashComplete(true)} />
      ) : (
        <>
        
          <Navigation />
        </>
      )}
    </>
  );
}
