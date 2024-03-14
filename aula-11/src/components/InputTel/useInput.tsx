import { FormEvent } from "react";

interface UseInputProps {
    onInput?: (value: string) => void;
}

const useInput = ({onInput}: UseInputProps) => {

  const handleOnInput = (event: FormEvent<HTMLInputElement>) => {
    if (onInput) {
      onInput(event.currentTarget.value);
    }
  };

  return {
    handleOnInput
  }
};

export { useInput }