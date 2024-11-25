import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../../screens/Home';
import Perfil from '../../screens/Perfil';
import Grupos from '../../screens/Grupos';
import Cadastro from '../../screens/Cadastro';
import Login from '../../screens/Login/login';
import Contato from '../../screens/Contato';
import LogoutScreen from '../LogoutScreen/LogoutScreen';
import { Image, StyleSheet, View } from 'react-native';
import Sobre from '../../screens/Sobre';

const Tab = createBottomTabNavigator();
console.log("Bottom Tab navigation")
const HeaderImage = () => (
  <View style={styles.headerContainer}>
    <Image
      source={require('../../../assets/faixa.png')}
      style={styles.headerImage}
    />
  </View>
);

const Navigation = ({ onLogout }) => {
  return (
    <>
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
            } else if (route.name === 'Login') {
              iconName = 'sign-in';
            } else if (route.name === 'Contato') {
              iconName = 'at';
            } else if (route.name === 'Sobre nós') {
              iconName = 'info-circle';
            } else if (route.name === 'Sair') {
              iconName = 'sign-out';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { backgroundColor: 'black' },
          tabBarActiveTintColor: '#F03115',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          header: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require('../../../assets/faixa.png')}
                style={styles.headerImage}
              />
            </View>
          ),
        }}
        />
        <Tab.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{
          header: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require('../../../assets/faixa.png')}
                style={styles.headerImage}
              />
            </View>
          ),
        }}
        />
        <Tab.Screen 
        name="Grupos" 
        component={Grupos}
        options={{
          header: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require('../../../assets/faixa.png')}
                style={styles.headerImage}
              />
            </View>
          ),
        }}/>
        <Tab.Screen 
        name="Contato" 
        component={Contato} 
        options={{
          header: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require('../../../assets/faixa.png')}
                style={styles.headerImage}
              />
            </View>
          ),
        }}
        />
        <Tab.Screen 
        name="Sobre nós" 
        component={Sobre} 
        options={{
          header: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require('../../../assets/faixa.png')}
                style={styles.headerImage}
              />
            </View>
          ),
        }}
        />

        <Tab.Screen name="Sair">
          {() => <LogoutScreen onLogout={onLogout} />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 35,
    backgroundColor: '#ddd',
    marginBottom: 0,
  },
  headerImage: {
    width: '100%',
    height: 47,
    resizeMode: 'cover',
    marginTop: -13,
  },
  screenContainer: {
    flex: 1,

    backgroundColor: '#f4f4f4',
  },
});
export default Navigation;
