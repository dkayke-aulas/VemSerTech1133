import { FC, ReactNode } from "react";
import S from './style.module.css'

type Validation = {
  text: string;
  isValid: boolean;
};

interface FeedbackProps {
  children: ReactNode;
  validations: Validation[];
}

const Feedback: FC<FeedbackProps> = (props) => {
  const { children, validations } = props;
  return (
    <label className={S.label}>
      {children}
      {validations.map((validation, index) => {
        return !validation.isValid && <p key={index}>{validation.text}</p>;
      })}
    </label>
  );
};

export { Feedback };
