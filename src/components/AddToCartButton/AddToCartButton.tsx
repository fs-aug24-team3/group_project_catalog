/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import styles from './AddToCartButton.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Props = {
  isPressed: boolean;
  onAddToCart: () => void;
};

export const AddToCartButton: FC<Props> = ({ isPressed, onAddToCart }) => {
  const { t } = useTranslation();

  return (
    <Link
      to="#buy"
      className={`${styles['card__button--buy']} ${
        isPressed ? styles['card__button--active'] : ''
      }`}
      onClick={() => {
        onAddToCart();
      }}
    >
      {isPressed ? t('buttons.added') : t('buttons.add_to_cart')}
    </Link>
  );
};
