import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
     
      <Image
        source={require('../../../assets/adaptive-icon2.png')}
        style={styles.logo}
      />
      
      
      <Text style={styles.title}>Sports Connect</Text>

     
      <TouchableOpacity style={styles.profileButton}>
        <Image
          source={{ uri: 'https://www.flaticon.com/br/icone-gratis/do-utilizador_149071?term=perfil&page=1&position=12&origin=search&related_id=149071' }}
          style={styles.profileIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  profileButton: {
    width: 40,
    height: 40,
  },
  profileIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default Header;
