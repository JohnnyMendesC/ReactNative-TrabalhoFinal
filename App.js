import { useState } from 'react';
import { Splash } from './src/screens/Intro';
import { Login } from './src/screens/Login';
import { preventAutoHideAsync } from 'expo-splash-screen'

preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);
  return (
    splashComplete
      ? <Login />
      : <Splash onComplete={setSplashComplete} />
  );
}