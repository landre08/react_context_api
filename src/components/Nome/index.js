
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

function Nome({nome, mudaNome}) {
    const { alunos, setAlunos } = useContext(UserContext);

    return (
      <div>
        <span style={{color: '#F00'}}>Bem vindo(a): {nome} - Nome vindo do contexto aluno: {alunos}</span>
        <br/>
        <button onClick={ () => mudaNome('Luciano')}>Trocar nome</button>
        <button onClick={ () => setAlunos('André')}>Trocar nome Context</button>
      </div>
    );
  }
  
  export default Nome;