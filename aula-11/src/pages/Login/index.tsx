import { FC } from "react";
import { Button, Input, Title } from "../../components";
import S from "./style.module.css";
import { Heart } from "react-bootstrap-icons";
import { PATHS } from "../../routes/paths";
import { useLogin } from "./useLogin";

const Login: FC = () => {
  const { handleOnSubmit } = useLogin();

  return (
    <div className={S.loginContainer}>
      <Title>Agenda</Title>
      <form className={S.loginForm} onSubmit={handleOnSubmit}>
        <Heart className={S.loginFormLogo} />
        <Input type="text" name="email" placeholder="E-mail" />
        <Input type="password" name="senha" placeholder="Senha" />
        <Button>Entrar</Button>
        <p>
          Não possui conta?
          <Button type="link" path={PATHS.signUp}>
            Cadastre-se!
          </Button>
        </p>
      </form>
    </div>
  );
};

export { Login };
