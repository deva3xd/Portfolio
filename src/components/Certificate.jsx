import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import Gamelab from "../images/certificate/gamelab.jpg";
import Inotek from "../images/certificate/inotek.jpg";
import Toefl from "../images/certificate/toefl.jpg";
import Stains from "../images/certificate/stains.jpg";
import Ml from "../images/certificate/machine_learning.jpg";

const Certificate = () => {
  const [isBeginning, setIsBeginning] = useState(true); // Menyimpan status di awal
  const [isEnd, setIsEnd] = useState(false);

  const items = [
    {
      img: Gamelab,
      alt: "gamelab",
      name: "Gamelab"
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

  // swiper button
  const swiperRef = useRef(null);

  const goToNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const goToPrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleSlideChange = () => {
    setIsBeginning(swiperRef.current.swiper.isBeginning);
    setIsEnd(swiperRef.current.swiper.isEnd);
  };

  return (
    <section className="bg-default py-16 max-w-screen-xl mx-auto px-5 sm:px-16" id="certificate">
      <span className="text-primary text-lg">-Certificate</span>
      <h2 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-5 text-primary">Formal and Non Formal</h2>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={10}
        fadeEffect="true"
        grabCursor="true"
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        onSlideChange={handleSlideChange}
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
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm">
              <img className="rounded-t-sm" src={item.img} alt={item.alt} loading="lazy" />
              <div className="p-2">
                <h5 className="text-lg sm:text-xl tracking-tight text-gray-900">{item.name}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-end text-default gap-2 mt-2">
          <button onClick={goToPrev} className="bg-primary py-2 px-4 rounded-sm hover:bg-primary/90 disabled:bg-primary/65" disabled={isBeginning}><HiOutlineArrowNarrowLeft size={20} /></button>
          <button onClick={goToNext} className="bg-primary py-2 px-4 rounded-sm hover:bg-primary/90 disabled:bg-primary/65" disabled={isEnd}><HiOutlineArrowNarrowRight size={20} /></button>
        </div>
      </Swiper>
    </section>
  )
}

export default Certificate;