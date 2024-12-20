/* eslint-disable import/no-extraneous-dependencies */
import { FC, useEffect, useState } from 'react';
import { AddToCartButton } from '../AddToCartButton';
import { AddToFavouritesButton } from '../AddToFavouritesButton';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import { CartProduct } from '../../types/CartProduct';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';
import { CardPrices } from '../CardPrices/CardPrices';
import { useTranslation } from 'react-i18next';

interface Props {
  item: Product;
  onSale?: boolean;
  posibilityToScale?: boolean;
  onRemoveFromFavourites?: (id: number | string) => void;
}

export const ProductCard: FC<Props> = ({
  item,
  onSale = true,
  posibilityToScale = true,
  onRemoveFromFavourites,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const { t } = useTranslation();

  const { image, name, price, fullPrice, screen, capacity, ram, itemId } = item;

  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.cartItems);

  const handleAddToCart = () => {
    if (!isPressed) {
      const cartProduct: CartProduct = {
        id: itemId,
        quantity: 1,
        product: item,
      };

      dispatch(addItemToCart(cartProduct));
      setIsPressed(true);
    }
  };

  useEffect(() => {
    const isItemInCart = items.some(itm => itm.id === itemId);

    setIsPressed(isItemInCart);
  }, [items, itemId]);

  return (
    <li
      className={
        posibilityToScale
          ? `${styles.card} ${styles.abilityToScale}`
          : `${styles.card}`
      }
    >
      <div className={styles.card__wrapper}>
        <Link to={`/${item.category}/${itemId}`} className={styles.card__image}>
          <img src={image} alt={name} className={styles['card__image--img']} />
        </Link>

        <Link to={`/${item.category}/${itemId}`} className={styles.card__name}>
          {name}
        </Link>
      </div>

      <CardPrices price={price} fullPrice={fullPrice} onSale={onSale} />

      <div className={styles.card__divider}></div>

      <div className={styles.card__description}>
        <div className={styles['card__description--container']}>
          <p className={styles['card__description--container-name']}>
            {t('details.screen')}
          </p>
          <p className={styles['card__description--container-value']}>
            {screen}
          </p>
        </div>

        <div className={styles['card__description--container']}>
          <p className={styles['card__description--container-name']}>
            {t('details.capacity')}
          </p>
          <p className={styles['card__description--container-value']}>
            {capacity}
          </p>
        </div>

        <div className={styles['card__description--container']}>
          <p className={styles['card__description--container-name']}>
            {t('details.ram')}
          </p>
          <p className={styles['card__description--container-value']}>{ram}</p>
        </div>
      </div>

      <div className={styles.card__button}>
        <AddToCartButton isPressed={isPressed} onAddToCart={handleAddToCart} />
        <AddToFavouritesButton
          item={item}
          onRemoveFromFavourites={onRemoveFromFavourites}
        />
      </div>
    </li>
  );
};
