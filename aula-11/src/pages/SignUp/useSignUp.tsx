import { FormEvent, useState } from "react";
import { signUpService } from "../../services/signUp";
import { User } from "../../typing";

type UserFD = {
  [x: string]: FormDataEntryValue;
};

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false)
  const [feedback, setFeedback] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState("");

  const passwordValidations = [
    {
      text: "Não possui ao menos 1 número",
      isValid: /\d/.test(inputPassword),
    },
    {
      text: "Não possui ao menos 6 caracteres",
      isValid: inputPassword.length >= 6,
    },
  ];

  const passwordConfirmValidations = [
    {
      text: "Senhas não coincidem",
      isValid: inputPassword === inputPasswordConfirm,
    },
  ];

  const getPasswords = (fd: FormData) => {
    const password = fd.get("password");
    fd.delete("password");

    const confirmPassword = fd.get("confirmPassword");
    fd.delete("confirmPassword");

    return { password, confirmPassword };
  };

  const handleOnChange = async (event: FormEvent<HTMLFormElement>) => {
    const elements = event.currentTarget.querySelectorAll<HTMLInputElement>('[required], [data-required]')
    const arr = Array.from(elements.entries())
    const hasNoValue = arr.some(([, input]) => !input.value.trim() )

    console.log(hasNoValue)
    setIsFormValid(hasNoValue)
  }

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    getPasswords(fd);

    const user: UserFD = {};
    for (const [chave, valor] of fd) {
      user[chave] = valor;
    }

    try {
      setLoading(true);
      const response = await signUpService(user as User);
      setFeedback(response);
    } catch (erro) {
      setFeedback(erro as string);
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback(""), 3000);
    }
  };

  return {
    handleOnSubmit,
    feedback,
    loading,
    inputPassword,
    setInputPassword,
    inputPasswordConfirm,
    setInputPasswordConfirm,
    passwordValidations,
    passwordConfirmValidations,
    handleOnChange,
    isFormValid
  };
};

export { useSignUp };
