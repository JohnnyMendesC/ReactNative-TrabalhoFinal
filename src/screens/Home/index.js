import React from 'react';
import { View, Text } from 'react-native';
import { Clima } from '../../components/PrevisaoClima';


const Home = () => {

  return (
    <View>
     <Clima />
     <View>
        <Text> 
          Home
        </Text>
     </View>
    </View>
  );
};

export default Home;