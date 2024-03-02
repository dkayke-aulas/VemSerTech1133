import { FC } from "react";
import { Button, Input } from "../../components";
import S from "./style.module.css";
import { Heart } from "react-bootstrap-icons";
import { Title } from "../../components/Title";
import { useSignUp } from "./useSignUp";

const SignUp: FC = () => {

  const { handleOnSubmit, feedback, loading } = useSignUp()

  return (
    <div className={S.loginContainer}>
      <Title>Cadastre-se</Title>
      <form className={S.loginForm} onSubmit={handleOnSubmit}>
        <Heart className={S.loginFormLogo} />
        <Input type="text" name="name" placeholder="Nome" />
        <Input type="text" name="username" placeholder="Usuário" />
        <Input type="text" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Senha" />
        <Input type="password" name="confirmPassword" placeholder="Confirme sua senha" />
        <Button>Cadastrar</Button>
        <span>{loading && 'Aguarde...'} {feedback && feedback}</span>
        <p>
          Possui conta?
          <Button type="link" path="/">
            Entre aqui!
          </Button>
        </p>
      </form>
    </div>
  );
};

export { SignUp };
