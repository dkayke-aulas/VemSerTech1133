import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

const Config = () => {

  const globalContext = useContext(GlobalContext)


  return (
    <>
      <h1>Configurações</h1>
      <p>{globalContext.user?.name}</p>
      <p>{globalContext.user?.email}</p>
      <Link to="/user">Voltar</Link>
    </>
  );
};

export { Config };
