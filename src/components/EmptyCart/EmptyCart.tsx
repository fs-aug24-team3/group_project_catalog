/* eslint-disable import/no-extraneous-dependencies */
import styles from './EmptyCart.module.scss';
import emptyCart from '../../../public/img/cart-is-empty.png';
import emptyCartDark from '../../../public/img/cart-is-empty-dark.png';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const EmptyCart = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const { t } = useTranslation();

  return (
    <article className={styles['empty-cart']}>
      <img
        src={theme === 'light' ? emptyCart : emptyCartDark}
        alt="image if cart is empty"
        className={styles['empty-cart__image']}
      />
      <h2 className={styles['empty-cart__title']}>
        {t('actions_pages.empty_text')}
      </h2>
      <Link to={'/'} className={styles['empty-cart__button']}>
        {t('actions_pages.empty_button')}
      </Link>
    </article>
  );
};
