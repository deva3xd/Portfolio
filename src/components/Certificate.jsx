import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Gamelab from "../images/certificate/gamelab.jpg";
import Workshop from "../images/certificate/workshop.jpg";
import Inotek from "../images/certificate/inotek.jpg";
import Toefl from "../images/certificate/toefl.jpg";
import Stains from "../images/certificate/stains.jpg";
import Ml from "../images/certificate/machine_learning.jpg";

const Certificate = () => {
  const items = [
    {
      img: Gamelab,
      alt: "gamelab",
      name: "Gamelab"
    },
    {
      img: Workshop,
      alt: "workshop",
      name: "Workshop"
    },
    {
      img: Inotek,
      alt: "inotek",
      name: "Inotek"
    },
    {
      img: Toefl,
      alt: "toefl",
      name: "TOEFL"
    },
    {
      img: Stains,
      alt: "stains",
      name: "Stains"
    },
    {
      img: Ml,
      alt: "machine learning",
      name: "Machine Learning"
    },
  ]
  return (
    <section className="bg-default py-16 max-w-screen-xl mx-auto px-5 sm:px-16" id="certificate">
      <span className="text-primary text-lg">-Certificate</span>
      <h2 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-5 text-primary">Formal and Non Formal</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        fadeEffect="true"
        grabCursor="true"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-1/5max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
              <img className="rounded-t-lg" src={item.img} alt={item.alt} loading="lazy" />
              <div className="p-2 h-12">
                <h5 className="text-lg sm:text-xl tracking-tight text-gray-900">{item.name}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Certificate;