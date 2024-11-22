import React from 'react';
import { Home } from '../screens/Home';

export function AppStack(){

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerTitle: 'Home'}} />
        </Stack.Navigator>
    )
}