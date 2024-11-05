import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export const MainImageSlider: React.FC = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => {}}
      onSwiper={() => {}}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};
