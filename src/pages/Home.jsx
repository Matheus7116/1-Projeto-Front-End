import React from "react";
import Carrossel from "../components/Carrossel";
import ColeçãoDestaque from "../components/ColeçãoDestaque";
import Destaque2 from "../components/Destaque2";
import ProdutosAlta from "../components/ProdutosAlta";
import { Outlet } from "react-router-dom";
import OfertaEspecial from "../components/OfertaEspecial";

const Home = () => {
  return (
    <div>
      <Carrossel />
      <ColeçãoDestaque />
      <Destaque2 />
      <ProdutosAlta />
      <OfertaEspecial />
    </div>
  );
};

export default Home;
