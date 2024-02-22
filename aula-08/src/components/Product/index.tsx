import { FC } from "react";
import { Product, ProductSelected } from "../../types";

interface ProductProps {
  product: Product;
  onAdd: (product: ProductSelected) => void
}

const Product: FC<ProductProps> = ({ product, onAdd }) => {

  const handleClick = () => {
    onAdd({
      id: product.id,
      quantity: 1
    })
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={handleClick}>Adicionar ao carrinho</button>
    </div>
  );
};

export { Product };
