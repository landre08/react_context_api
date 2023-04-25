import Nome from "../Nome";
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

function Alunos({nome, mudaNome}) {
    const { alunos, qtdAlunos } = useContext(UserContext);

    return (
      <div>
        <h2>Component Alunos - Vindo do context: {alunos}</h2>
        <h3>Quantidade de alunos vindo do context: {qtdAlunos}</h3>
        <Nome nome={nome} mudaNome={mudaNome}/>
      </div>
    );
  }
  
  export default Alunos;