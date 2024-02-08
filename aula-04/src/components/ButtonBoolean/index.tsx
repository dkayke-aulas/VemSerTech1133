import { FC, ReactNode, useState } from "react";
import "./style.css"

interface ButtonBooleanProps {
    children: ReactNode
    type?: HTMLButtonElement['type']
}

// useEffect 
// useMemo
// useCallback
// useContext
// useRef
// useReducer

const ButtonBoolean: FC<ButtonBooleanProps> = ({ children, ...props }) => {
  const [ehBooleano, setarNovoValorParaOn] = useState(false)
  // const ehBooleano = useState(false)[0]
  // const setarNovoValorParaOn = useState(false)[1]

  const handleClick = () => {
    // setOn(on ? false : true)
    setarNovoValorParaOn(state => !state)
  }

  return <button type={props.type || 'button'} onClick={handleClick}>
    {children} {String(ehBooleano)}
    </button>;
};

export { ButtonBoolean }