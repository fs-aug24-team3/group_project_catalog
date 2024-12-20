/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { MainImageSlider } from './components/MainImageSlider';
import { Product } from '../../types/Product';
import { getCatalogPhones } from '../../api/api';
import { CardsSlider } from '../../components/CardsSlider';
import { Categories } from './components/Categories';
import { useTranslation } from 'react-i18next';

export const HomePage: React.FC = () => {
  const [phonesForSlider, setPhonesForSlider] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();

  const brandNewModelsTitl = 'homePage.newModelsTitle';

  const hotPricesTitle = 'homePage.hotPricesTitle';

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
        <h1 className={styles.homePage__title}>{t('homePage.mainTitle')}</h1>
      </div>

      <div className={styles.homePage__swiperBox}>
        <MainImageSlider />
      </div>

      {!isLoading && (
        <div className={styles.homePage__newModels}>
          <CardsSlider
            productsForSlider={phonesForSlider}
            sliderTitle={brandNewModelsTitl}
            productYear={2022}
            onSale={false}
          />
        </div>
      )}

      <div className={styles.homePage__categories}>
        <Categories />
      </div>

      {!isLoading && (
        <div className={styles.homePage__newModels}>
          <CardsSlider
            productsForSlider={phonesForSlider}
            sliderTitle={hotPricesTitle}
            productYear={2020}
            onSale={true}
            sortingOrder="asc"
          />
        </div>
      )}
    </div>
  );
};
