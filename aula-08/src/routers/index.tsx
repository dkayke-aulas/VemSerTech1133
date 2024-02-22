import { useMemo } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { GlobalContextProvider } from "../context/GlobalContext";

// Components
import { Header } from "../components/Header";

// Pages
import { Config } from "../pages/Config";
import { Login } from "../pages/Login";
import { User } from "../pages/User";
import { CartContextProvider } from "../context/CartContext";
import { Cart } from "../pages/Cart";

const isLogged = () => {
  return !!window.localStorage.getItem("@auth");
};

const PrivateRouter = () => {
  const location = useLocation();

  const isAuthenticated = useMemo(() => {
    return isLogged();
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isAuthenticated) {
    return (
      <GlobalContextProvider>
        <CartContextProvider>
          <Header />
          <div style={{ padding: 10 }}>
            <Routes>
              <Route path="user" element={<User />} />
              <Route path="config" element={<Config />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </CartContextProvider>
      </GlobalContextProvider>
    );
  }
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />;
    </Routes>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <PrivateRouter />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
