import React, { useState } from 'react';
import { Splash } from './src/screens/Intro';
import Header from './src/components/Header';
import { preventAutoHideAsync } from 'expo-splash-screen';
import Navigation from './src/navigation/Navigation'; 

preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>
      <Header />
      {splashComplete ? <Navigation /> : <Splash onComplete={setSplashComplete} />}
    </>
  );
}
