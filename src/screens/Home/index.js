import React from 'react';
import { View, Text } from 'react-native';
import { Clima } from '../../components/PrevisaoClima';


const Home = () => {

  return (
    <View>
     <Clima />
     <Text> Home</Text>
    </View>
  );
};

export default Home;