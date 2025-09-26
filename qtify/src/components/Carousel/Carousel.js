/**
 * @description      : Carousel with always-enabled navigation buttons
 * @author           : DHANUSH
 * @group            :
 * @created          : 24/09/2025 - 08:58:29
 *
 * MODIFICATION LOG
 * - Version         : 1.4.0
 * - Date            : 26/09/2025
 * - Author          : Assistant (always enabled nav buttons)
 * - Modification    : Removed disabled state handling for navigation
 **/
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

import CarouselNavigation from "./CarouselNavigation";

const Carousel = ({ data = [], component: CardComponent, cardProps = {} }) => {
  const swiperRef = useRef(null);

  const slides = Array.isArray(data) ? data : [];

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        slidesPerGroup={3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={styles.swiper}
        breakpoints={{
          600: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          900: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1200: {
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
        }}
      >
        {slides.map((item) => (
          <SwiperSlide
            key={item.id ?? item.title ?? Math.random()}
          >
            <CardComponent {...item} {...cardProps} />
          </SwiperSlide>
        ))}
      </Swiper>

      <CarouselNavigation swiperRef={swiperRef} />
    </div>
  );
};

export default Carousel;
