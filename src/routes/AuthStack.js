import React from 'react';
import { Login } from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export function AuthStack(){

    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.onBackground,
                headerStyle: {backgroundColor: colors.backgroundSecondary}
            }}
        >
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{headerTitle: 'Login'}}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}