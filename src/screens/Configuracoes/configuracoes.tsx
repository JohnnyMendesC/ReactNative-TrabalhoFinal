import { Text, View } from "react-native-reanimated/lib/typescript/Animated";
import { MyButton } from "../../components/MyButton";
import { styles } from "./style";
import { useAuth } from "../../contexts/Auth";

export function Configuracoes() {
    
    const {logout} = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configurações</Text>
            <MyButton 
                title="Sair" 
                onPress={logout}
                style={{backgroundColor: 'red'}} 
                accessibilityLargeContentTitle="Sair do App"
                />
        </View>
    )
}