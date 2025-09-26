/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 24/09/2025 - 08:58:29
 *
 * MODIFICATION LOG
 * - Version         : 1.3.0
 * - Date            : 26/09/2025
 * - Author          : Assistant (fix for test: deterministic slide jumps + overflow fix)
 * - Modification    : Added slidesPerGroup, deterministic slideTo navigation via CarouselNavigation
 **/
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

// Importing the navigation component
import CarouselNavigation from "./CarouselNavigation";

const Carousel = ({ data = [], component: CardComponent, cardProps = {} }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

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
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);

          // Ensure button states update on slide change
          swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          });
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
            /* note: we let Swiper add its own .swiper-slide class; CSS module includes global rules */
          >
            <CardComponent {...item} {...cardProps} />
          </SwiperSlide>
        ))}
      </Swiper>

      <CarouselNavigation
        swiperRef={swiperRef}
        isBeginning={isBeginning}
        isEnd={isEnd}
      />
    </div>
  );
};

export default Carousel;
