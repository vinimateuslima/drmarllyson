import "./Servicos.css";

import Card from "./Card";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Gerar importação da imagem
import { getImageURL } from "./getImageURL";
import { useEffect, useState } from "react";

const Servicos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("src/assets/data/dataCard.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;

  return (
    <section id="servicos" className="servicos">
      <div className="carousel">
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((card) => (
            <SwiperSlide key={card.id}>
              <Card
                title={card.title}
                description={card.description}
                src={getImageURL(card.src)}
                link={card.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Servicos;
