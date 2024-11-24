// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Drawer = ({ onLoginSuccess }) => {
//   const handleLogin = async () => {
//     const mockUserData = { nome: 'Usuário', email: 'usuario@example.com' }; // Mock para simular um login
//     await AsyncStorage.setItem('@user', JSON.stringify(mockUserData));
//     onLoginSuccess(mockUserData); // Informa ao App que o login foi realizado
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Bem-vindo ao App</Text>
//       <View style={styles.main}>
//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.loginText}>MockLogin</Text>
//         </TouchableOpacity>


//         <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
//           <Text style={styles.loginText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Cadastro')}>
//           <Text style={styles.loginText}>Cadastro</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Sobre')}>
//           <Text style={styles.itemText}>Sobre</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Contato')}>
//           <Text style={styles.itemText}>Contato</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.item} onPress={() => alert("Instruções enviadas ao seu e-mail cadastrado para redefinir sua senha")}>
//           <Text style={styles.itemText}>Esqueci Minha Senha</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Drawer;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   main: {
//     flexDirection: "column",
//   },
//   footer: {
//     flexDirection: "column",
//     justifyContent: "flex-end",
//     alignContent: 'flex-end',
//     alignItems: 'flex-end',
//   },
//   loginButton: {
//     backgroundColor: '#6200ee',
//     padding: 15,
//     borderRadius: 8,
//     margin: 5,
//   },
//   loginText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   item: {
//     alignSelf: 'center',
//     margin: 5,
//   },
// });
