import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";

import { App } from "./App";
import { Frutas } from "./Frutas";
import { Legumes } from "./Legumes";
import { NaoEncontrado } from "./NaoEncontrado";

import { Banana } from "./Frutas/Banana";
import { Acerola } from "./Frutas/Acerola";
import { Pitaya } from "./Frutas/Pitaya";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<App />} />

        <Route path="frutas/*" element={<Frutas />}>
          <Route path="acerola" element={<Acerola />} />
          <Route path="banana" element={<Banana />} />
          <Route path="pitaya" element={<Pitaya />} />
        </Route>

        <Route path="legumes/:nome?" element={<Legumes />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
