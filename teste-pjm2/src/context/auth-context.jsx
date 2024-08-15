import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null, // pode ser null ou {}
    signIn: async () => {}, // função entrar na aplicação
    signOut: () => {} // função para "remover" o estado do usuario da aplicar 
})
// simular uma chamada para api => fetch
// async function apiAuth(url, data) {
//     console.log(url, data)
//     return new Promise(resolve => setTimeout(resolve, 3000))
// }

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLoggedStorage = localStorage.getItem('@lab365:userLogged')

        if(userLoggedStorage) {
            return JSON.parse(userLoggedStorage)
        }

        return null
    })

    async function signIn(data) {
        try {
          // Realizar a requisição para o banco de dados (ou simular com db.json)
          const response = await fetch('http://localhost:3333/usuarios');
          const usuarios = await response.json();
      
          // Encontrar o usuário com as credenciais informadas
          const usuarioEncontrado = usuarios.find(usuario => usuario.email === data.email && usuario.senha === data.password);
      
          if (usuarioEncontrado) {
            setUser(usuarioEncontrado);
            localStorage.setItem('@lab365:userLogged', JSON.stringify(usuarioEncontrado));
            localStorage.setItem('@lab365:token', Date.now()); // Simulando um token
          } else {
            throw new Error('Email ou senha incorretos!');
          }
        } catch (error) {
          console.error(error);
          throw error; // Repasse o erro para o catch do onSubmit
        }
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@lab365:userLogged')
        localStorage.removeItem('@lab365:token')
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}
// custom hook
export function useAuth() {
    const contexto = useContext(AuthContext)

    return contexto
}