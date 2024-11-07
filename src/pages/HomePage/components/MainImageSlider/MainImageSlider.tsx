import React from 'react';
import { Link } from 'react-router-dom';

import phoneImageMobile from '../../../../images/mainSlider/phoneMobile.png';
import ipadImageMobile from '../../../../images/mainSlider/newIpadWithText.png';
import watchImageMobile from '../../../../images/mainSlider/watchWithText.png';

import phoneImageDesktop from '../../../../images/mainSlider/bigNewPhone.png';
import tabletImgTablet from '../../../../images/mainSlider/tabletImgTablet.png';
import watchFotTablets from '../../../../images/mainSlider/bigNewWatch.png';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import styles from './MainImageSlider.module.scss';
import './stylesForSwiper.css';

export const MainImageSlider: React.FC = () => {
  const swiper = useSwiper();

  const goToNextSlide = () => {
    swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiper.slidePrev();
  };

  return (
    <>
      <button className={styles.swiperButtonPrev} onClick={goToPrevSlide}>
        {'<'}
      </button>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{
          clickable: true,
          el: `.${styles.swiperPagination}`,
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={1400}
        style={{ width: '100%', maxWidth: '100%' }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        className={styles.sliderWrapper}
      >
        <SwiperSlide>
          <div className={styles.imageContainer}>
            <Link to="phones">
              <picture>
                <source srcSet={phoneImageDesktop} media="(min-width: 640px)" />
                <img
                  src={phoneImageMobile}
                  alt="iphone 14 image"
                  className={styles.bannerImage}
                />
              </picture>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainer}>
            <Link to="tablets">
              <picture>
                <source srcSet={tabletImgTablet} media="(min-width: 640px)" />
                <img
                  src={ipadImageMobile}
                  alt="apple ipad image"
                  className={styles.bannerImage}
                />
              </picture>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imageContainer}>
            <Link to="accessories">
              <picture>
                <source srcSet={watchFotTablets} media="(min-width: 640px)" />
                <img
                  src={watchImageMobile}
                  alt="apple watch image"
                  className={styles.bannerImage}
                />
              </picture>
            </Link>
          </div>
        </SwiperSlide>

        <div className={styles.swiperPagination}></div>
      </Swiper>
      <button className={styles.swiperButtonNext} onClick={goToNextSlide}>
        {'>'}
      </button>
    </>
  );
};
