import React from 'react';

import styles from './Categories.module.scss';
import { Link } from 'react-router-dom';

import categoryPhonesImg from './categoriesImages/newnewnewPhones.png';
import categoryTabletsImg from './categoriesImages/categoryTablets.png';
import categoryAccessories from './categoriesImages/newnewACCESS.png';

export const Categories: React.FC = () => {
  return (
    <>
      <div className={styles.categories__categoriesTitleContainer}>
        <h2 className={styles.categories__categoriesTitle}>Shop by category</h2>
      </div>

      <div className={styles.categories__categoriesContainer}>
        <div className={styles.oneCategory}>
          <div className={styles.imageContainer}>
            <Link to="phones">
              <picture>
                <source srcSet={categoryPhonesImg} media="(min-width: 640px)" />
                <img
                  src={categoryPhonesImg}
                  alt="iphone 14 image"
                  className={styles.bannerImage}
                />
              </picture>
            </Link>
          </div>
          <div className={styles.titleContainer}>
            <Link to="phones">
              <h3 className={styles.categoryTitle}>Mobile phones</h3>
            </Link>
          </div>
          <p className={styles.amountOfModels}>124 models</p>
        </div>

        <div className={styles.oneCategory}>
          <div className={styles.imageContainer}>
            <Link to="tablets">
              <picture>
                <source
                  srcSet={categoryTabletsImg}
                  media="(min-width: 640px)"
                />
                <img
                  src={categoryTabletsImg}
                  alt="apple ipad image"
                  className={styles.bannerImage}
                />
              </picture>
            </Link>
          </div>
          <div className={styles.titleContainer}>
            <Link to="tablets">
              <h3 className={styles.categoryTitle}>Tablets</h3>
            </Link>
          </div>
          <p className={styles.amountOfModels}>36 models</p>
        </div>

        <div className={`${styles.oneCategory} ${styles.noMarginRight}`}>
          <div className={styles.imageContainer}>
            <Link to="accessories">
              <picture>
                <source
                  srcSet={categoryAccessories}
                  media="(min-width: 640px)"
                />
                <img
                  src={categoryAccessories}
                  alt="apple watch image"
                  className={styles.bannerImage}
                />
              </picture>
            </Link>
          </div>
          <div className={styles.titleContainer}>
            <Link to="accessories">
              <h3 className={styles.categoryTitle}>Accessories</h3>
            </Link>
          </div>
          <p className={styles.amountOfModels}>34 models</p>
        </div>
      </div>
    </>
  );
};