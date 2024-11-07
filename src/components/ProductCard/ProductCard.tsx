import { FC, useState } from 'react';
import { AddToCartButton } from '../AddToCartButton';
import { AddToFavouritesButton } from '../AddToFavouritesButton';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';

interface Props {
  item: Product;
}

export const ProductCard: FC<Props> = ({ item }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [favourited, setFavourited] = useState(false);

  const { image, name, price, fullPrice, screen, capacity, ram } = item;

  const handleAddToCart = () => {
    setIsPressed(prev => !prev);
  };

  const handleFavourite = () => {
    setFavourited(prev => !prev);
  };

  return (
    <li className={styles.card}>
      <div className={styles.card__wrapper}>
        <Link to="#magyar" className={styles.card__image}>
          <img src={image} alt={name} className={styles['card__image--img']} />
        </Link>

        <Link to="#magyar" className={styles.card__name}>
          {name}
        </Link>
      </div>

      <div className={styles.card__price}>
        <p className={styles['card__price--value']}>${price}</p>
        <p className={styles['card__price--old-value']}>${fullPrice}</p>
      </div>

      <div className={styles.card__divider}></div>

      <div className={styles.card__description}>
        <div className={styles['card__description--container']}>
          <p className={styles['card__description--container-name']}>Screen</p>
          <p className={styles['card__description--container-value']}>
            {screen}
          </p>
        </div>

        <div className={styles['card__description--container']}>
          <p className={styles['card__description--container-name']}>
            Capacity
          </p>
          <p className={styles['card__description--container-value']}>
            {capacity}
          </p>
        </div>

        <div className={styles['card__description--container']}>
          <p className={styles['card__description--container-name']}>RAM</p>
          <p className={styles['card__description--container-value']}>{ram}</p>
        </div>
      </div>

      <div className={styles.card__button}>
        <AddToCartButton isPressed={isPressed} onAddToCart={handleAddToCart} />
        <AddToFavouritesButton
          favourited={favourited}
          onFavourite={handleFavourite}
        />
      </div>
    </li>
  );
};
