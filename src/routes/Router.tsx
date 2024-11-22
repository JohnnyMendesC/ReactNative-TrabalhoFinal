import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { useAuth } from '../contexts/Auth';
import { AuthStack } from './AuthStack';
import { Text, View } from 'react-native-reanimated/lib/typescript/Animated';

export function Router() {

    const {authData, loading} = useAuth();
    if(loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Carregando o aplicativo...</Text>
            </View>    
        );
    }

    return (
        <NavigationContainer>
            {authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )

}