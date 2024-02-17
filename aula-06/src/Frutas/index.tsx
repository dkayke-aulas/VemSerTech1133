import { NavLink, Outlet } from "react-router-dom";
import style from './Pitaya/style.module.css'

type NavLinkRenderProps = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
}

function Frutas() {
  const getClassName = (props: NavLinkRenderProps) => {
    if(props.isActive) {
      return style.active
    }
  }

  return (
    <>
    <h3>Frutas selecionadas!</h3>
      <nav>
        <NavLink className={getClassName} to="acerola">Acerola</NavLink>
        <NavLink className={getClassName} to="banana">Banana</NavLink>
        <NavLink className={getClassName} to="pitaya">Pitaya</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export { Frutas };
