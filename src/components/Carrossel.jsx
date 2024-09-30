import React from "react";
import img1 from "/src/image/6d839d9bc81eba71990cf69a20c77364.png";
import img2 from "/src/image/6d839d9bc81eba71990cf69a20c77364.png";
import img3 from "/src/image/6d839d9bc81eba71990cf69a20c77364.png";
import img4 from "/src/image/6d839d9bc81eba71990cf69a20c77364.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

function Carrossel() {
  const data = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
  ];

  return (
    <>
      <div className="carrossel">
        <div className="coluna-carrossel">
          <h1 className="h1">Melhores ofertas personalizadas</h1>
          <h2 className="h2">Queima de estoque Nike 🔥</h2>
          <p className="texto1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
            ut officiis. Iusto sequi ipsum eligendi quo alias nisi.
          </p>
          <button className="botao-carrossel">Ver Ofertas</button>
        </div>
      </div>

      <div className="elipse">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} alt="slider" className="div-img-carrossel" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Carrossel;
