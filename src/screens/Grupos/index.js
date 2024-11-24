import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
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
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Esportes"
        component={Esportes}
        options={({ navigation }) => ({
          title: '', 
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.customBackButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.customBackText}>Voltar</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Grupos;

const styles = StyleSheet.create({
  customBackButton: {
    backgroundColor: '#7344d9',
    paddingHorizontal: 16,
    paddingVertical: 8, 
    borderRadius: 20, 
    marginLeft: 10, 
  },
  customBackText: {
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold',
  },
});
