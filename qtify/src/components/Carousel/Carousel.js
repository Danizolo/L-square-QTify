/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 24/09/2025 - 08:58:29
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 24/09/2025
 * - Author          : DHANUSH
 * - Modification    : Corrected data handling for Swiper.
 **/
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

// Importing the navigation component
import CarouselNavigation from "./CarouselNavigation";

const Carousel = ({ data, component: CardComponent, cardProps }) => {
  const swiperRef = useRef(null);

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={40}
        // Set a default value and use breakpoints for responsiveness
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.swiper}
        breakpoints={{
          // When window width is >= 600px
          600: {
            slidesPerView: 3,
          },
          // When window width is >= 900px
          900: {
            slidesPerView: 5,
          },
          // When window width is >= 1200px
          1200: {
            slidesPerView: 7,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className={styles.swiperSlide}>
            <CardComponent {...item} {...cardProps} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselNavigation swiperRef={swiperRef} />
    </div>
  );
};

export default Carousel;
