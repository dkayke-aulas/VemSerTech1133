import { FC } from "react";
import { Button, Feedback, Input } from "../../components";
import { Heart } from "react-bootstrap-icons";
import { Title } from "../../components/Title";
import { useSignUp } from "./useSignUp";
import S from "./style.module.css";
import { PATHS } from "../../routes/paths";

const SignUp: FC = () => {
  const {
    handleOnSubmit,
    feedback,
    isLoading,
    inputPassword,
    setInputPassword,
    inputPasswordConfirm,
    setInputPasswordConfirm,
    passwordValidations,
    passwordConfirmValidations,
    handleOnChange,
    isFormValid,
  } = useSignUp();

  return (
    <div className={S.loginContainer}>
      <Title>Cadastre-se</Title>
      <form
        className={S.loginForm}
        onSubmit={handleOnSubmit}
        onChange={handleOnChange}
      >
        <Heart className={S.loginFormLogo} />
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          required
          data-required
        />
        <Input type="text" name="nickname" placeholder="Nickname" required />
        <Input type="text" name="role" placeholder="Profissão" />
        <Input
          type="text"
          name="email"
          placeholder="E-mail"
          required
          data-required
        />

        <Feedback validations={passwordValidations}>
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            value={inputPassword}
            onInput={setInputPassword}
            required
            data-required
          />
        </Feedback>

        <Feedback validations={passwordConfirmValidations}>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            value={inputPasswordConfirm}
            onInput={setInputPasswordConfirm}
            required
            data-required
          />
        </Feedback>
        <Button disabled={!isFormValid || isLoading}>Cadastrar</Button>
        <span>
          {isLoading && "Aguarde..."} {feedback && feedback}
        </span>
        <p>
          Possui conta?
          <Button type="link" path={PATHS.login}>
            Entre aqui!
          </Button>
        </p>
      </form>
    </div>
  );
};

export { SignUp };
