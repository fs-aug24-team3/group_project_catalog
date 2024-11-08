import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { MainImageSlider } from './components/MainImageSlider/MainImageSlider';
import { BrandNewModels } from './components/BrandNewModels/BrandNewModels';
import { Product } from '../../types/Product';
import { getCatalogPhones } from '../../api/api';

export const HomePage: React.FC = () => {
  const [phonesForSlider, setPhonesForSlider] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getCatalogPhones()
      .then(setPhonesForSlider)
      .catch(() => {
        throw new Error('Something went wrong! Please try again!');
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.homePage__box}>
        <h1 className={styles.homePage__title}>
          Welcome to Nice Gadgets store!
        </h1>
      </div>

      <div className={styles.homePage__swiperBox}>
        <MainImageSlider />
      </div>

      {!isLoading && (
        <div className={styles.newModels}>
          <BrandNewModels phonesForSlider={phonesForSlider} />
        </div>
      )}
    </div>
  );
};
