import React from 'react';
import { CartProduct } from '../../types/CartProduct';
import styles from './CartItem.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

interface Props {
  cartProduct: CartProduct;
}

export const CartItem: React.FC<Props> = ({ cartProduct }) => {
  const dispatch = useDispatch();
  const { name, image, price, itemId, category } = cartProduct.product;
  const { quantity } = cartProduct;

  const handleDecrement = () => {
    dispatch(decrementQuantity(cartProduct.id));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(cartProduct.id));
  };

  const handleRemove = () => {
    dispatch(removeItemFromCart(cartProduct.id));
  };

  return (
    <article className={styles['cart-item']}>
      <div className={styles['cart-item__container']}>
        <button
          className={styles['cart-item__remove-button']}
          onClick={handleRemove}
          aria-label="remove product button"
        ></button>
        <img className={styles['cart-item__image']} src={image} alt={name} />
        <Link
          to={`/${category}/${itemId}`}
          className={styles['cart-item__link']}
        >
          {name}
        </Link>
      </div>
      <div className={styles['cart-item__container']}>
        <div className={styles['cart-item__count-block']}>
          <button
            disabled={quantity <= 1}
            className={classNames(
              styles['cart-item__count-button'],
              styles['cart-item__count-button--minus'],
            )}
            onClick={handleDecrement}
            aria-label="decrease quantity"
          ></button>
          <p className={styles['cart-item__quantity']}>{quantity}</p>
          <button
            className={classNames(
              styles['cart-item__count-button'],
              styles['cart-item__count-button--plus'],
            )}
            disabled={quantity >= 999}
            onClick={handleIncrement}
            aria-label="increase quantity"
          ></button>
        </div>
        <p className={styles['cart-item__price']}>${price * quantity}</p>
      </div>
    </article>
  );
};
