import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const navigate = useNavigate()
//   const [usuario, setUsuario] = useState("");
//   const [senha, setSenha] = useState("");
  const [isErrorLogin, setIsErrorLogin] = useState('');

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const fd = new FormData(event.target as HTMLFormElement);
    //   setUsuario(fd.get("usuario") as string);
    //   setSenha(fd.get("senha") as string);

    const id = Math.random()

    if (Math.random() > 0.5) {
        setIsErrorLogin('')
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
