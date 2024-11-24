import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Drawer = ({ navigation }) => {
  return (
    <DrawerContentScrollView style={{ flex: 1 }}>
      {console.log("drawer component")}
      <View style={styles.container}>
        <View style={styles.container}>
          <Image source={require("../../../assets/perfil.png")} style={{ width: 65, height: 65 }} />
          <Text style={styles.container}>Boas vindas! Vamos JUNTOS</Text>
        </View>
        <Text style={styles.title}>Menu</Text>

        {/* <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.itemText}>Home</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity> */}


        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.itemText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.itemText}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Sobre')}>
          <Text style={styles.itemText}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => alert("Instruções enviadas ao seu e-mail cadastrado para redefinir sua senha")}>
          <Text style={styles.itemText}>Esqueci Minha Senha</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
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
