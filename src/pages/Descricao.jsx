// src/Descricao.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Descricao = () => {
  const images = [
    "/src/image/1.png", // Cor 0
    "/src/image/2.png", // Cor 1
    "/src/image/3.png", // Cor 2
    "/src/image/4.png", // Cor 3
    "/src/image/5.png", // Cor 4
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const selectColor = (index) => {
    setCurrentSlide(index); // Atualiza o slide para corresponder à cor selecionada
  };

  return (
    <div className="descricao">
      <div className="resultado-input-descricao">
        <div className="texto-resultado-input">
          <b> Home </b>/ Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next
          Nature Masculino
        </div>
      </div>
      <div className="foto-descricao">
        <button onClick={prevSlide} id="prev-button">
          <img src="/src/image/arrow-left.svg" alt="prev-button" />
        </button>

        <div className="foto-do-produto">
          {images.map((image, index) => (
            <img
              key={index}
              className={`imagem-carrosel ${
                index === currentSlide ? "on" : ""
              }`}
              src={image}
              alt={`Slide ${index}`}
              draggable="false" // Torna a imagem não arrastável
            />
          ))}
        </div>
        <button onClick={nextSlide} id="next-button">
          <img src="/src/image/arrow-right.svg" alt="next-button" />
        </button>

        <div className="texto-do-produto">
          <b>Tênis Nike Revolution 6 Next Nature Masculino</b>
          <div className="subtitulo-do-produto">
            Casual | Nike | REF:38416711
          </div>
          <div className="estrelas-do-produto">
            <div>
              <img className="estrela1" src="/src/image/star.png" alt="" />
            </div>
            <div>
              <img className="estrela2" src="/src/image/star.png" alt="" />
            </div>
            <div>
              <img className="estrela3" src="/src/image/star.png" alt="" />
            </div>
            <div>
              <img className="estrela4" src="/src/image/star.png" alt="" />
            </div>
            <div>
              <img className="estrela5" src="/src/image/star2.png" alt="" />
            </div>
            <div className="avaliacao-do-produto">
              <b>4.7 ✭</b>
            </div>
            <div className="classificacao-do-produto">(90 avaliações)</div>
          </div>
          <div className="div-valor-produtos">
            <div className="rs">R$</div>
            <div className="valor-do-produto">
              <b>219</b>
            </div>
            <div className="centavos-do-valor">,00</div>
            <div className="descontro-do-produto">219,00</div>
          </div>
          <div className="titulo-descricao-do-produto">
            <b>Descrição do produto</b>
          </div>
          <div className="texto-descricao-do-produto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            excepturi animi incidunt nemo sint at commodi quos dolorem harum
            illum, tenetur eos neque dignissimos.
          </div>
          <div className="tamanho1-do-produto">
            <b>Tamanho</b>
          </div>
          <div className="tamanho-em-numeros-do-produto">
            <div className="tamanho39">
              <div className="numero39">
                <b>39</b>
              </div>
            </div>
            <div className="tamanho40">
              <div className="numero40">
                <b>40</b>
              </div>
            </div>
            <div className="tamanho41">
              <div className="numero41">
                <b>41</b>
              </div>
            </div>
            <div className="tamanho42">
              <div className="numero42">
                <b>42</b>
              </div>
            </div>
            <div className="tamanho43">
              <div className="numero43">
                <b>43</b>
              </div>
            </div>
          </div>
          <div className="tamanho1-do-produto">
            <b>Tamanho</b>
          </div>
          <div className="cores-do-tenis">
            <div className="cores-do-tenis-verde-agua"></div>
            <div className="cores-do-tenis-rosa"></div>
            <div className="cores-do-tenis-cinza"></div>
            <div className="cores-do-tenis-roxo"></div>
          </div>

          <button className="botao-da-descricao-produto">
            <b>COMPRAR</b>
          </button>
        </div>
      </div>
      <div className="foto-cores">
        <div className="roxo" onClick={() => selectColor(0)}>
          <img
            className="img-descricao-produto-roxo"
            src="/src/image/6d839d9bc81eba71990cf69a20c77364.png"
            alt=""
          />
        </div>
        <div className="amarelo" onClick={() => selectColor(1)}>
          <img
            className="img-descricao-produto-amarelo"
            src="/src/image/6d839d9bc81eba71990cf69a20c77364.png"
            alt=""
          />
        </div>
        <div className="rosa" onClick={() => selectColor(2)}>
          <img
            className="img-descricao-produto-rosa"
            src="/src/image/6d839d9bc81eba71990cf69a20c77364.png"
            alt=""
          />
        </div>
        <div className="bege" onClick={() => selectColor(3)}>
          <img
            className="img-descricao-produto-bege"
            src="/src/image/6d839d9bc81eba71990cf69a20c77364.png"
            alt=""
          />
        </div>
        <div className="branco-antigo" onClick={() => selectColor(4)}>
          <img
            className="img-descricao-produto-branco-antigo"
            src="/src/image/6d839d9bc81eba71990cf69a20c77364.png"
            alt=""
          />
        </div>
      </div>

      <div className="titulo2-produtos">
        <div className="texto-titulo2-produtos">
          <div className="texto2-produtos-em-alta">
            <b>Produtos Relacionados</b>
          </div>
          <div className="ver-todos2">
            <Link className="link4" to={"/Produtos"}>
              Ver todos ⭢
            </Link>
          </div>
        </div>
      </div>

      <div className="produtos">
        <div className="cards4">
          <div className="card4-1">
            <div className="oferta1-tenis">
              <b>30% OFF</b>
            </div>
            <img
              className="imagem-card1"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
          <div className="card4-2">
            <div className="oferta2-tenis">
              <b>30% OFF</b>
            </div>
            <img
              className="imagem-card2"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
          <div className="card4-3">
            <img
              className="imagem-card3"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
          <div className="card4-4">
            <img
              className="imagem-card4"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
        </div>

        <div className="texto5-1-produtos">
          <div className="texto7-1">Tênis</div>
          <div className="texto7-2">Tênis</div>
          <div className="texto7-3">Tênis</div>
          <div className="texto7-4">Tênis</div>
        </div>

        <div className="texto6-1-produtos">
          <div className="texto8-1">
            <Link className="texto2-1" to={"/Produtos"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
          <div className="texto8-2">
            <Link className="texto2-1" to={"/Produtos"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
          <div className="texto8-3">
            <Link className="texto2-1" to={"/Produtos"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
          <div className="texto8-4">
            <Link className="texto2-1" to={"/Produtos"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
        </div>

        <div className="valores4-produtos">
          <div className="valor13-produto">
            <div className="valor13-1">$200</div>
            <div className="valor1-2">
              <b>$100</b>
            </div>
          </div>

          <div className="valor14-produto">
            <div className="valor14-1">$200</div>
            <div className="valor2-2">
              <b>$100</b>
            </div>
          </div>

          <div className="valor15-produto">
            <div className="valor15-1">$200</div>
            <div className="valor3-2">
              <b>$100</b>
            </div>
          </div>
          <div className="valor16-produto">
            <div className="valor16-1">$200</div>
            <div className="valor4-2">
              <b>$100</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descricao;
