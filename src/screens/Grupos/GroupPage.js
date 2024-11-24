import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
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
      {/* Header */}
      <Image source={require('../../../assets/faixa.png')} style={styles.headerImage} />


      <Text style={styles.headerText}>Grupos de Esportes</Text>

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
  },
  headerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#7344d9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 30,
  },

  listContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  card: {
    width: 180, 
    height: 240, 
    margin: 12, 
    backgroundColor: '#fff',
    borderRadius: 12, 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  cardImage: {
    width: 120, 
    height: 120, 
    resizeMode: 'contain',
    marginBottom: 10,
  },

  cardButton: {
    backgroundColor: '#7344d9',
    paddingHorizontal: 12,
    paddingVertical: 8, 
    borderRadius: 5,
  },

  cardButtonText: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
