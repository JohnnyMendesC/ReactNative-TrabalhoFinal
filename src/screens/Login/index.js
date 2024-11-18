import { Text, View } from 'react-native';
import { Clima } from '../../components/PrevisaoClima';

export function Login() {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
      <Clima/>
      <Text style={{color:'black', fontSize:32, fontWeight:'bold'}}>Login</Text>
    </View>
  );
}