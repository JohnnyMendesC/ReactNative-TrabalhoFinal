import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import { TextInput } from "react-native-gesture-handler";
import apiAutenticacao from "../../services/apiAutenticacao";

const response = await axios.get(apiAutenticacao, {
  email,
  senha
});
export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <EmailInput
        style={styles.input}
        placeholder="Digite seu email"
        textContentType="email"
        value={email}
        setValue={setEmail}
        onChangeText={setEmail}
      />

      <PasswordInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={senha}
        showSenha={showSenha}
        setShowSenha={setShowSenha}
        onChangeText={setSenha}
      />

      <TouchableOpacity 
        style={styles.loginButton}
        onPress={handleLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

        {/* <Text style={styles.login}>Login</Text>

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
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
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
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});