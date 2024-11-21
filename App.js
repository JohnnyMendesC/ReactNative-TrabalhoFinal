import React, { useState, useEffect } from 'react';
import { preventAutoHideAsync } from 'expo-splash-screen';
import Navigation from './src/navigation/Navigation';
import { Splash } from './src/screens/Intro';
import { Login } from './src/screens/Login';

preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!splashComplete ? (
        <Splash onComplete={() => setSplashComplete(true)} />
      ) : isLoggedIn ? (
        <Navigation />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}