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
    * - Modification    : 
**/
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.css';

// Importing the navigation component
import CarouselNavigation from './CarouselNavigation';

const Carousel = ({ data, component: CardComponent, cardProps }) => {
  const swiperRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Filter the data to show only the first two albums
  const visibleData = data.slice(slideIndex, slideIndex + 2);

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={'auto'}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
        className={styles.swiper}
      >
        {visibleData.map((item) => (
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