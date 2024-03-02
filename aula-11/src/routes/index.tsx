import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Login } from "../pages";
import { SignUp } from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
