import { FC, ReactNode } from "react";
import S from "./style.module.css";

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = (props) => {
  const { children } = props;

  return <h1 className={S.title}>{children}</h1>;
};

export { Title };

