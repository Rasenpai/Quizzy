// ImageCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Quizz from "../assets/Quizz.jpg";
import Quizz2 from "../assets/Quizz2.jpg";
import Quizz3 from "../assets/Quizz3.jpg";

const images = [Quizz, Quizz2, Quizz3];

const Curousel = () => {
  return (
    <div className="w-full h-screen block mt-16 md:hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        spaceBetween={30}
        slidesPerView={1}
        className="rounded overflow-hidden"
      >
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <img
              src={url}
              alt={`slide-${index}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Curousel;
