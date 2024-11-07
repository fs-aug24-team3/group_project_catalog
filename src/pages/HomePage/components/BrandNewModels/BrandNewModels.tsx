import React, { useEffect, useState } from 'react';
import styles from './BrandNewModels.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { ProductCard } from '../../../../components/ProductCard';
import { Product } from '../../../../types/Product';
import { calculateWidth } from './calculateWidth';

interface Props {
  phonesForSlider: Product[];
}

export const BrandNewModels: React.FC<Props> = ({ phonesForSlider }) => {
  const allphones = phonesForSlider;

  const visiblePhones = allphones.filter(phone => phone.year === 2022);

  const sortedPhonesByPrice = [...visiblePhones].sort((phone1, phone2) => {
    return phone2.price - phone1.price;
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const itemsForScreen = calculateWidth(windowWidth);

  return (
    <div className={styles.brandNewModels}>
      <div className={styles.brandNewModels__TextAndButtons}>
        <div className={styles.brandNewModels__textWrapper}>
          <h2 className={styles.brandNewModels__title}>Brand new models</h2>
        </div>
        <div className={styles.brandNewModels__buttonsWrapper}>
          <button className={styles.brandNewModels__buttonPrev}>{'<'}</button>
          <button className={styles.brandNewModels__buttonNext}>{'>'}</button>
        </div>
      </div>
      <div className={styles.swiperNoHover}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={itemsForScreen}
          loop={false}
          speed={1400}
          style={{ width: '100%', maxWidth: '100%' }}
          navigation={{
            nextEl: `.${styles.brandNewModels__buttonNext}`,
            prevEl: `.${styles.brandNewModels__buttonPrev}`,
          }}
          className={styles['swiper-slide']}
        >
          {sortedPhonesByPrice.map(visiblePhone => (
            <SwiperSlide key={visiblePhone.id}>
              <ProductCard
                item={visiblePhone}
                onSale={false}
                posibilityToScale={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
