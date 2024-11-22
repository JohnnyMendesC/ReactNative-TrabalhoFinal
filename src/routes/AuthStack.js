import React from 'react';
import { Login } from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack}

const Stack = createNativeStackNavigator();
export function AuthStack(){

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerTitle: 'Login'}} />
        </Stack.Navigator>
    )
}