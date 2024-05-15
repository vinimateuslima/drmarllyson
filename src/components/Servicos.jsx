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

const Servicos = () => {
  const data = [
    {
      id: 1,
      title: "Facetas Dentárias",
      src: "facetas.png",
      description:
        "Transforme seu sorriso com camadas finas de porcelana ou resina, corrigindo imperfeições para um sorriso deslumbrante!",
      link: "",
    },
    {
      id: 2,
      title: "Clareamento",
      src: "clareamento.png",
      description:
        "Recupere o brilho do seu sorriso! Remova manchas e descolorações para um sorriso mais branco e radiante.",
      link: "",
    },
    {
      id: 3,
      title: "Próteses Móveis",
      src: "protese.png",
      description:
        " Sorria com confiança! Próteses móveis personalizadas para restaurar a função e a estética dos seus dentes.",
      link: "",
    },
  ];

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
