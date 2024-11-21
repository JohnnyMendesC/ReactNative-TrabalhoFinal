import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import { Clima } from '../../components/PrevisaoClima';

export function Login() {
  return (
    <View style={styles.screen}>
      
      <View>
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}