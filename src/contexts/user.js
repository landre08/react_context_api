import {useState, createContext} from 'react';

export const UserContext = createContext({});

function UserProvider({children}) {

    const [alunos, setAlunos] = useState('Aluno Luciano André');
    const [qtdAlunos, setQtdAlunos] = useState(85);

    return(
        <UserContext.Provider value={{ alunos, setAlunos, qtdAlunos }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;