import { FC } from "react";
import { Button, Input, Title } from "../../components";
import S from './style.module.css'
import { Heart } from 'react-bootstrap-icons'

const Login: FC = () => {
  return (
    <div className={S.loginContainer}>
        <Title>Agenda</Title>
        <form className={S.loginForm}>
            <Heart className={S.loginFormLogo} />
            <Input type="text"/>
            <Input type="password" />
            <Button>Entrar</Button>
            <p>Não possui conta?<Button type="link" path="/cadastro">Cadastre-se!</Button></p>
        </form>
    </div>
  );
};

export { Login };
