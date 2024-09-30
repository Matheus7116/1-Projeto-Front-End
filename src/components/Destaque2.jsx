import { Shirt } from "lucide-react";
import { PiBaseballCapThin, PiPantsThin } from "react-icons/pi";
import { PiTShirtThin } from "react-icons/pi";
import { CiHeadphones } from "react-icons/ci";
import { GiRunningShoe } from "react-icons/gi";

import React from "react";

function Destaque2() {
  return (
    <div>
      <h3 className="textocolecao2">Coleções em destaque</h3>
      <div className="containercolecao">
        <div className="itenscolecao">
          <PiTShirtThin size={90} />
          <h4>Camisetas</h4>
        </div>
        <div className="itenscolecao">
          <PiPantsThin size={90} />
          <h4>Calças</h4>
        </div>
        <div className="itenscolecao">
          <PiBaseballCapThin size={90} />
          <h4>Bonés</h4>
        </div>
        <div className="itenscolecao">
          <CiHeadphones size={90} />
          <h4>Headphones</h4>
        </div>
        <div className="itenscolecao">
          <GiRunningShoe size={90} />
          <h4>Tênis</h4>
        </div>
      </div>
    </div>
  );
}

export default Destaque2;
