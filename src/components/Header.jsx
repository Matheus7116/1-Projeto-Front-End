// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSearch } from "./SearchContext";
import { Search } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <>
      <header>
        <img className="logodc" src="/src/image/logo-header.svg" alt="" />
        <div className="search-container">
          <input
            className="search-bar"
            type="text"
            placeholder="  Pesquise Produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search strokeWidth={0.7} className="lupa" />
        </div>
        <h2 className="cadastro">Cadrastre-se</h2>
        <button className="botao">Entrar</button>
        <img className="imagecart" src="/src/image/mini-cart.svg" alt="" />
      </header>

      <div className="header">
        <nav>
          <ul className="ul-hd">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/Produtos" ? "active" : ""}>
              <Link to="/Produtos">Produtos</Link>
            </li>
            <li className={location.pathname === "/Categorias" ? "active" : ""}>
              <Link to="/Categorias">Categorias</Link>
            </li>
            <li className={location.pathname === "/Pedidos" ? "active" : ""}>
              <Link to="/Pedidos">Meus Pedidos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
