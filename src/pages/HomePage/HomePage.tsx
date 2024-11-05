import React from 'react';
import styles from './HomePage.module.scss';
import { MainImageSlider } from './components/MainImageSlider/MainImageSlider';

export const HomePage: React.FC = () => {
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
    </div>
  );
};
