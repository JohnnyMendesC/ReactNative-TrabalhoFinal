import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import Grupos from '../screens/Grupos';
import Cadastro from '../screens/Cadastro'
const Tab = createBottomTabNavigator();  

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        
          animationEnabled: true,
          gestureEnabled: true,

          
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Perfil') {
              iconName = 'user';
            } else if (route.name === 'Grupos') {
              iconName = 'users';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          
          
          tabBarStyle: {
            backgroundColor: 'black', 
          },
          
        
          tabBarActiveTintColor: '#F03115',  
          tabBarInactiveTintColor: 'gray', 
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Grupos" component={Grupos} />
        <Tab.Screen name="Cadastro" component={Cadastro} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
