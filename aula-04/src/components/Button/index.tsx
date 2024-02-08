import { FC, ReactNode, useState } from "react";
import "./style.css"

interface ButtonProps {
    children: ReactNode
    type?: HTMLButtonElement['type']
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const [cont, setCont] = useState(0)

  const handleClick = () => {

    setCont((curr) => {
      if(cont % 3 === 0) return curr + 2
      return curr + 1
    })


    // if(cont % 3 === 0) {
    //   setCont(cont + 2)
    // } 
    // else {
    //   setCont(cont + 1)
    // }
  }

  return <button type={props.type || 'button'} onClick={handleClick}>
    {children} {cont}
    </button>;
};

export { Button }