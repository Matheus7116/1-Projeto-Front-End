import React from "react";

function ColeçãoDestaque() {
  return (
    <div>
      <h3 className="textcolecao">Coleções em destaque</h3>
      <div className="colecao-destaque">
        <div className="colecao-item">
          <img className="colecao" src="/src/image/collection-1.png" alt="" />
          <button className="comprar-colecao">Comprar</button>
          <button className="off">30% OFF</button>
        </div>
        <div className="colecao-item">
          <img className="colecao" src="/src/image/collection-2.png" alt="" />
          <button className="comprar-colecao">Comprar</button>
          <button className="off">30% OFF</button>
        </div>
        <div className="colecao-item">
          <img className="colecao" src="/src/image/collection-3.png" alt="" />
          <button className="comprar-colecao">Comprar</button>
          <button className="off">30% OFF</button>
        </div>
      </div>
    </div>
  );
}

export default ColeçãoDestaque;
