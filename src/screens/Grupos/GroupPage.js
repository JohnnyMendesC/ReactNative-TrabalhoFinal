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
];

const GroupPage = () => {
  const navigation = useNavigation();

  const handleNavigate = (sport) => {
    navigation.navigate('Esportes', { sport });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleNavigate(item)}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.name}</Text>
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
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImage: {
    width: '100%',
  aspectRatio: 16 / 9, 
  borderRadius: 10,
  marginBottom: 20,
  resizeMode: 'cover',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
});
