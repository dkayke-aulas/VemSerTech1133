import { FormEvent, useEffect, useRef, useState } from "react";
import { useLoginService } from "../../services/login";
import { Login } from "../../typing";
import { ErrorResponse } from "../../services/login/types/response";
import { PATHS } from "../../routes/paths";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate()
  const { loginService } = useLoginService();
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const refIdTimeout = useRef(0);

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setFeedback("");
    clearTimeout(refIdTimeout.current);

    try {
      const fd = new FormData(event.currentTarget);
      const login: Login = {
        email: fd.get("email") as string,
        senha: fd.get("senha") as string,
      };
      const response = await loginService(login);
      const { token } = response.data
      window.sessionStorage.setItem('@token', token)
      navigate(PATHS.contacts)
    } catch (erro) {
      setFeedback((erro as ErrorResponse).mensagem);
    } finally {
      setIsLoading(false);
      refIdTimeout.current = setTimeout(() => setFeedback(""), 3000);
    }
  };

  useEffect(() => {
    return () => clearInterval(refIdTimeout.current);
  }, []);

  return {
    feedback,
    isLoading,
    handleOnSubmit,
  };
};

export { useLogin };
