import { FormEvent, useState } from "react";
import { signUpService } from "../../services/signUp";
import { User } from "../../typing";

type Password = {
  password: string;
  confirmPassword: string;
};

const useSignUp = () => {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const getPasswords = (fd: FormData) => {
    const password = fd.get("password");
    fd.delete("password");

    const confirmPassword = fd.get("confirmPassword");
    fd.delete("confirmPassword");

    return { password, confirmPassword };
  };

  const validatePassword = (password: Password) => {
    console.log(password);
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    getPasswords(fd);

    const user = {} as { [x: string]: FormDataEntryValue };

    for (const [chave, valor] of fd) {
      user[chave] = valor;
    }

    try{
        setLoading(true)
        const response = await signUpService(user as User);
        setFeedback(response)
    }
    catch(erro) {
        setFeedback(erro as string)
    }
    finally {
        setLoading(false)
        setTimeout(() => setFeedback(''), 3000)
    }
  };

  return { handleOnSubmit, validatePassword, feedback, loading };
};

export { useSignUp };
