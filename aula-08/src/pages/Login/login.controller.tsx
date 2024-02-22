import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const navigate = useNavigate()
  const [isErrorLogin, setIsErrorLogin] = useState('');

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = Math.random()

    if (Math.random() > 0.5) {
        setIsErrorLogin('')
        window.localStorage.setItem('@auth', id.toString())
        navigate('/user', {
            state: {
                id: ~~(id * 10) || 1
            }
        })
    } else {
      setIsErrorLogin('Usuário ou senha invalido!')
    }
  };

  return { handleOnSubmit, isErrorLogin };
};

export { useLogin };
