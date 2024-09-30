import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Pedidos from "./pages/Pedidos";
import Produtos from "./pages/Produtos";
import Descricao from "./pages/Descricao";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="pedidos" element={<Pedidos />} />
          <Route path="/descricao/:id" element={<Descricao />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
