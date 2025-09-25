/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 24/09/2025 - 08:58:43
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 24/09/2025
 * - Author          : DHANUSH
 * - Modification    :
 **/
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";

// SVG for the Left Arrow
const LeftArrow = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1L5 8.5L12 16"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// SVG for the Right Arrow
const RightArrow = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 1L12 8.5L5 16"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CarouselNavigation = ({ swiperRef }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      const updateButtons = () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      };

      swiper.on("slideChange", updateButtons);
      updateButtons(); // Initial state
    }
  }, [swiper]);

  // We are counting how many times the user clicks the next button
  const [clickCount, setClickCount] = useState(0);

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setClickCount((prevCount) => prevCount - 1);
    }
  };

  const showNavButtons = clickCount < 4;

  return (
    <>
      <button
        onClick={handlePrevClick}
        className={`${styles.navButton} ${styles.navLeft}`}
        disabled={isBeginning}
        style={{ display: showNavButtons ? "block" : "none" }}
      >
        <LeftArrow />
      </button>
      <button
        onClick={handleNextClick}
        className={`${styles.navButton} ${styles.navRight}`}
        disabled={isEnd}
        style={{ display: showNavButtons ? "block" : "none" }}
      >
        <RightArrow />
      </button>
    </>
  );
};

export default CarouselNavigation;
