import React from 'react';
import styles from './BrandNewModels.module.scss';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { ProductCard } from '../../../../components/ProductCard';
import { Product } from '../../../../types/Product';

interface Props {
  phonesForSlider: Product[];
}

export const BrandNewModels: React.FC<Props> = ({ phonesForSlider }) => {
  const swiper = useSwiper();

  const goToNextSlide = () => {
    swiper.slideNext();
  };

  const goToPrevSlide = () => {
    swiper.slidePrev();
  };

  const allphones = phonesForSlider;

  const visiblePhones = allphones.filter(phone => phone.year === 2022);

  const sortedPhonesByPrice = [...visiblePhones].sort((phone1, phone2) => {
    return phone2.price - phone1.price;
  });

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
          {sortedPhonesByPrice.map(visiblePhone => (
            <SwiperSlide key={visiblePhone.id}>
              <ProductCard item={visiblePhone} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
