import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/adaptive-icon2.png')}
        style={styles.logo}
      />

      <View style={styles.searchContainer}>
       
        <Icon name="search" size={20} color="white" style={styles.searchIcon} /> 

        <TextInput 
         style={styles.searchInput}
         placeholder="Pesquisar"
         placeholderTextColor='white'
         value={text}
         onChangeText={setText}
      
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop:45,
    backgroundColor: 'black',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileButton: {
    width: 40,
    height: 40,
  },
  profileIcon: {
    width: 10,
    height: 10,
  
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 40,
    marginLeft: 10,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchInput:{
    flex:1,
    height:40,
    marginLeft:10,
    paddingHorizontal:10,
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'#333',
    borderRadius:5,
    color: 'white',
    fontSize:16,
  },
  searchIcon: {
    marginRight: 10,
    width:20,
    height:20,
  },

});

export default Header;
