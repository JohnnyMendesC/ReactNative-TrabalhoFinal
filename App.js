import { useState } from 'react';
import { Splash } from './src/screens/Intro';
import { Login } from './src/screens/Login';
import Header from './src/components/Header'; // Importa o Header
import { preventAutoHideAsync } from 'expo-splash-screen';

preventAutoHideAsync(); // Comentado para pular intro

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false); // true para testes sem a intro, padrão false

  return (
    splashComplete ? (
      <>
        <Header />
        <Login />
      </>
    ) : (
      <Splash onComplete={setSplashComplete} />
    )
  );
}