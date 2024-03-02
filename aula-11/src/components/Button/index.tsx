import { FC, MouseEvent, ReactNode } from "react";
import S from "./style.module.css";
import { TypeButton, TypeButtonEnum } from "./Button.d";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  type?: TypeButton;
  path?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, type, path = '/', onClick } = props;

  if (type === TypeButtonEnum.LINK) {
    return <Link className={S.buttonLink} to={path} >{children}</Link>
  }

  return (
    <button className={S.button} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
