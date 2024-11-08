import React, { useEffect, useState } from 'react';
import styles from './CardsSlider.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard';
import { calculateWidth } from './calculateWidth';

interface Props {
  productsForSlider: Product[];
  sliderTitle: string;
  productYear?: number;
  onSale?: boolean;
}

export const CardsSlider: React.FC<Props> = ({
  productsForSlider,
  sliderTitle,
  productYear = 2022,
  onSale = true,
}) => {
  const allProducts = productsForSlider;

  const visibleProducts = allProducts.filter(
    product => product.year === productYear,
  );

  const sortedProductsByPrice = [...visibleProducts].sort(
    (product1, product2) => {
      return product2.price - product1.price;
    },
  );

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
          <h2 className={styles.brandNewModels__title}>{sliderTitle}</h2>
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
          {sortedProductsByPrice.map(visiblePhone => (
            <SwiperSlide key={visiblePhone.id}>
              <ProductCard
                item={visiblePhone}
                onSale={onSale}
                posibilityToScale={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
