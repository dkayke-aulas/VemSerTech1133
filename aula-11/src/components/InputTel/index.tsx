import { ChangeEvent, FC } from "react";
import InputMask from "react-input-mask";

import S from "./style.module.css";
import { useInput } from "./useInput";

interface InputTelProps {
  value: string;
  placeholder: string;
  id: string;
  name: string;
  label: string;
  required: boolean;
  onInput: (value: string) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputTel: FC<Partial<InputTelProps>> = (props) => {
  const { onChange, onInput, ...restProps } = props;
  const { handleOnInput } = useInput({
    onInput,
  });
  return (
    <InputMask
      alwaysShowMask={false}
      mask="(99) 99999-9999"
      {...restProps}
      className={S.input}
      type="tel"
      onChange={onChange}
      onInput={handleOnInput}
    />
  );
};

export { InputTel };
