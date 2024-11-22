import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import Grupos from '../screens/Grupos';
import Cadastro from '../screens/Cadastro';

const Tab = createBottomTabNavigator();

const HeaderImage = () => (
  <View style={styles.headerContainer}>
    <Image
      source={require('../../assets/faixa.png')} 
      style={styles.headerImage}
    />
  </View>
);

const ScreenWithHeader = ({ children }) => (
  <View style={styles.screenContainer}>
    <HeaderImage />
    {children}
  </View>
);

const WrappedHome = () => (
  <ScreenWithHeader>
    <Home />
  </ScreenWithHeader>
);

const WrappedPerfil = () => (
  <ScreenWithHeader>
    <Perfil />
  </ScreenWithHeader>
);

const WrappedGrupos = () => (
  <ScreenWithHeader>
    <Grupos />
  </ScreenWithHeader>
);

const WrappedCadastro = () => (
  <ScreenWithHeader>
    <Cadastro />
  </ScreenWithHeader>
);

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
            } else if (route.name === 'Cadastro') {
              iconName = 'edit';
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
        <Tab.Screen
          name="Home"
          component={WrappedHome}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={WrappedPerfil}
          options={{
            headerShown: false, 
          }}
        />
        <Tab.Screen
          name="Grupos"
          component={WrappedGrupos}
          options={{
            headerShown: false, 
          }}
        />
        <Tab.Screen
          name="Cadastro"
          component={WrappedCadastro}
          options={{
            headerShown: false, 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 120, 
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  headerImage: {
    width: '100%',
    height: '100',
    resizeMode: 'cover',
  },
  screenContainer: {
    flex: 1,
  
    backgroundColor: '#f4f4f4',
  },
});

export default Navigation;
