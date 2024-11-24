import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Esportes from '../Esportes';
import GroupPage from './GroupPage';


const Stack = createStackNavigator();
import { View, Text } from 'react-native';
import Login from '../Login/login';

const Grupos = () => {
  return (
    <Stack.Navigator initialRouteName="GroupPage">
     
      <Stack.Screen 
        name="GroupPage" 
        component={GroupPage} 
        options={{ title: 'Grupos de Esportes' }} 
      />

      
      <Stack.Screen 
        name="Esportes" 
        component={Esportes} 
        options={({ route }) => ({ 
          title: 'Voltar', 
          headerBackTitle: 'Voltar', 
          headerBackTitleVisible: true, 
        })}  
      />
    </Stack.Navigator>
  );
};

export default Grupos;
