/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 23/09/2025 - 16:20:17
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/09/2025
    * - Author          : DHANUSH
    * - Modification    : 
**/
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';
import CarouselNavigation from './CarouselNavigation';

const Carousel = ({ data, component: Component }) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 7,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Component
              image={item.image}
              title={item.title}
              follows={item.follows}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselNavigation />
    </div>
  );
};

export default Carousel;