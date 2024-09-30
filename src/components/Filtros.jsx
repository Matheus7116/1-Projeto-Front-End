import React from "react";

const Filtros = ({ filtros, onFiltroChange }) => {
  return (
    <div className="filtros">
      <h3>Filtrar por</h3>
      <h4>Marca</h4>
      <ul>
        {["Adidas", "Balenciaga", "K-Swiss", "Nike", "Puma"].map((marca) => (
          <li key={marca}>
            <input
              type="checkbox"
              name="marca"
              value={marca}
              checked={filtros.marca.includes(marca)}
              onChange={onFiltroChange}
            />
            {marca}
          </li>
        ))}
      </ul>
      <h4>Categoria</h4>
      <ul>
        {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map(
          (categoria) => (
            <li key={categoria}>
              <input
                type="checkbox"
                name="categoria"
                value={categoria}
                checked={filtros.categoria.includes(categoria)}
                onChange={onFiltroChange}
              />
              {categoria}
            </li>
          )
        )}
      </ul>
      <h4>Gênero</h4>
      <ul>
        {["Masculino", "Feminino", "Unisex"].map((genero) => (
          <li key={genero}>
            <input
              type="checkbox"
              name="genero"
              value={genero}
              checked={filtros.genero.includes(genero)}
              onChange={onFiltroChange}
            />
            {genero}
          </li>
        ))}
      </ul>
      <h4>Estado</h4>
      <ul>
        {["Novo", "Usado", "Qualquer"].map((estado) => (
          <li key={estado}>
            <input
              type="radio"
              name="estado"
              value={estado}
              checked={filtros.estado === estado}
              onChange={onFiltroChange}
            />
            {estado}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtros;
