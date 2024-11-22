import { AuthData } from "../contexts/Auth";

const login = (email:string, senha:string): Promise<AuthData> => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(senha === '123456'){
                resolve({
                    token: 'token_example',
                    email: 'dai@gmail.com',
                    name: 'Daiane Ferreira'
                });
            } else {
                reject(new Error('Credenciais inválidas'));
            }
        }, 500);
    });
}

export const authService = {login};