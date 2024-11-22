import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Esportes from '../Esportes';
import GroupPage from './GroupPage';


const Stack = createStackNavigator();

const Grupos = () => {
  return (
    <Stack.Navigator initialRouteName="GroupPage">
      {/* Página inicial com os cards */}
      <Stack.Screen 
        name="GroupPage" 
        component={GroupPage} 
        options={{ title: 'Grupos de Esportes' }} 
      />

      {/* Página dinâmica de detalhes */}
      <Stack.Screen 
        name="Esportes" 
        component={Esportes} 
        options={({ route }) => ({ title: route.params.sport.name })} 
      />
    </Stack.Navigator>
  );
};

export default Grupos;
