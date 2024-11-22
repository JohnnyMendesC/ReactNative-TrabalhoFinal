import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, TextInput } from "react-native-paper";
import { Context } from "../context/authContext";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";

const Login = ({ navigation }) => {
  const { state, teste } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.login}>Login</Text>

      <EmailInput value={email} setValue={setEmail} />
      <PasswordInput
        value={password}
        setValue={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <Button mode="contained" style={styles.loginButton}>
        Login
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text>
          Não tem uma conta?{" "}
          <Text style={styles.createAccountText}>Crie uma</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  login: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  createAccountText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;