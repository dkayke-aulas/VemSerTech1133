import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { User } from "../pages/User";
import { Config } from "../pages/Config";
import { GlobalContextProvider } from "../context/GlobalContext";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <GlobalContextProvider>
        <Routes>
          <Route path="user" element={<User />} />
          <Route path="config" element={<Config />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
};

export { Router };
