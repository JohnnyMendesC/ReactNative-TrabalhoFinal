import React, { useState } from 'react';
import { View, Text, Input, ButtonText, Alert, SubmitButton } from 'react-native';
import { View, Text, Input, MaskedInput, SubmitButton, ButtonText} from "./style";
import { MaskedInput } from 'react-native-masked-text';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
  
    const handleCadastro = () => {
      if (!nome || !endereco || !cpf || !telefone || !email) {
        Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
        return;
      }
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      
    };
  
    return (
      <View>
        <Text>Cadastro</Text>
        <Input
          placeholder="Nome Completo"
          value={nome}
          onChangeText={setNome}
        />
        <Input
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <MaskedInput
          type="cpf"
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
        />
        <MaskedInput
          type="cel-phone"
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
        />
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <SubmitButton onPress={handleCadastro}>
          <ButtonText>Cadastrar</ButtonText>
        </SubmitButton>
      </View>
    );
  };
  
  export default Cadastro;