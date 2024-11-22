import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Video } from "expo-av";

const Home = ({ navigation }) => {
  const videoRef = React.useRef(null);
  const handleNavigate = () => {
    navigation.navigate('Details');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require("../../../assets/juntosvideo.mp4")}
          style={styles.video}
          resizeMode="contain"
          isLooping
        />
      </View>


      <Text style={styles.welcomeText}>Bem-vindo a JUNTOS!</Text>
      <Text style={styles.description}>
        Encontre Sua Companhia Perfeita Para Cada Passo 🚴‍♀️🤝
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#6200ea' }]}
          onPress={handleNavigate}
        >
          <Text style={styles.buttonText}>Ir para detalhes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#03a9f4' }]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  videoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9, 
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    width: '90%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Home;
