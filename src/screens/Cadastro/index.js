import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const buscarEndereco = async () => {
    if (!cep) {
      Alert.alert('Erro', 'Digite um CEP válido.');
      return;
    }

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data.erro) {
        Alert.alert('Erro', 'CEP não encontrado.');
        return;
      }

      setEndereco(response.data.logradouro || '');
      setBairro(response.data.bairro || '');
      setCidade(response.data.localidade || '');
      setEstado(response.data.uf || '');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar o endereço. Verifique o CEP.');
      console.error(error);
    }
  };

  const handleCadastro = async () => {
    if (!nome || !endereco || !bairro || !cidade || !estado || !cpf || !telefone || !email || !senha || !sobreNome || !cep) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
      return;
    }

    try {
      const apiUrl = 'https://66fdc9cc69936930895633ef.mockapi.io/Cadastro';

      const response = await axios.post(apiUrl, {
        nome,
        sobreNome,
        cep,
        endereco,
        bairro,
        cidade,
        estado,
        cpf,
        telefone,
        email,
        senha,
      });

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        setNome('');
        setSobreNome('');
        setCep('');
        setEndereco('');
        setBairro('');
        setCidade('');
        setEstado('');
        setCpf('');
        setTelefone('');
        setEmail('');
        setSenha('');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert(
        'Erro',
        error.response?.data?.message || 'Não foi possível realizar o cadastro.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={sobreNome}
          onChangeText={setSobreNome}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          value={cep}
          onChangeText={setCep}
          onBlur={buscarEndereco}
          keyboardType="numeric"
          maxLength={8}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          value={bairro}
          onChangeText={setBairro}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          value={cidade}
          onChangeText={setCidade}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          value={estado}
          onChangeText={setEstado}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF (somente números)"
          value={cpf}
          onChangeText={(text) => setCpf(text.replace(/[^0-9]/g, ''))}
          keyboardType="numeric"
          maxLength={11}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone (somente números)"
          value={telefone}
          onChangeText={(text) => setTelefone(text.replace(/[^0-9]/g, ''))}
          keyboardType="phone-pad"
          maxLength={11}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cadastro;
