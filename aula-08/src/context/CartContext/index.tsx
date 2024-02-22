import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Product, ProductSelected } from "../../types";

interface CartContextProps {
  products: Product[];
  setProducts?: Dispatch<SetStateAction<Product[]>>;
  productsSelected: ProductSelected[];
  setProductsSelected?: Dispatch<SetStateAction<ProductSelected[]>>;
}

const initialValues: CartContextProps = {
  products: [],
  productsSelected: [],
};

const CartContext = createContext<CartContextProps>(
  initialValues as CartContextProps
);

const CartContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialValues.products);
  const [productsSelected, setProductsSelected] = useState<ProductSelected[]>(
    initialValues.productsSelected
  );

  return (
    <CartContext.Provider
      value={{
        ...initialValues,
        products,
        setProducts,
        productsSelected,
        setProductsSelected,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
