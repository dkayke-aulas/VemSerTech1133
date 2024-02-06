import React, { useState } from "react";

const Button = (props) => {
  const { children } = props;
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1)
  }

  return (
    <button {...props} onClick={handleClick}>
      {children}&nbsp;{contador}
    </button>
  );
};

export { Button };
