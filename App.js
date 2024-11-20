import { useState } from 'react';
import { Splash } from './src/screens/Intro';
import { Login } from './src/screens/Login';
import { preventAutoHideAsync } from 'expo-splash-screen'

//preventAutoHideAsync(); //comentado para pular intro

export default function App() {
  const [splashComplete, setSplashComplete] = useState(true);//true para testes sem a intro, padrao false
  return (
    splashComplete
      ? <Login />
      : <Splash onComplete={setSplashComplete} />
    
  );
}