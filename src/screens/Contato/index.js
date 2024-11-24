import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const people = [
  {
    id: 1,
    profileImage: require('../../../assets/147656517.jpg'),
    cardBackground: require('../../../assets/1-Photoroom.png'),
    whatsapp: 'https://wa.me/5524981249584',
    linkedin: 'https://www.linkedin.com/in/marina-mayumi-a5a4a8153/',
  },
  {
    id: 2,
    profileImage: require('../../../assets/177572664.jpg'),
    cardBackground: require('../../../assets/2-Photoroom.png'),
    whatsapp: 'https://wa.me/5524999071823',
    linkedin: 'https://www.linkedin.com/in/gabriela-couto-duarte/',
  },
  {
    id: 3,
    profileImage: require('../../../assets/177888064.jpg'),
    cardBackground: require('../../../assets/3-Photoroom.png'),
    whatsapp: 'https://wa.me/5524988335102',
    linkedin: 'https://www.linkedin.com/in/j-mendes-do-carmo/',
  },
  {
    id: 4,
    profileImage: require('../../../assets/177891414.jpg'),
    cardBackground: require('../../../assets/4-Photoroom.png'),
    whatsapp: 'https://wa.me/553284791947',
    linkedin: '#',
  },
  {
    id: 5,
    profileImage: require('../../../assets/166236892.jpg'),
    cardBackground: require('../../../assets/5-Photoroom.png'),
    whatsapp: 'https://wa.me/5521993532331',
    linkedin: 'https://www.linkedin.com/in/odair-bretas-359196180/',
  },
];

const Contact = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {people.map((person) => (
        <View key={person.id} style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image source={person.cardBackground} style={styles.cardBackground} />
            <Image source={person.profileImage} style={styles.profileImage} />
          </View>
          <Text style={styles.name}>{person.name}</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => handleLinkPress(person.whatsapp)}
            >
              <FontAwesome name="whatsapp" size={30} color="#25D366" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => handleLinkPress(person.linkedin)}
            >
              <FontAwesome name="linkedin" size={30} color="#0077B5" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  cardContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#faf6f6',
    borderRadius: 35,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardBackground: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginBottom: 10,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
