import React, { useEffect, useState } from "react";
import Filtros from "../components/Filtros";
import ProdutoCard from "../components/ProdutoCard";
import { useSearch } from "../components/SearchContext";
import img5 from "../image/335c3c97f56f40b95666e6039be52a9d.png";

const gerarEstadoAleatorio = () => {
  const estados = ["Novo", "Usado"];
  return estados[Math.floor(Math.random() * estados.length)];
};

const gerarGeneroAleatorio = () => {
  const generos = ["Masculino", "Feminino", "Unisex"];
  return generos[Math.floor(Math.random() * generos.length)];
};

const todosProdutos = Array.from({ length: 15 }, (_, index) => {
  const genero = gerarGeneroAleatorio();
  return {
    id: index + 1,
    nome: `K-Swiss V8 - ${genero}`,
    imagem: img5,
    precoOriginal: "$200",
    precoDesconto: "$100",
    promocao: index < 2 ? "30% OFF" : "",
    marca: "K-Swiss",
    categoria: "Corrida",
    genero: genero,
    estado: gerarEstadoAleatorio(),
  };
});

const Produtos = () => {
  const [produtos, setProdutos] = useState(todosProdutos);
  const [filtros, setFiltros] = useState({
    marca: [],
    categoria: [],
    genero: [],
    estado: "",
  });
  const { searchQuery } = useSearch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const produtosFiltrados = todosProdutos.filter((produto) => {
      return (
        produto.nome.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filtros.marca.length === 0 || filtros.marca.includes(produto.marca)) &&
        (filtros.categoria.length === 0 ||
          filtros.categoria.includes(produto.categoria)) &&
        (filtros.genero.length === 0 ||
          filtros.genero.includes(produto.genero)) &&
        (filtros.estado === "" ||
          filtros.estado === "Qualquer" ||
          produto.estado === filtros.estado)
      );
    });
    setProdutos(produtosFiltrados);
  }, [searchQuery, filtros]);

  const handleFiltroChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFiltros((prevFiltros) => {
        const newValue = checked
          ? [...prevFiltros[name], value]
          : prevFiltros[name].filter((item) => item !== value);
        return { ...prevFiltros, [name]: newValue };
      });
    } else if (type === "radio") {
      setFiltros((prevFiltros) => ({
        ...prevFiltros,
        estado: prevFiltros.estado === value ? "" : value,
      }));
    }
  };

  return (
    <div className="produtos-page">
      <div className="content">
        <aside className="filter-sidebar">
          <Filtros filtros={filtros} onFiltroChange={handleFiltroChange} />
        </aside>

        <main className="product-list">
          <div className="search-results">
            <p className="buscaresultado">
              Resultados para "{searchQuery}" - {produtos.length} produtos
            </p>
            <select id="sort" name="sort">
              <option>Ordenar por: Mais Relevantes</option>
              <option>Ordenar por: Maior Preço</option>
              <option>Ordenar por: Menor Preço</option>
            </select>
          </div>

          <div className="product-grid">
            {produtos.map((produto, index) => (
              <ProdutoCard key={produto.id} produto={produto} index={index} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Produtos;
