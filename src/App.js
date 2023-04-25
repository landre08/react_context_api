import Alunos from "./components/Alunos";
import { useState } from "react";

import UserProvider from "./contexts/user";

function App() {
  const [nomeAluno, setNomeAluno] = useState('Nathalia');

  return (
    <UserProvider>
      <div>
        <h1>ESCOLA</h1>
        <hr/>
        <Alunos nome={nomeAluno} mudaNome={setNomeAluno}/>
      </div>
    </UserProvider>
  );
}

export default App;
