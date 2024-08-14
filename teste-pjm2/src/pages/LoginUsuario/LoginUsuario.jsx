import { useState } from "react";

function LoginUsuario() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <div>
        <p>Você clicou {contador} vezes</p>
        <button onClick={() => setContador(contador + 1)}>
          Clique para aumentar
        </button>
      </div>
    </>
  );
}

export default LoginUsuario