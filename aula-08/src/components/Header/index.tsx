import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../../context/GlobalContext";
import { CartButton } from "../CartButton";
import style from "./style.module.css";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(GlobalContext);

  const handleClickLogout = () => {
    window.localStorage.removeItem("@auth");
    navigate("/");
  };

  const handleClickCart = () => {
    navigate("/cart");
  };

  return (
    <header className={style.header}>
      <p>{user?.name}</p>

      <div>
        <CartButton onClick={handleClickCart} />
        <button onClick={handleClickLogout}>Sair</button>
      </div>
    </header>
  );
};

export { Header };

