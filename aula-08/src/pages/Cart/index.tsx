import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Product, ProductSelected } from "../../types";

const Cart = () => {
  const { productsSelected, products } = useContext(CartContext);

  const getProduct = (productSelected: ProductSelected) => {
    return products.find(
      (product) => product.id === productSelected.id
    ) as Product;
  };

  const productsMapped = useMemo(() => {
    console.log(productsSelected)
    return productsSelected.map((productsSelected) => ({
      ...getProduct(productsSelected),
      ...productsSelected,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsSelected]);

  return (
    <>
      <h1>Seu carrinho de produtos</h1>
      <br />
      <Link to="/user">Voltar</Link>
      <br />
      {productsMapped.map((productMapped) => {
        return (
          <>
            <h1>{productMapped.name}</h1>
            <p>{productMapped.price}</p>
            <p>{productMapped.quantity}</p>
          </>
        );
      })}
      <hr />
      Valor Total: {productsMapped.reduce((prev, curr) => prev + curr.price, 0)}
    </>
  );
};

export { Cart };
