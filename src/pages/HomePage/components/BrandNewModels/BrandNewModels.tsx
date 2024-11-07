import React from 'react';
import styles from './BrandNewModels.module.scss';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

export const BrandNewModels: React.FC = () => {
  const swiper = useSwiper();

  const goToNextSlide = () => {
    swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiper.slidePrev();
  };

  return (
    <div className={styles.brandNewModels}>
      <div className={styles.brandNewModels__TextAndButtons}>
        <div className={styles.brandNewModels__textWrapper}>
          <h2 className={styles.brandNewModels__title}>Brand new models</h2>
        </div>
        <div className={styles.brandNewModels__buttonsWrapper}>
          <button
            className={styles.brandNewModels__buttonPrev}
            onClick={goToPrevSlide}
          >
            {'<'}
          </button>
          <button
            className={styles.brandNewModels__buttonNext}
            onClick={goToNextSlide}
          >
            {'>'}
          </button>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={4}
          loop={false}
          speed={1400}
          style={{ width: '100%', maxWidth: '100%' }}
          navigation={{
            nextEl: `.${styles.brandNewModels__buttonNext}`,
            prevEl: `.${styles.brandNewModels__buttonPrev}`,
          }}
        >
          <SwiperSlide>
            <p>ANATOLII</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>YURII</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>VIKA</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>YULIA</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>VITALII</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>MYKOLA</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>ANATOLII</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>YURII</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>VIKA</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>YULIA</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>VITALII</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>MYKOLA</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>ANATOLII</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>YURII</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>VIKA</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>YULIA</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>VITALII</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>MYKOLA</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
