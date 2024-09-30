import React from "react";

const OfertaEspecial = () => {
  return (
    <>
      <div className="div-oferta">
        <div className="container-imagem">
          <div className="circulo-oferta">
            <img
              className="imagem-oferta"
              src="/src/image/f256f97445a6bbaae35cd27d99d2d021.png"
              alt=""
            />
          </div>
        </div>

        <div className="texto-oferta">
          <div className="texto01">
            <b>Oferta especial</b>
          </div>
          <div className="texto02">
            <b>Air Jordan edição de colecionador</b>
          </div>
          <div className="texto03">
            Lorem ipsum dolor, reprehenderit voluptatibus blanditiis eum,
            molestias nesciunt repellendus est, quos et natus deleniti maiores
            id voluptatem laudantium aliquid.
          </div>
          <button className="botao-oferta">Ver Ofertas</button>
        </div>
      </div>
    </>
  );
};

export default OfertaEspecial;
