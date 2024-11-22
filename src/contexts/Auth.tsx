import { createContext, useContext, useEffect, useState } from 'react';
import {authService} from '../services/authService';
import React from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthData {
    token: string;
    email: string;
    name: string;
}    
export interface AuthContextData {
    authData ?: AuthData;
    login: (email: string, senha: string) => Promise<AuthData>;
    logout: () => Promise<void>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

    const [authData, setAuth] = useState<AuthData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFromStorage();
    }, []);

    async function loadFromStorage(){
        const auth = await AsyncStorage.getItem('@AuthData');
        if (auth) {
            setAuth(JSON.parse(auth) as AuthData);
        }
        setLoading(false);
    }

    async function login(email: string, senha: string) {
        try {
            
            const auth = await authService.login(email, senha);
    
            setAuth(auth);
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth));

        } catch (error) {
            Alert.alert(error.message, 'Tente novamente');
            
        }
        
    }

    async function logout(): Promise<void> {
        setAuth(undefined);
        AsyncStorage.removeItem('@AuthData');

        return;
    }

    return (
        <AuthContext.Provider value={{authData, login, logout, loading}}>
          {children}
        </AuthContext.Provider>
      );
    };

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }
