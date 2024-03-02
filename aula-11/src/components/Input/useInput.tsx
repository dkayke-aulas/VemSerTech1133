import { FormEvent, useState } from "react";

interface UseInputProps {
    onInput?: (value: string) => void;
}

const useInput = ({onInput}: UseInputProps) => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const handleOnInput = (event: FormEvent<HTMLInputElement>) => {
    if (onInput) {
      onInput(event.currentTarget.value);
    }
  };

  const handleOnClickEye = () => {
    setEyeOpen((state) => !state);
  };

  const getInputType = () => !eyeOpen ? "password" : "text"

  return {
    eyeOpen,
    handleOnInput,
    handleOnClickEye,
    getInputType
  }
};

export { useInput }