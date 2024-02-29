import { ChangeEvent, FC } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import S from "./style.module.css";
import { useInput } from "./useInput";

type InputType = "text" | "password";

interface InputProps {
  type: InputType;
  value: string;
  placeholder: string;
  id: string;
  name: string;
  label: string;
  required: boolean;
  onInput: (value: string) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Partial<InputProps>> = ({
  type = "text",
  onChange,
  onInput,
}) => {
  const { eyeOpen, handleOnClickEye, handleOnInput, getInputType } = useInput({
    onInput,
  });

  if (type === "password") {
    return (
      <div className={S.inputPasswordContainer}>
        <input className={S.input} type={getInputType()} />
        {eyeOpen ? (
          <EyeFill
            className={S.iconPasswordContainer}
            onClick={handleOnClickEye}
          />
        ) : (
          <EyeSlashFill
            className={S.iconPasswordContainer}
            onClick={handleOnClickEye}
          />
        )}
      </div>
    );
  }

  return (
    <input
      className={S.input}
      type={type}
      onChange={onChange}
      onInput={handleOnInput}
    />
  );
};

export { Input };
