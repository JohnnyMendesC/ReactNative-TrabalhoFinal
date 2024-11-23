import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Video } from "expo-av";
import { MaterialIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const handleLogoPress =() =>{
 

  }
  const videoRef = React.useRef(null);

  const posts = [
    {
      id: '1',
      userName: '@JoaoSiilv',
      userPhoto: require('../../../assets/USUARIO 4.jpg'),
      postImage: require('../../../assets/postagem1.jpeg'),
      description: 'Aproveitando o dia com esses feras',
    },
    {
      id: '2',
      userName: '@Dudinha.eu',
      userPhoto: require('../../../assets/USUARIO 2.jpg'),
      postImage: require('../../../assets/postagem2.jpg'),
      description: 'Explorando novos lugares na slackline 🌍',
    },
    {
      id: '3',
      userName: '@Mari.vasc',
      userPhoto: require('../../../assets/FOTO USUARIO 1.jpg'),
      postImage: require('../../../assets/SELFIE 2.jpg'),
      description: 'Um futzinho ⚽',
    },
    {
      id: '4',
      userName: '@JoaoSiilv',
      userPhoto: require('../../../assets/USUARIO 4.jpg'),
      postImage: require('../../../assets/SELFIE 3.jpg'),
      description: 'Fechamos esse torneio #BeachTenis',
    },
  ];

  const partnerships = [
    {
      id: '1',
      name: 'FlowFit',
      logo: require('../../../assets/ESTABELECIMENTO 5.jpg'),
    },
    {
      id: '2',
      name: 'GNC',
      logo: require('../../../assets/ESTABELECIMENTO 4.jpg'),
    },
    {
      id: '3',
      name: 'VVVA',
      logo: require('../../../assets/ESTABELECIMENTO 2.jpg'),
    },
    {
      id: '4',
      name: 'Natura-LÊ',
      logo: require('../../../assets/ESTABELECIMENTO 6.jpg'),
    },
    {
      id: '5',
      name: 'Corpo e Alma',
      logo: require('../../../assets/ESTABELECIMENTO 7.jpg'),
    },
    {
      id: '6',
      name: 'simple',
      logo: require('../../../assets/simple.jpg'),
    },
  ];

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
          shouldPlay
        />
      </View>

    

      <View style={styles.postsContainer}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Image source={post.userPhoto} style={styles.userPhoto} />
              <Text style={styles.userName}>{post.userName}</Text>
            </View>
            <Image source={post.postImage} style={styles.postImage} />
            <Text style={styles.postDescription}>{post.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.partnershipsContainer}>
        <MaterialIcons name="group" size={24} color="#6200ea" style={styles.icon} />
        <Text style={styles.partnershipsTitle}>Parcerias</Text>
      </View>

      <ScrollView
        style={styles.horizontalScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.partnershipsList}
      >
        {partnerships.map((partner) => (
          <View key={partner.id} style={styles.partnerItem}>
            <Image source={partner.logo} style={styles.partnerLogo} />
            <Text style={styles.partnerName}>{partner.name}</Text>
          </View>
        ))}
      </ScrollView>
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
    backgroundColor:'black'
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
  postsContainer: {
    width: '100%',
    marginTop: 20,
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  postDescription: {
    padding: 10,
    fontSize: 14,
    color: '#555',
  },
  partnershipsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  partnershipsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ea',
    marginLeft: 8,
  },
  horizontalScroll: {
    marginTop: 10,
    width: '100%',
  },
  partnershipsList: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  partnerItem: {
    alignItems: 'center',
    marginRight: 15,
    width: 80,
  },
  partnerLogo: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  partnerName: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    width: 80,
  },
  icon: {
    marginLeft: 5,
  },
});

export default Home;
