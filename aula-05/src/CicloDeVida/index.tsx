import { useEffect, useState } from "react";

const CicloDeVida = () => {
  const [incremento, setIncremento] = useState(0);
  console.log("constructor");

  const funcaoDestruidora = () => console.log("componentDidUnmount");

  const incrementar = () => setIncremento((state) => state + 1)

  useEffect(() => {
    console.log("componentDidMount");
    return funcaoDestruidora;
  }, []);

  useEffect(() => {
    incrementar()
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate!!', incremento)
  }, [incremento]);

  return (
    <>
      <h1>Ciclo de vida</h1>
      <p>atualizado {incremento} vezes</p>
      <button onClick={incrementar}>+</button>
    </>
  );
};

export { CicloDeVida };
