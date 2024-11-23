import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const sports = [
  { id: '1', name: 'Vôlei', image: require('../../../assets/volei.png') },
  { id: '2', name: 'Futebol', image: require('../../../assets/futebol.png') },
  { id: '3', name: 'Beach Tennis', image: require('../../../assets/beachtennis.png') },
  { id: '4', name: 'Corrida', image: require('../../../assets/corrida.jpg') },
  { id: '5', name: 'Bicicleta', image: require('../../../assets/ciclista.png') },
  { id: '6', name: 'Basquete', image: require('../../../assets/basquete.png') },
  { id: '7', name: 'Corssfit', image: require('../../../assets/crossfit.png') },
  { id: '8', name: 'Dança', image: require('../../../assets/danca.png') },
  { id: '9', name: 'Jumping', image: require('../../../assets/jumping.png') },
  { id: '10', name: 'Pilates', image: require('../../../assets/Pilates.png') },
  { id: '11', name: 'Tenis', image: require('../../../assets/tenis.png') },
  { id: '12', name: 'Yoga', image: require('../../../assets/yoga.png') },
];

const GroupPage = () => {
  const navigation = useNavigation();

  const handleNavigate = (sport) => {
    navigation.navigate('Esportes', { sport });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleNavigate(item)}>
      <Image source={item.image} style={styles.cardImage} />
      <TouchableOpacity style={styles.cardButton} onPress={() => handleNavigate(item)}>
        <Text style={styles.cardButtonText}>{item.name}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um grupo</Text>
      <FlatList
        data={sports}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default GroupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    backgroundColor: '#4CAF50', 
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    width: 150, 
    height: 200, 
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10, 
  },
  cardButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  cardButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
