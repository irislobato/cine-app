import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Detalhes from "./Pages/Detalhes";
import Sobre from "./Pages/Sobre";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="item/:id" element={<Detalhes />}></Route>
          <Route path="sobre" element={<Sobre/>}></Route>
          </Route>
      </Routes>
  );
}
