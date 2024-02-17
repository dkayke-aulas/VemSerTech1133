import { NavLink } from "react-router-dom";
import style from "./style.module.css"

const Header = () => {
  console.log(style)

  return (
    <>
      <h1 className={style.titulo}>Sacolão Ada</h1>
      <nav>
        <NavLink to='frutas'>Frutas</NavLink>
        <NavLink to='legumes'>Legumes</NavLink>
      </nav>
    </>
  );
};

export { Header };
