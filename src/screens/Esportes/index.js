import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Esportes = ({ route }) => {
  const { sport } = route.params;
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToGroup = () => {
    setIsAdded(true);
    Alert.alert('Parabéns!', `Você foi adicionado ao grupo de ${sport.name}.`);
  };

  return (
    <View style={styles.container}>
      <Image source={sport.image} style={styles.image} />
      <Text style={styles.title}>{sport.name}</Text>
      <Text style={styles.description}>
        Bem-vindo ao grupo de {sport.name}.
      </Text>
      <Text style={styles.description}>
      Aqui você pode interagir com outros entusiastas deste esporte!
      </Text>

      {!isAdded ? (
  <TouchableOpacity style={styles.button} onPress={handleAddToGroup}>
    <Text style={styles.buttonText}>Participar do Grupo</Text>
  </TouchableOpacity>
) : (
  <TouchableOpacity style={[styles.button, styles.buttonDisabled]} disabled>
    <Text style={styles.buttonText}>Você já faz parte!</Text>
  </TouchableOpacity>
)}
    </View>
  );
};

export default Esportes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addedMessage: {
    fontSize: 16,
    color: '#4CAF50',
    marginTop: 20,
  },
});
