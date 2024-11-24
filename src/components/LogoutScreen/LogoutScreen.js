import React, { useEffect } from 'react';

const LogoutScreen = ({ onLogout }) => {
  useEffect(() => {
    onLogout(); // Executa a lógica de logout assim que a tela for montada
  }, [onLogout]);

  return null; // Nenhum conteúdo será exibido
};

export default LogoutScreen;
