import { View } from 'react-native';
import { styles } from './styles'
import { Clima } from '../../components/PrevisaoClima';
import { MyButton } from '../../components/MyButton';
import { useState } from 'react';
import { MyTextInput } from '../../components/MyTextInput';
import { useAuth } from '../../contexts/Auth';

export function Login() {
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      
      <MyTextInput 
        placeholder="email" 
        value={email} 
        onChangeText={setEmail} 
      />
      <MyTextInput 
        secureTextEntry
        placeholder="senha" 
        value={senha} 
        onChangeText={setSenha} 
      />
      <MyButton 
        onPress={() => login(email, senha)}
        title="Acessar sua conta" 
      />
    </View>
  );
}