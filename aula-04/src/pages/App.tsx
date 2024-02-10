import { useState } from "react";
import { Button } from "../components/Button";
import { ButtonBoolean } from "../components/ButtonBoolean";

function App() {

  const [exibir, setExibir] = useState(false)

  const mostrarMensagem = () => {
    setExibir(true)

    const id = setTimeout(() => {
      console.log('chamou timeout')
      setExibir(false)
    }, 2000)

    console.log(id)
  }

  return (
    <>
      {exibir && <p>Está exibindo o texto!</p>}
      <button onClick={mostrarMensagem}>Exibir texto</button>
      <Button>Clique-me</Button>
      <ButtonBoolean>Clique-me</ButtonBoolean>
    </>
  );
}

export default App;
