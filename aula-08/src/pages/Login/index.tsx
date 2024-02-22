import style from "./style.module.css";
import { useLogin } from "./login.controller";

const Login = () => {
  const { handleOnSubmit, isErrorLogin } = useLogin();

  return (
    <>
      <form
        className={style.loginForm}
        name="loginForm"
        onSubmit={handleOnSubmit}
      >
        <input type="text" placeholder="Usuário" name="usuario" />
        <input type="password" placeholder="Senha" name="senha" />
        <button>Entrar</button>
        <span>{isErrorLogin}</span>
      </form>
    </>
  );
};

export { Login };
