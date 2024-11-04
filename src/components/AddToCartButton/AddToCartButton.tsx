import { FC } from 'react';
import styles from './AddToCartButton.module.scss';

type Props = {
  isPressed: boolean;
  onAddToCart: () => void;
};

export const AddToCartButton: FC<Props> = ({ isPressed, onAddToCart }) => {
  return (
    <a
      href="#buy"
      className={`${styles['card__button--buy']} ${
        isPressed ? styles['card__button--active'] : ''
      }`}
      onClick={() => {
        onAddToCart();
      }}
    >
      {isPressed ? 'Added' : 'Add to cart'}
    </a>
  );
};
