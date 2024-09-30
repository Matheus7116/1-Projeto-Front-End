import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProdutosAlta = () => {
  return (
    <>
      <div className="titulo-produtos">
        <div className="texto-titulo-produtos">
          <div className="texto-produtos-em-alta">
            <b>Produtos em alta</b>
          </div>
          <div className="ver-todos">
            <Link className="link4" to={"/Produtos"}>
              Ver todos ⭢
            </Link>
          </div>
        </div>
      </div>
      <div className="produtos">
        <div className="cards">
          <div className="card1">
            <div className="oferta1-tenis">
              <b>30% OFF</b>
            </div>
            <img
              className="imagem-card1"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
          <div className="card2">
            <div className="oferta2-tenis">
              <b>30% OFF</b>
            </div>
            <img
              className="imagem-card2"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
          <div className="card3">
            <img
              className="imagem-card3"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
          <div className="card4">
            <img
              className="imagem-card4"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
        </div>

        <div className="texto1-produtos">
          <div className="texto1-1">Tênis</div>
          <div className="texto1-2">Tênis</div>
          <div className="texto1-3">Tênis</div>
          <div className="texto1-4">Tênis</div>
        </div>

        <div className="texto2-produtos">
          <div className="texto2-1">
            <Link className="texto2-1" to={"/descricaoproduto"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
          <div className="texto2-2">
            <Link className="texto2-1" to={"/descricaoproduto"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
          <div className="texto2-3">
            <Link className="texto2-1" to={"/descricaoproduto"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
          <div className="texto2-4">
            <Link className="texto2-1" to={"/descricaoproduto"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
        </div>

        <div className="valores-produtos">
          <div className="valor1-produto">
            <div className="valor1-1">$200</div>
            <div className="valor1-2">
              <b>$100</b>
            </div>
          </div>

          <div className="valor2-produto">
            <div className="valor2-1">$200</div>
            <div className="valor2-2">
              <b>$100</b>
            </div>
          </div>

          <div className="valor3-produto">
            <div className="valor3-1">$200</div>
            <div className="valor3-2">
              <b>$100</b>
            </div>
          </div>
          <div className="valor4-produto">
            <div className="valor4-1">$200</div>
            <div className="valor4-2">
              <b>$100</b>
            </div>
          </div>
        </div>

        <div className="cards2">
          <div className="card2-1">
            <img
              className="imagem-card2-1"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
          <div className="card2-2">
            <img
              className="imagem-card2-2"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
          <div className="card2-3">
            <img
              className="imagem-card2-3"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
          <div className="card2-4">
            <img
              className="imagem-card2-4"
              src="/src/image/335c3c97f56f40b95666e6039be52a9d.png"
              alt=""
            />
          </div>
        </div>

        <div className="texto1-1-produtos">
          <div className="texto3-1">Tênis</div>
          <div className="texto3-2">Tênis</div>
          <div className="texto3-3">Tênis</div>
          <div className="texto3-4">Tênis</div>
        </div>

        <div className="texto2-1-produtos">
          <div className="texto4-1">
            <Link className="texto2-1" to={"/descricaoproduto"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
          <div className="texto4-2">
            <Link className="texto2-1" to={"/descricaoproduto"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
          <div className="texto4-3">
            <Link className="texto2-1" to={"/descricaoproduto"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
          <div className="texto4-4">
            <Link className="texto2-1" to={"/descricaoproduto"}>
              K-Swiss V8 - Masculino
            </Link>
          </div>
        </div>

        <div className="valores2-produtos">
          <div className="valor5-produto">
            <div className="valor5-1">$200</div>
            <div className="valor5-2">
              <b>$100</b>
            </div>
          </div>

          <div className="valor6-produto">
            <div className="valor6-1">$200</div>
            <div className="valor6-2">
              <b>$100</b>
            </div>
          </div>

          <div className="valor7-produto">
            <div className="valor7-1">$200</div>
            <div className="valor7-2">
              <b>$100</b>
            </div>
          </div>

          <div className="valor8-produto">
            <div className="valor8-1">$200</div>
            <div className="valor8-2">
              <b>$100</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdutosAlta;
