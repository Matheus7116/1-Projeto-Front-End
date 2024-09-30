import React from "react";
import { Link } from "react-router-dom";

const ProdutoCard = ({ produto, index }) => {
  return (
    <Link to={`/descricao/${produto.id}`} className="produto-card">
      <img src={produto.imagem} alt={produto.nome} />
      {index < 2 && produto.promocao && (
        <div className="badge">{produto.promocao}</div>
      )}
      <h3>{produto.nome}</h3>
      <div className="preco-container">
        <div className="precos">
          <p className="preco-original">{produto.precoOriginal}</p>
          <p className="preco-desconto">{produto.precoDesconto}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProdutoCard;
