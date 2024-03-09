import { FormEvent, useRef, useState } from "react";
import { loginService } from "../../services/login";
import { Login } from "../../typing";
import { ErrorResponse } from "../../services/login/types/response";

const useLogin = () => {
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
      console.log(response.data);
    } catch (erro) {
      setFeedback((erro as ErrorResponse).mensagem);
    } finally {
      setIsLoading(false);
      setTimeout(() => setFeedback(""), 3000);
    }
  };

  return {
    feedback,
    isLoading,
    handleOnSubmit,
  };
};

export { useLogin };
