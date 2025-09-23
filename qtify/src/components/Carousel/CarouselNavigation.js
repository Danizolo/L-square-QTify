/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 23/09/2025 - 16:21:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/09/2025
    * - Author          : DHANUSH
    * - Modification    : 
**/
import React from "react";
import styles from "./Carousel.module.css";

const CarouselNavigation = () => {
  const leftArrow = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Paste your Left Arrow SVG here */}
    </svg>
  );

  const rightArrow = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Paste your Right Arrow SVG here */}
    </svg>
  );

  return (
    <>
      <div className={`${styles.swiperButtonPrev} swiper-button-prev`}>
        {leftArrow}
      </div>
      <div className={`${styles.swiperButtonNext} swiper-button-next`}>
        {rightArrow}
      </div>
    </>
  );
};

export default CarouselNavigation;
