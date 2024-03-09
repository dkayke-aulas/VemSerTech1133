import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { signUpService } from "../../services/signUp";
import { User } from "../../typing";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../routes/paths";

type UserFD = {
  [x: string]: FormDataEntryValue;
};

const useSignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isAllInputWithMinValue, setIsAllInputWithMinValue] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState("");
  const refIdTimeout = useRef(0);

  const passwordValidations = useMemo(
    () => [
      {
        text: "Não possui ao menos 1 número",
        isValid: /\d/.test(inputPassword),
      },
      {
        text: "Não possui ao menos 6 caracteres",
        isValid: inputPassword.length >= 6,
      },
    ],
    [inputPassword]
  );

  const passwordConfirmValidations = useMemo(() => {
    return [
      {
        text: "Senhas não coincidem",
        isValid: inputPassword === inputPasswordConfirm,
      },
    ];
  }, [inputPassword, inputPasswordConfirm]);

  const isPasswordValid = useMemo(() => {
    const isInputPasswordValid = passwordValidations.every(
      (validation) => validation.isValid
    );
    const isInputConfirmPasswordValid = passwordConfirmValidations.every(
      (validation) => validation.isValid
    );
    return isInputPasswordValid && isInputConfirmPasswordValid;
  }, [passwordConfirmValidations, passwordValidations]);

  const handleOnChange = async (event: FormEvent<HTMLFormElement>) => {
    const elements = event.currentTarget.querySelectorAll<HTMLInputElement>(
      "[required], [data-required]"
    );

    const arr = Array.from(elements.entries());

    const allInputIsValid = arr.every(([, input]) => {
      return input.value.trim().length >= 3;
    });
    setIsAllInputWithMinValue(allInputIsValid);
  };

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(false);
    setFeedback("");
    clearTimeout(refIdTimeout.current);

    const fd = new FormData(event.currentTarget);
    fd.delete('confirmacaoSenha')
    fd.delete('foto')

    const user: UserFD = {};
    for (const [chave, valor] of fd) {
      user[chave] = valor;
    }

    try {
      setIsLoading(true);
      const response = await signUpService(user as User);
      if(response.status === 200) {
        console.log(response.data);
        refIdTimeout.current = setTimeout(() => {
          navigate(PATHS.login);
        }, 10000);
      }
      else if(response.status === 409) {
        setFeedback(response.mensagem);
      }
    } catch (erro) {

      setFeedback('Erro: Tente novamente mais tarde :(');
    } finally {
      setIsLoading(false);
      setTimeout(() => setFeedback(""), 3000);
    }
  };

  useEffect(() => {
    setIsFormValid(isPasswordValid && isAllInputWithMinValue);
    return () => clearTimeout(refIdTimeout.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputPassword, inputPasswordConfirm, isAllInputWithMinValue]);

  return {
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
  };
};

export { useSignUp };
