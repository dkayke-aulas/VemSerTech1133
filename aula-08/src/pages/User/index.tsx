import { Link, useLocation } from "react-router-dom";
import { ProductSelected, User } from "../../types";
import { useFetch } from "../../utils/useFetch";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { CartContext } from "../../context/CartContext";
import { Product } from "../../components/Product";

const User = () => {
  const globalContext = useContext(GlobalContext);
  const cartContext = useContext(CartContext);

  const location = useLocation();

  const auth = window.localStorage.getItem("auth") || 0;
  const { data } = useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${
      ~~auth || location?.state?.id
    }`,
    !!globalContext.user
  );

  const handleAddOnCart = (product: ProductSelected) => {
    cartContext.setProductsSelected &&
      cartContext.setProductsSelected((state) => [...state, product]);
  };

  useEffect(() => {
    cartContext.setProducts &&
      cartContext.setProducts([
        {
          id: 111,
          name: "Teclado",
          price: 220.9,
        },
        {
          id: 222,
          name: "Banana",
          price: 3.75,
        },
        {
          id: 333,
          name: "Celular que dobra",
          price: 4100.85,
        },
        {
          id: 444,
          name: "Pé de tênis esquerdo",
          price: 65.99,
        },
        {
          id: 555,
          name: "Calção de banho",
          price: 27.99,
        },
      ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data && globalContext.setUser) {
      globalContext.setUser(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      Bem-vindx {globalContext.user?.name}
      <br />
      <Link to="/config">Configurações</Link>
      <hr />
      {cartContext.products.map((product, index) => {
        return (
          <>
            <Product key={index} product={product} onAdd={handleAddOnCart} />
            <br />
          </>
        );
      })}
    </>
  );
};

export { User };
