import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sobre = () => {
  const navigation = useNavigation();

  const handleContactPress = () => {
    navigation.navigate('Contato'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.description}>
        Nosso aplicativo foi criado para conectar pessoas dentro de seus esportes favoritos. Um local onde você pode encontrar parceiros para jogar ou treinar junto. 
      </Text>
      <Text style={styles.description}>
        Participe de grupos de esportes variados e não fique sozinho! Nosso app foi desenvolvido especialmente para mulheres que gostam de praticar esportes individuais, como corrida ou ciclismo, mas têm receio de sair sozinhas. Aqui, você pode encontrar uma parceria para correr ou pedalar com você.
      </Text>
      <Text style={styles.description}>
        Quer jogar futebol, vôlei, basquete, tênis, mas não tem um grupo? Encontre o grupo perfeito para você no nosso aplicativo!
      </Text>

      {/* Botão para a página de contato */}
      <TouchableOpacity style={styles.contactButton} onPress={handleContactPress}>
        <Text style={styles.contactButtonText}>Entre em Contato</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sobre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6200ee',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 15,
  },
  contactButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
