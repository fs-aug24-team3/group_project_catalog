import { FC, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import styles from './ModalSwiper.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

interface Props {
  images: string[];
}

export const ModalSwiper: FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div className={styles.swiper__container}>
      <button className={styles.customPrevButton}>{'<'}</button>

      <div>
        <Swiper
          onSlideChange={swiper => setIndexActive(swiper.activeIndex)}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            nextEl: `.${styles.customNextButton}`,
            prevEl: `.${styles.customPrevButton}`,
          }}
        >
          {images.slice(0, 4).map(image => (
            <SwiperSlide key={image}>
              <div className={styles.slideImage__box}>
                <img
                  src={image}
                  alt="slide image"
                  className={styles.slideImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={6}
          watchSlidesProgress
        >
          {images.slice(0, 4).map((image, index) => (
            <SwiperSlide
              key={index}
              style={{ width: '80px', marginRight: '0' }}
            >
              <div
                className={`${styles.thumbImage__box} ${
                  index === indexActive ? styles.activeThumb : ''
                }`}
              >
                <img
                  src={image}
                  alt="thumb image"
                  className={styles.thumbImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className={styles.customNextButton}>{'>'}</button>
    </div>
  );
};
