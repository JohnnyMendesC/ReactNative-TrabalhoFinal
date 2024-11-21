
import { useState } from 'react';
import { Splash } from './src/screens/Intro';
import { Login } from './src/screens/Login';
import Header from './src/components/Header';
import { preventAutoHideAsync } from 'expo-splash-screen';

preventAutoHideAsync(); 

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false); 

  return (
    <>
      <Header /> 
      {splashComplete ? <Login /> : <Splash onComplete={setSplashComplete} />}
    </>
  );
}