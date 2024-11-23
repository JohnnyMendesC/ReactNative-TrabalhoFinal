import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Drawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.itemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.itemText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Sobre')}>
        <Text style={styles.itemText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.itemText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.itemText}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('EsqueciSenha')}>
        <Text style={styles.itemText}>Esqueci Minha Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginVertical: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Drawer;
