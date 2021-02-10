import { useState } from 'react';

function Home() {
  return (
    <div>
      <h1>Home1x</h1>
      <Contador />
      <div>Teste </div>
      <div>Teste </div>
      <div>Teste </div>
      <div>Teste </div>
      <div>Teste </div>
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);
  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>{contador}</p>
      <button onClick={adicionarContador}>Clicar</button>
    </div>
  );
}

export default Home;
