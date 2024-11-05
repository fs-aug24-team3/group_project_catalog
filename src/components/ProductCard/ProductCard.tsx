import { useState } from 'react';
import { AddToCartButton } from '../AddToCartButton';
import { AddToFavouritesButton } from '../AddToFavouritesButton';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

export const ProductCard = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [favourited, setFavourited] = useState(false);

  const handleAddToCart = () => {
    setIsPressed(prev => !prev);
  };

  const handleFavourite = () => {
    setFavourited(prev => !prev);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <Link to="#magyar">
          <img
            src="src/images/phones/iphone-xs-silver.png"
            alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
            className={styles.card__image}
          />
        </Link>

        <Link to="#magyar" className={styles.card__name}>
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </Link>

        <div className={styles.card__price}>
          <p className={styles['card__price--value']}>$799</p>
          <p className={styles['card__price--old-value']}>$899</p>
        </div>
      </div>

      <div className={styles.card__divider}></div>

      <div className={styles.card__description}>
        <div className={styles['card__description--screen']}>
          <p className={styles['card__description--screen-title']}>Screen</p>
          <p className={styles['card__description--screen-value']}>5.8” OLED</p>
        </div>

        <div className={styles['card__description--capacity']}>
          <p className={styles['card__description--capacity-title']}>
            Capacity
          </p>
          <p className={styles['card__description--capacity-value']}>64 GB</p>
        </div>

        <div className={styles['card__description--ram']}>
          <p className={styles['card__description--ram-title']}>RAM</p>
          <p className={styles['card__description--ram-value']}>4 GB</p>
        </div>
      </div>

      <div className={styles.card__button}>
        <AddToCartButton isPressed={isPressed} onAddToCart={handleAddToCart} />
        <AddToFavouritesButton
          favourited={favourited}
          onFavourite={handleFavourite}
        />
      </div>
    </div>
  );
};
