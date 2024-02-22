import { ButtonHTMLAttributes, FC, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import style from "./style.module.css";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CartButton: FC<CartButtonProps> = (props) => {
  const { productsSelected } = useContext(CartContext);

  return (
    <button {...props} className={style.btnCart}>
      <p>Carrinho ({productsSelected.reduce((prev, curr) => prev + curr.quantity, 0)})</p>
    </button>
  );
};

export { CartButton };
